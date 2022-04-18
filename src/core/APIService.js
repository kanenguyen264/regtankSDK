import axios from "axios";
import { AuthActionRefresh } from "../actions/auth";
import {
  AUTH_ACTION_5XX,
  AUTH_ACTION_LOGIN_SUCCESS,
  AUTH_ACTION_403,
} from "../consts/actions";
import { delay } from "../utils/promises";
import { takeLeading } from "@redux-saga/core/effects";

class APIErrorMfaRequired extends Error {
  name = "APIErrorMfaRequired";
  mfaToken;
  constructor({ response }) {
    super(response.data.error_description);
    this.mfaToken = response.data.mfa_token;
  }
}

class APIErrorAccountLocked extends Error {
  name = "APIErrorAccountLocked";
  message = "Account is locked";
}

class APIErrorMfaSetup extends Error {
  name = "APIErrorMfaSetup";
  optCode;

  constructor({ response }) {
    super(response.data.error_description);
    this.optCode = response.data.opt_code;
  }
}

export { APIErrorMfaRequired, APIErrorAccountLocked, APIErrorMfaSetup };

/**
 *
 * @type {APIService[]}
 */
let instances = [];

export default class APIService {
  #store;
  /**
   * @private
   */
  _api;
  #f5api;
  get;
  post;
  put;
  delete;
  refresh;
  accessDenied;
  f5mutex = null;

  constructor(instanceConfig) {
    const apiInstance = axios.create(instanceConfig);
    ["get", "post", "put", "delete"].forEach((method) => {
      this[method] = apiInstance[method];
    });
    this._api = apiInstance;
    this.#f5api = axios.create(instanceConfig);
    this.refresh = this.#f5api.post;
    this.accessDenied = false;
    instances.push(this);
  }

  static *handleLoginSuccess() {
    yield takeLeading(AUTH_ACTION_LOGIN_SUCCESS, function* () {
      instances.forEach((instance) => {
        instance.f5mutex = null;
      });
    });
  }

  interceptWithStore(store) {
    this.#store = store;
    this._api.interceptors.request.use((config) => {
      const accessToken = this.#store.getState().auth.authUser?.[
        "access_token"
      ];
      if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    });
    this._api.interceptors.response.use(
      (response) => {
        this.accessDenied = false;
        return response;
      },
      /**
       *
       * @param {AxiosError} error
       * @returns {Promise<*>}
       */
      async (error) => {
        if (error.response?.status === 401) {
          if (error.response.data?.error === "mfa_required") {
            throw new APIErrorMfaRequired(error);
          }

          if (error.response.data?.error === "locked") {
            throw new APIErrorAccountLocked(error);
          }

          if (error.response.data?.error === "mfa_setup") {
            throw new APIErrorMfaSetup(error);
          }
          /**
           * Show number login failed
           */
          if (
            error.response.data?.error === "unauthorized" &&
            error.response.data?.failed_attempts
          ) {
            throw error;
          }

          try {
            if (!this.f5mutex)
              this.f5mutex = this.#store.dispatch(AuthActionRefresh());
            await this.f5mutex;
            this.f5mutex = null;
            // await delay(10);
            return this._api.request(error.config);
          } catch (e) {
            this.f5mutex = null;
            throw e;
          }
        }
        /**
         * Handle message when 403
         */
        if (
          error.response?.status === 403 &&
          error.response.data?.error === "acl_changed"
        ) {
          this.accessDenied = true;
          throw error;
        }
        if (error.response?.status > 500) {
          return this.#store.dispatch({ type: AUTH_ACTION_5XX });
        }
        throw error;
      },
    );
  }
}
