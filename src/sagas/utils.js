import {
  CALLBACK_ARGUMENT,
  CALLBACK_ERROR_ARGUMENT,
  ERROR_ACTION,
  WAIT_FOR_ACTION,
} from "redux-wait-for-action";
import { all, call, put, race, spawn, take } from "@redux-saga/core/effects";
import omitBy from "lodash/omitBy";

export function putWait(action) {
  return call(function* () {
    const pureAction = omitBy(action, (_, key) => typeof key === "symbol");
    const callbackArgs = action[CALLBACK_ARGUMENT];
    const callbackErrArgs = action[CALLBACK_ERROR_ARGUMENT];
    yield put(pureAction);
    const raceArgs = {
      data: take(action[WAIT_FOR_ACTION]),
    };
    if (action[ERROR_ACTION]) raceArgs.error = take(action[ERROR_ACTION]);
    const { data, error } = yield race(raceArgs);
    if (error) console.error(error);
    if (error) {
      const _error =
        typeof callbackErrArgs === "function" ? callbackErrArgs(error) : error;
      throw _error;
    } else return typeof callbackArgs === "function" ? callbackArgs(data) : data;
  });
}
export function* combineRootSagas(...sagas) {
  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.error(e);
          }
        }
      }),
    ),
  );
}
