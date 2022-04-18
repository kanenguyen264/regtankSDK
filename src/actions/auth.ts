import {
  AUTH_ACTION_LOGIN,
  AUTH_ACTION_LOGIN_ERROR,
  AUTH_ACTION_LOGIN_MFA,
  AUTH_ACTION_LOGIN_SUCCESS,
  AUTH_ACTION_LOGOUT,
  //@ts-ignore
} from "../consts/actions";
import { LOCATION_CHANGE } from "connected-react-router";
// @ts-ignore
import { ERROR_ACTION, WAIT_FOR_ACTION } from "redux-wait-for-action";
import { createAwaitAction } from "./utils";
import { FormikValues } from "formik";
import { Action } from "redux";
import { createAction } from "@reduxjs/toolkit";
import { SupportTicketDto } from "../types";

type AuthActionBase<P, T = any> = (params?: P & FormikValues) => Action<T>;

export const AuthActionLogin: AuthActionBase<{
  username: string;
  password: string;
  rememberMe?: boolean;
}> =
  //@ts-ignore
  ({ username, password, rememberMe }) => {
    return {
      type: AUTH_ACTION_LOGIN,
      username,
      password,
      rememberMe,
      //@ts-ignore
      [WAIT_FOR_ACTION]: ({ type }) =>
        type === AUTH_ACTION_LOGIN_SUCCESS || type === LOCATION_CHANGE,
      [ERROR_ACTION]: AUTH_ACTION_LOGIN_ERROR,
    };
  };

export const AuthActionMfa: AuthActionBase<{
  mfaToken: string;
  mfaCode: string;
}> =
  //@ts-ignore
  ({ mfaToken, mfaCode }) => {
    return {
      type: AUTH_ACTION_LOGIN_MFA,
      mfaToken,
      mfaCode,
      [WAIT_FOR_ACTION]: AUTH_ACTION_LOGIN_SUCCESS,
      [ERROR_ACTION]: AUTH_ACTION_LOGIN_ERROR,
    };
  };

export const AuthActionRefresh = createAwaitAction<any>("auth/token-refresh");

export const AuthActionLogout: AuthActionBase<{}> = () => ({
  type: AUTH_ACTION_LOGOUT,
});

export const AuthActionForgot = createAwaitAction<{ email: string }>(
  "auth/forgot",
);

export const AUTH_ACTION_SUPPORT = createAwaitAction<SupportTicketDto, void>(
  "auth/support",
);

export const AUTH_ACTION_SET_REMEMBER_ME = createAction<boolean>(
  "auth/remember-me",
);
