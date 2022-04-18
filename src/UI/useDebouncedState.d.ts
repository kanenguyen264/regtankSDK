type _SetStateCb<S> = (prev: S) => S;
type SetStateCb<S> = (prevOrValue: S | _SetStateCb<S>) => void;
export default function useDebouncedState<S>(
  initialState: (() => S) | S,
  debouncedTime?: number
): [S, S, SetStateCb<S>];
