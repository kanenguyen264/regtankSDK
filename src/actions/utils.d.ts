import { PayloadActionCreator, ThunkDispatch } from "@reduxjs/toolkit";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { ServiceResponse } from "../core/AuthService";

export type PayloadActionSuccessCreator<
  P,
  T extends string
> = PayloadActionCreator<P, T>;
export type PayloadActionErrorCreator<
  P,
  T extends string
> = PayloadActionCreator<P, T>;

type PayloadActionThunkCreator<P, R> = (
  payload: P
) => ThunkAction<Promise<R>, any, any, Action<P>>;
export type AsyncDispatch = ThunkDispatch<any, any, any>;

export type AwaitPayloadAction<
  P = void,
  PR = void,
  PE extends Error = Error,
  T extends string = string,
  TS extends string = string,
  TE extends string = string
> = PayloadActionCreator<P, T> & {
  success: PayloadActionSuccessCreator<PR, TS>;
  error: PayloadActionErrorCreator<PE, TE>;
} & PayloadActionThunkCreator<P, PR>;

type CallbackActionMatcherType<P, PR> =
  | ((callbackPayload: PR, payload: P) => boolean)
  | AwaitPayloadAction<any, PR>;

/**
 *
 * Hàm createAwaitAction cho phép tạo ra một actionCreator
 *
 * type: payload => ThunkAction (tham khảo redux-thunk)
 *
 * bản thân actionCreator có 2 member là `success` và `error`
 *
 * for example
 *
 * component.js
 * ```
 *    ...
 *    await dispatch(actionCreator(payload));  // (*)
 *    ...
 * ```
 * saga.js
 * ```
 *    const {payload} = yield take(actionCreator)
 *    const value = yield call(do_something_with,payload)
 *    yield put(actionCreator.success(value)); //đánh dấu (*) thành công
 *    yield put(actionCreator.error(value)); //đánh dấu (*) có lỗi, throw lỗi ra
 * ```
 */
export declare function createAwaitAction<
  P = void,
  PR = void,
  PE extends Error = Error,
  T extends string = string,
  TS extends string = string,
  TE extends string = string
>(
  type: T,
  prepareAction?: Function,
  callbackActionMatcher?: CallbackActionMatcherType<P, PR>
): AwaitPayloadAction<P, PR, PE, T, TS, TE>;

export type ServiceResponseAction<SR> = SR extends ServiceResponse<infer R>
  ? R
  : never;
