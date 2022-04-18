import React from "react";
import { useDispatch } from "react-redux";
import {
  CORE_ACTION_GET_SERVICE,
  CORE_ACTION_GET_SERVICE_SUCCESS,
} from "../consts/actions";
import { CALLBACK_ARGUMENT, WAIT_FOR_ACTION } from "redux-wait-for-action";

function useProtegoServices(serviceName) {
  const dispatch = useDispatch(),
    [service, setService] = React.useState(null);

  React.useEffect(() => {
    dispatch({
      type: CORE_ACTION_GET_SERVICE,
      serviceName,
      [WAIT_FOR_ACTION]: CORE_ACTION_GET_SERVICE_SUCCESS,
      [CALLBACK_ARGUMENT]: (action) => action.service,
    }).then((rs) => setService(rs));
  }, [serviceName]);

  return service;
}

export default useProtegoServices;
