import React from "react";
import { debounce } from "lodash";
export default function useDebouncedState(initialState, debouncedTime = 100) {
  const [actual, setActual] = React.useState(initialState),
    [display, setDisplay] = React.useState(initialState),
    debouncedSet = React.useCallback(debounce(setActual, debouncedTime), []);

  React.useEffect(() => {
    debouncedSet(display);
  }, [display]);

  return [display, actual, setDisplay];
}
