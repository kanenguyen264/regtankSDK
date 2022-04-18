import * as React from "react";
import { StandardProps, StyledComponentProps } from "@material-ui/core";
import {
  SelectClassKey,
  SelectProps as BaseSelectProps,
} from "@material-ui/core/Select/Select";
import { WithFormikFieldInjectedProps } from "../withFormikField";

export interface SelectVirtualizedItem {
  name: any;
  value: string | number;
  [key: string]: any;
}

export interface SelectProps
  extends StandardProps<
      BaseSelectProps,
      CustomSelectClassKey,
      "input" | "MenuProps" | "IconComponent"
    >,
    WithFormikFieldInjectedProps {
  /**
   * Cho phép canh lề vị trí của dropdown so với select input là canh lề trái (`left`) hay lề phải (`right`). Mặc định là `left`
   */
  dropdownPosition?: "left" | "right";
  /**
   * Cho phép hiện ô tìm kiếm bên trong Dropdown
   */
  searchable?: boolean;
  /**
   * Event fire khi Select searchable và giá trị của ô tìm kiếm thay đổi
   */
  onSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * @ignore
   */
  children?: React.ReactNode;
  /**
   * @ignore
   */
  value?: unknown;
  virtualize?: boolean | SelectVirtualizedItem[];
  placeholder?: string;
  withFormControlProps?: object;
}

export type CustomSelectClassKey = SelectClassKey | "input" | "search";
//
export default function Select(props: SelectProps): JSX.Element;

// declare const Select: React.FunctionComponent<CustomSelectProps>;
//
// export default Select;
