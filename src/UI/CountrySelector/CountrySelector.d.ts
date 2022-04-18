import * as React from "react";
import { PopoverProps } from "@material-ui/core";
import { WithFormikFieldInjectedProps } from "../withFormikField";

export interface CountrySelectorProps
  extends Omit<PopoverProps, "PaperProps" | "onChange">,
    WithFormikFieldInjectedProps {
  width?: number;
  height?: number;
  spacing?: number;
  value: string[];
  onChange: (newValue: string[]) => void;
  countries: { name: String; code: String }[];
}

export default function CountrySelector(
  props: CountrySelectorProps
): JSX.Element;
