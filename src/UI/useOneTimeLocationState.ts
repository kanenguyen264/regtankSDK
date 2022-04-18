import * as React from "react";
import { useHistory, useLocation } from "react-router";
import { isNil } from "lodash";

const useOneTimeLocationState = <S>(key: keyof S) => {
  const location = useLocation<Partial<S>>(),
    history = useHistory<Partial<S>>();
  React.useEffect(() => {
    if (!isNil(location.state?.[key])) {
      history.replace({
        ...location,
        state: Object.assign({}, location.state, { [key]: undefined }),
      });
    }
  }, [location.state]);

  return location.state?.[key];
};

export default useOneTimeLocationState;
