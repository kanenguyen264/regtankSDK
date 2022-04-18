import * as React from "react";
import { DatePickerProps as BaseDatePickerProps } from "@material-ui/pickers";
import { WithFormikFieldInjectedProps } from "../withFormikField";

interface DatePickerBaseProps
  extends WithFormikFieldInjectedProps,
    Partial<
      Omit<BaseDatePickerProps, "TextFieldComponent" | "variant" | "onChange">
    > {
  size?: "small" | "medium" | "large";
}

export interface DatePickerProps extends DatePickerBaseProps {
  fullWidth?: boolean;
}

export default function DatePicker(props: DatePickerProps): JSX.Element;
