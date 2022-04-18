import { getContext, put, takeEvery } from "@redux-saga/core/effects";
import {
  CORE_ACTION_GET_SERVICE,
  CORE_ACTION_GET_SERVICE_SUCCESS,
} from "../consts/actions";

function* watchAddService() {
  yield takeEvery(CORE_ACTION_GET_SERVICE, function* ({ serviceName }) {
    const service = yield getContext(serviceName);
    yield put({ type: CORE_ACTION_GET_SERVICE_SUCCESS, serviceName, service });
  });
}

export default function* ProtegoCoreSagas() {
  yield watchAddService();
}
