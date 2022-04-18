import * as React from "react";
import { Fn } from "../../types";
import { PromptContext } from "./PromptContext";
import { UsePromptHookParamType } from "./types";

interface PromiseCb {
  (
    resolve: Fn<boolean | void>,
    reject?: Fn<boolean | void>,
  ): Fn<Boolean | void>;
}
interface UsePromptHook {
  (message?: React.ReactNode, callback?: PromiseCb): Promise<unknown>;
  setProps(props: Partial<UsePromptHookParamType>): void;
}

const usePrompt = function <T = any>({
  title,
  message,
  actions = [],
  classes = {},
  ...others
}: UsePromptHookParamType) {
  const { init, openPrompt, setPromptProps } = React.useContext(PromptContext),
    id = React.useRef<number | null>(null);

  // push new PromptDialog on initialize
  React.useEffect(() => {
    if (id.current === null)
      init?.({
        title,
        message,
        classes,
        actions,
        ...others,
      }).then((_id) => {
        process.env.NODE_ENV === "development" && console.log(_id);
        id.current = _id;
      });
  }, []);

  return React.useMemo<UsePromptHook>(() => {
    const handler = (message?: React.ReactNode, callback?: PromiseCb) =>
      new Promise<T>((resolve, reject) => {
        openPrompt?.(
          id.current as number,
          typeof callback === "function" ? callback(resolve) : resolve,
        );
        if (typeof message !== "undefined" && message !== null) {
          setPromptProps?.(id.current as number, { message });
        }
      });
    handler.setProps = (props: Partial<UsePromptHookParamType>) => {
      setPromptProps?.(id.current as number, props);
    };
    return handler;
  }, [openPrompt]);
};

export default usePrompt;
