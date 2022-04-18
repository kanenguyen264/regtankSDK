import { CORE_ACTION_ADD_SERVICE } from "../consts/actions";

export const ProtegoCoreActionAddService = (serviceName, serviceObject) => ({
  type: CORE_ACTION_ADD_SERVICE,
  serviceName,
  serviceObject,
});
