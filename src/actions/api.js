import {
  API_ACTION_ERROR,
  API_ACTION_GET,
  API_ACTION_POST,
  API_ACTION_SUCCESS,
} from "../consts/actions";
import {
  CALLBACK_ARGUMENT,
  CALLBACK_ERROR_ARGUMENT,
  ERROR_ACTION,
  WAIT_FOR_ACTION,
} from "redux-wait-for-action";

const wrapApiActions = (actionType, arg) => {
  const ts = new Date().getTime(),
    method = actionType.slice(11);
  return {
    type: actionType,
    method,
    ...arg,
    [WAIT_FOR_ACTION]: (action) =>
      action.type === API_ACTION_SUCCESS &&
      action.method === method &&
      action.ts === ts,
    [ERROR_ACTION]: API_ACTION_ERROR,
    [CALLBACK_ARGUMENT]: (action) => action.data,
    [CALLBACK_ERROR_ARGUMENT]: (action) => action.err,
  };
};

export const ApiActionGet = (url, auth = true, options = {}) =>
  wrapApiActions(API_ACTION_GET, {
    url,
    auth,
    options,
  });

export const ApiActionPost = (url, body, auth = true, options = {}) =>
  wrapApiActions(API_ACTION_POST, {
    url,
    auth,
    body,
    options,
  });
