import {
  all,
  call,
  fork,
  put,
  select,
  takeEvery,
} from "@redux-saga/core/effects";
import {
  API_ACTION_ERROR,
  API_ACTION_GET,
  API_ACTION_POST,
  API_ACTION_SUCCESS,
} from "../consts/actions";
import axios from "axios";
import { ApiActionPost } from "../actions/api";
import { putWait } from "./utils";
// import co from "co";

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
});
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

/**
 * @typedef {("json"|"formData")} ApiBodyTypes
 */

/**
 *
 * @param getAccessTokenSelector
 * @param refreshTokenEndpoint
 * @param clientId
 * @param {ApiBodyTypes} bodyType
 * @returns {function(): Generator<CombinatorEffect<"ALL", SimpleEffect<"FORK", ForkEffectDescriptor<* extends ((...args: any[]) => SagaIterator<infer RT>) ? RT : (* extends ((...args: any[]) => Promise<infer RT>) ? RT : (* extends ((...args: any[]) => infer RT) ? RT : never))>>>, void, *>}
 */
export default function apiSagaCreator({
  getAccessTokenSelector = (state) => state.auth?.authUser?.["access-token"],
  refreshTokenEndpoint,
  clientId,
  bodyType,
}) {
  if (typeof refreshTokenEndpoint !== "string")
    throw new Error("Please set refreshTokenEndpoint in apiSagaCreator");
  if (typeof clientId !== "string") {
    throw new Error("Please set clientId in apiSagaCreator");
  }
  const getHeader = ({ auth }) =>
    call(function* () {
      const headers = {};
      if (auth === true) {
        const accessToken = yield select(getAccessTokenSelector);
        headers.Authentication = `Bearer ${accessToken}`;
      }
      return headers;
    });

  const actionRefresh = () =>
    call(function* () {
      const refreshToken = yield select(
        (state) => state.auth?.authUser * ["refresh-token"],
      );
      if (typeof refreshToken !== "string")
        throw new Error("Refresh Token is empty");
      return ApiActionPost(
        refreshTokenEndpoint,
        {
          grant_type: "refresh_token",
          client_id: clientId,
          refresh_token: refreshToken,
        },
        false,
      );
    });

  const requireRefreshToken = () =>
    call(function* () {
      const data = yield putWait(yield actionRefresh());
    });

  const handleApiError = (err, auth) =>
    call(function* () {
      // if (!auth) {
      yield put({ type: API_ACTION_ERROR, err });
      // }
    });

  const buildBodyFormData = (body) => {
    const formData = new FormData();
    for (let key in body)
      if (body.hasOwnProperty(key)) {
        formData.append(key, body[key]);
      }
    return formData;
  };
  /**
   *
   * @param body
   * @param {ApiBodyTypes} _bodyType
   * @returns {FormData|*}
   */
  const buildBody = (body, _bodyType) => {
    if ((_bodyType || bodyType) === "json") return body;
    return buildBodyFormData(body);
  };

  function* apiGet() {
    yield takeEvery(API_ACTION_GET, function* ({
      ts,
      method,
      url,
      auth = true,
    }) {
      const headers = yield getHeader({ auth });
      if (auth === true) {
        const accessToken = yield select(getAccessTokenSelector);
        headers.Authentication = `Bearer ${accessToken}`;
      }
      try {
        const { data } = yield call(api.get, url, { headers });
        yield put({ type: API_ACTION_SUCCESS, method, ts, data });
      } catch (err) {
        yield handleApiError(err, auth);
      }
    });
  }

  function* apiPost() {
    yield takeEvery(API_ACTION_POST, function* ({
      ts,
      method,
      url,
      auth = true,
      body = {},
      options = {},
    }) {
      const headers = yield getHeader({ auth }),
        { bodyType: _bodyType } = options;
      if (auth === true) {
        const accessToken = yield select(getAccessTokenSelector);
        headers.Authentication = `Bearer ${accessToken}`;
      }
      try {
        const { data } = yield call(api.post, url, buildBody(body, _bodyType), {
          headers,
        });
        yield put({ type: API_ACTION_SUCCESS, ts, method, data });
      } catch (err) {
        // if 401 need to refresh
        if (err.response.status === 401 && auth) yield requireRefreshToken();
        else yield handleApiError(err.response, auth);
      }
    });
  }

  return function* apiSaga() {
    yield all([apiGet, apiPost].map((o) => fork(o)));
  };
}
