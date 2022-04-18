import { createAction } from "@reduxjs/toolkit";
import {
  ERROR_ACTION,
  WAIT_FOR_ACTION,
  CALLBACK_ARGUMENT,
  CALLBACK_ERROR_ARGUMENT,
} from "redux-wait-for-action";
import { compose } from "recompose";

function reduceBooleanFunc(funcs) {
  return funcs.reduce(
    (facc, fv) => {
      return (value) => facc(value) || fv(value);
    },
    (value) => false,
  );
}

export function createAwaitAction(
  type,
  prepareAction,
  callbackActionMatcher = null,
) {
  const successAction = createAction(type + "/success"),
    errorAction = createAction(type + "/error");

  function actionCreator(...args) {
    let action;
    const composeMatchFn = (matchFn) =>
      typeof callbackActionMatcher === "function"
        ? (callbackAction) =>
            matchFn(callbackAction) &&
            callbackActionMatcher(action.payload, callbackAction.payload)
        : matchFn;
    const spread = {
      [WAIT_FOR_ACTION]:
        [callbackActionMatcher?.success?.match, successAction.match].filter(
          Boolean,
        )
        |> reduceBooleanFunc
        |> composeMatchFn,
      [CALLBACK_ARGUMENT]: (action) => action.payload,
      [ERROR_ACTION]:
        [callbackActionMatcher?.error?.match, errorAction.match].filter(Boolean)
        |> reduceBooleanFunc
        |> composeMatchFn,
      [CALLBACK_ERROR_ARGUMENT]: (action) => action.payload,
    };
    if (prepareAction) {
      let prepared = prepareAction(...args);
      if (!prepared) {
        throw new Error("prepareAction did not return an object");
      }

      action = {
        type,
        payload: prepared.payload,
        ...("meta" in prepared && { meta: prepared.meta }),
        ...("error" in prepared && { error: prepared.error }),
        ...spread,
      };
    } else
      action = {
        type,
        payload: args[0],
        ...spread,
      };
    return action;
  }

  actionCreator.toString = () => `${type}`;

  actionCreator.type = type;

  actionCreator.match = (action) => action.type === type;
  actionCreator.success = successAction;
  actionCreator.error = errorAction;
  return actionCreator;
}
