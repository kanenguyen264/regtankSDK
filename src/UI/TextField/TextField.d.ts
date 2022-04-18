import * as React from "react";
import {
  OutlinedTextFieldProps as BaseTextFieldProps,
  Omit,
} from "@material-ui/core";
import { WithFormikFieldInjectedProps } from "../withFormikField";

export interface TextFieldProps
  extends Omit<BaseTextFieldProps, "variant" | "size">,
    WithFormikFieldInjectedProps {
  /**
   * Cho phép hiện nút ẩn/hiện password ở phía bên phải TextField. Mặc định là false (không hiện)
   */
  togglePassword?: boolean;
  disableOutline?: boolean;
  size?: "small" | "medium" | "large";
}

export default function TextField(props: TextFieldProps): JSX.Element;
