import { combineRootSagas } from "./utils";
import {
  call,
  getContext,
  put,
  select,
  takeEvery,
  takeLeading,
} from "@redux-saga/core/effects";
import {
  AUTH_ACTION_5XX,
  AUTH_ACTION_LOGIN,
  AUTH_ACTION_LOGIN_ERROR,
  AUTH_ACTION_LOGIN_MFA,
  AUTH_ACTION_LOGIN_SUCCESS,
  SAGA_CONTEXT_AUTH_SERVICE,
} from "../consts/actions";
import APIService, {
  APIErrorMfaRequired,
  APIErrorMfaSetup,
} from "../core/APIService";
import { push } from "connected-react-router";
import {
  AUTH_ACTION_SUPPORT,
  AuthActionForgot,
  AuthActionRefresh,
} from "../actions/auth";
import qs from "qs";

let userService;

const getAuthService = () =>
  call(function* () {
    if (!userService) {
      userService = yield getContext(SAGA_CONTEXT_AUTH_SERVICE);
    }
    return userService;
  });

const spawnErr = (e) => ({ type: AUTH_ACTION_LOGIN_ERROR, error: e });
const loginSuccess = ({ data }, actionType = AUTH_ACTION_LOGIN_SUCCESS) =>
  call(function* () {
    if (typeof actionType === "function") yield put(actionType(data));
    else
      yield put({
        type: actionType,
        loggedIn: true,
        authUser: data,
      });
    if (actionType === AUTH_ACTION_LOGIN_SUCCESS){
      yield put(push("/app"));
    }
  });

function* AuthSagaLogin({ username, password, rememberMe = false }) {
  const userService: AuthService = yield getAuthService();
  try {
    const data = yield call(userService.login, username, password);
    yield loginSuccess(data);
  } catch (e) {
    if (e instanceof APIErrorMfaRequired) {
      yield put(push("/mfa", { mfaToken: e.mfaToken }));
    } else if (e instanceof APIErrorMfaSetup) {
      yield put(push("/setup-mfa/" + e.optCode));
    } else {
      yield put(spawnErr(e));
    }
  }
}

function* AuthSaga5xx() {
  const currentPathName = yield select(
    (state) => state.router.location.pathname,
  );
  yield put(
    push(
      `/server-terminate${qs.stringify(
        { from: currentPathName },
        { appendQueryPrefix: true },
      )}`,
    ),
  );
}

function* AuthSagaForgot({ payload }) {
  const userService: AuthService = yield getAuthService();
  try {
    const data = yield call(userService.forgotPassword, payload.email);
    yield data |> AuthActionForgot.success |> put;
  } catch (e) {
    yield e |> AuthActionForgot.error |> put;
  }
}

function* watchLogin() {
  //normal login flow
  yield takeLeading(AUTH_ACTION_LOGIN, AuthSagaLogin);

  //mfa login flow
  yield takeLeading(AUTH_ACTION_LOGIN_MFA, function* ({ mfaToken, mfaCode }) {
    /**
     * @type {AuthService}
     */
    const userService = yield getAuthService();
    try {
      const data = yield call(userService.loginMfa, mfaToken, mfaCode);
      yield loginSuccess(data);
    } catch (e) {
      yield put(spawnErr(e));
    }
  });

  yield takeLeading(AuthActionRefresh, function* () {
    try {
      /**
       * @type {AuthService}
       */
      const userService = yield getAuthService(),
        refreshToken = yield select(
          (state) => state.auth.authUser?.["refresh_token"],
        ),
        rememberMe = yield select((state) => state.auth.rememberMe ?? false);

      if (rememberMe) {
        const data = yield call(userService.refreshToken, refreshToken);
        yield loginSuccess(data, AuthActionRefresh.success);
      } else {
        yield {} |> AuthActionRefresh.error |> put;
        if (!/^\/signin/.test(window.location.pathname))
          yield put(push("/signin"));
      }
    } catch (e) {
      yield e |> AuthActionRefresh.error |> put;
      if (!/^\/signin/.test(window.location.pathname))
        yield put(push("/signin"));
    }
  });

  yield takeEvery(AUTH_ACTION_5XX, AuthSaga5xx);

  yield takeLeading(AuthActionForgot, AuthSagaForgot);
}

function* watchSupport() {
  yield takeLeading(AUTH_ACTION_SUPPORT, function* support({ payload }) {
    try {
      /**
       * @type {AuthService}
       */
      const userService = yield getAuthService();
      yield call(userService.sendSupportForm, payload);
      yield AUTH_ACTION_SUPPORT.success() |> put;
    } catch (e) {
      yield AUTH_ACTION_SUPPORT.error(e) |> put;
    }
  });
}

export default function* authSagas() {
  yield combineRootSagas(
    watchLogin,
    watchSupport,
    APIService.handleLoginSuccess,
  );
}

if (process.env.NODE_ENV === "development") {
  window.fake4xx = function () {
    const auth = JSON.parse(window.localStorage.getItem("persist:auth"));
    auth.authUser = JSON.parse(auth.authUser);
    auth.authUser.access_token = "fake";
    auth.authUser.refresh_token = "fake";
    auth.authUser = JSON.stringify(auth.authUser);
    window.localStorage.setItem("persist:auth", JSON.stringify(auth));
  };
}
