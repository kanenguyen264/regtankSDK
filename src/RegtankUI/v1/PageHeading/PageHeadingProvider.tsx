import * as React from "react";

export interface PageHeadingContextProps {
  customUrlResolver: (
    index: number,
    subPath?: string,
    isLast?: boolean,
  ) =>
    | React.ReactNode
    | [React.ReactNode, string]
    | [React.ReactNode, string, boolean]
    | undefined;
}

export const PageHeadingContext = React.createContext<
  Partial<PageHeadingContextProps>
>({});

function PageHeadingProvider(
  props: React.PropsWithChildren<PageHeadingContextProps>,
) {
  return (
    <PageHeadingContext.Provider
      value={{
        customUrlResolver: props.customUrlResolver,
      }}
    >
      {props.children}
    </PageHeadingContext.Provider>
  );
}

export default PageHeadingProvider;
