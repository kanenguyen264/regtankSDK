import { createReducer } from "@reduxjs/toolkit";
import {
  AUTH_ACTION_LOGIN,
  AUTH_ACTION_LOGIN_SUCCESS,
  AUTH_ACTION_LOGOUT,
  AUTH_ACTION_REFRESH_ERROR,
} from "../consts/actions";
import { createTransform, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  AUTH_ACTION_SET_REMEMBER_ME,
  AuthActionRefresh,
} from "../actions/auth";

const init = () => ({
  authUser: null,
  loggedIn: false,
  rememberMe: false,
  initURL: "",
  lastLoggedIn: null,
});

let AuthReducer = createReducer(init(), {
  [AUTH_ACTION_LOGIN]: (state, { username, password }) => {
    state.lastLoggedIn = {
      username,
    };
  },
  [AUTH_ACTION_SET_REMEMBER_ME]: (state, { payload: rememberMe }) => ({
    ...state,
    rememberMe,
  }),
  [AUTH_ACTION_LOGIN_SUCCESS]: (state, { loggedIn, authUser }) => ({
    ...state,
    loggedIn,
    authUser,
  }),
  [AuthActionRefresh]: (state) => {
    if (state.authUser?.access_token) delete state.authUser.access_token;
  },
  [AuthActionRefresh.success]: (state, { payload: authUser }) => ({
    ...state,
    authUser,
  }),
  [AuthActionRefresh.error]: init,
  [AUTH_ACTION_LOGOUT]: (state) => {
    const logoutState = init();
    if (state.rememberMe) {
      logoutState.rememberMe = true;
      logoutState.lastLoggedIn = state.lastLoggedIn;
    }
    return logoutState;
  },
});

const RememberMeTransform = createTransform((value, key, state) => {
  if (state.rememberMe === false) {
    switch (key) {
      case "authUser":
        if (value === null) return null;
        const newAuthUser = { ...(value ?? {}) };
        delete newAuthUser.refresh_token;
        return newAuthUser;
      default:
        return value;
    }
  }
  return value;
});

AuthReducer = persistReducer(
  { key: "auth", storage, transforms: [RememberMeTransform] },
  AuthReducer,
);

export default AuthReducer;
