import * as React from "react";
import { PropTypes, StandardProps } from "@material-ui/core";

export type DropdownClassKey =
  | "dropdown"
  | "dropdownLabel"
  | "panel"
  | "rounded";

export interface DropdownProps
  extends StandardProps<React.HTMLAttributes<HTMLElement>, DropdownClassKey> {
  /**
   * Dropdown position = left or right
   */
  dropdownPosition?: "left" | "right";
  /**
   * Change button color
   */
  color?: PropTypes.Color;
  /**
   * Using rounded variant
   */
  rounded?: boolean;
  label?: string;
}

export default function Dropdown(props: DropdownProps): JSX.Element;
