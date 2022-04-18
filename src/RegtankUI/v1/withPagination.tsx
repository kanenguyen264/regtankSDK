import * as React from "react";
import {
  NumberParam,
  StringParam,
  useQueryParam,
  useQueryParams,
  withDefault,
} from "use-query-params";
import btoa from "btoa";
import atob from "atob";

const DEFAULT_PAGE_SIZE = 10;

export interface PaginationParams {
  page: number;
  search?: string;
  sort: string;
  size: number;
}
export interface WithPaginationInjectedProps {
  paginationParams: PaginationParams;
  setPaginationParams: (
    newParams: Partial<PaginationParams>,
    historyMethod?: "push" | "replace" | "pushIn" | "replaceIn",
  ) => void;
}

export const PaginationContext = React.createContext<
  Partial<WithPaginationInjectedProps>
>({});

const withPagination = <
  P extends WithPaginationInjectedProps = WithPaginationInjectedProps
>(
  Component: React.ComponentType<P>,
) => {
  function WithPagination(props: Omit<P, keyof WithPaginationInjectedProps>) {
    const [paginationParams, setPaginationParams] = useQueryParams({
      page: withDefault(NumberParam, 0),
      size: withDefault(NumberParam, DEFAULT_PAGE_SIZE),
      sort: withDefault(StringParam, "", false),
      search: withDefault(StringParam, "", false),
    });

    return (
      <PaginationContext.Provider
        value={
          ({
            paginationParams,
            setPaginationParams,
          } as unknown) as WithPaginationInjectedProps
        }
      >
        <Component
          {...(props as P)}
          paginationParams={paginationParams}
          setPaginationParams={setPaginationParams}
        />
      </PaginationContext.Provider>
    );
  }
  return WithPagination;
};

export default withPagination;

type EnhancedPaginationOptions = { key: string };
const withEnhancedPagination = (opts: EnhancedPaginationOptions) => <
  P extends WithPaginationInjectedProps = WithPaginationInjectedProps
>(
  Component: React.ComponentType<P>,
) => {
  function WithEnhancedPagination(
    props: Omit<P, keyof WithPaginationInjectedProps>,
  ) {
    const [encoded, setEncoded] = useQueryParam<string>(
      opts.key,
      withDefault(
        StringParam,
        btoa(
          JSON.stringify({
            page: 0,
            size: DEFAULT_PAGE_SIZE,
            sort: "",
            search: "",
          }),
        ),
      ),
    );
    const paginationParams = React.useMemo(() => JSON.parse(atob(encoded)), [
      encoded,
    ]);
    const setPaginationParams = React.useCallback(
      (params: Partial<PaginationParams>) => {
        const newParams = {
          ...paginationParams,
          ...params,
        };
        setEncoded(btoa(JSON.stringify(newParams)));
      },
      [paginationParams, setEncoded],
    );

    return (
      <PaginationContext.Provider
        value={
          ({
            paginationParams,
            setPaginationParams,
          } as unknown) as WithPaginationInjectedProps
        }
      >
        <Component
          {...(props as P)}
          paginationParams={paginationParams}
          setPaginationParams={setPaginationParams}
        />
      </PaginationContext.Provider>
    );
  }

  return WithEnhancedPagination;
};

export { withEnhancedPagination };
