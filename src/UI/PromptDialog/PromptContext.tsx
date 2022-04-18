import * as React from "react";
import PromptDialog from "./PromptDialog";
import { createAction, createReducer } from "@reduxjs/toolkit";
import { UsePromptHookParamType } from "./types";
import { Fn } from "../../types";
interface PromptActionPayloadType extends Partial<UsePromptHookParamType> {
  _id?: number;
  id?: number;
  open?: boolean;
  onClose?: Fn;
  done?: Fn;
  __initial?: PromptActionPayloadType;
}
interface PromptReducer {
  _id: number;
  [key: number]: PromptActionPayloadType;
}

export const PromptContext = React.createContext<{
  init?: (promptProps: UsePromptHookParamType) => Promise<number>;
  openPrompt?: (id: number, resolve: Fn) => void;
  setPromptProps?: (
    id: number,
    promptProps: Partial<UsePromptHookParamType>,
  ) => void;
}>({});
const promptInit = createAction<PromptActionPayloadType>("init"),
  promptOpen = createAction<PromptActionPayloadType>("open"),
  promptClose = createAction<PromptActionPayloadType>("close"),
  promptSet = createAction<PromptActionPayloadType>("set"),
  promptReset = createAction<PromptActionPayloadType>("reset"),
  nullFunction = () => {};
const promptReducer = createReducer({ _id: -1 } as PromptReducer, (builder) =>
  builder
    .addCase(promptInit, (state, { payload: { done, ...promptProps } }) => {
      ++state._id;
      state[state._id] = { _id: state._id, ...promptProps };
      state[state._id].__initial = { ...state[state._id], done };
      if (typeof done === "function") done(state._id);
    })
    .addCase(promptOpen, (state, { payload: { id, onClose } }) => {
      if (typeof onClose !== "function")
        throw new Error("onClose payload must be a function");
      Object.assign(state[id as number], {
        open: true,
        onClose,
      });
    })
    .addCase(promptSet, (state, { payload: { id, ...others } }) => {
      state[id as number] = {
        ...state[id as number],
        ...others,
      };
    })
    .addCase(promptClose, (state, { payload: { id } }) => {
      Object.assign(state[id as number], {
        open: false,
        onClose: nullFunction,
      });
    })
    .addCase(promptReset, (state, { payload: { id } }) => {
      Object.assign(state[id as number], {
        ...state[id as number].__initial,
        open: false,
        onClose: nullFunction,
      });
    }),
);

export default function PromptProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [promptHandler, promptDispatch] = React.useReducer(promptReducer, {
    _id: -1,
  });
  const init = (promptProps: UsePromptHookParamType): Promise<number> =>
      new Promise((resolve) => {
        promptDispatch(
          promptInit({
            ...promptProps,
            open: false,
            onClose: nullFunction,
            done: resolve,
          }),
        );
      }),
    openPrompt = (id: number, resolve: Fn) => {
      promptDispatch(
        promptOpen({
          id,
          onClose: function onClose(payload) {
            const res = resolve(payload);
            if (res !== false) {
              promptDispatch(promptClose({ id }));
              setTimeout(() => {
                promptDispatch(promptReset({ id }));
              }, 300);
            }
          },
        }),
      );
    },
    setPromptProps = (id: number, props: Partial<UsePromptHookParamType>) => {
      promptDispatch(
        promptSet({
          id,
          ...props,
        }),
      );
    };

  return (
    <>
      <PromptContext.Provider value={{ init, openPrompt, setPromptProps }}>
        {children}
        {Object.values(promptHandler)
          .filter((p) => typeof p === "object")
          .map(({ message, _id, ...pProps }) => {
            return (
              <PromptDialog key={`dialog-${_id}`} {...pProps}>
                {message}
              </PromptDialog>
            );
          })}
      </PromptContext.Provider>
    </>
  );
}
