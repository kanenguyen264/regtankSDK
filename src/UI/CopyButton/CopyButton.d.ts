import * as React from "react";
import { StandardProps } from "@material-ui/core";

export interface CopyButtonProps
  extends StandardProps<
    React.HTMLAttributes<HTMLDivElement>,
    "root" | "copyButton"
  > {
  /**
   * Tắt toast notification khi copy dữ liệu thành công
   */
  silence?: boolean;
  /**
   * Attach ref đến copyButton
   */
  copyButtonRef?: React.Ref<any>;
  component?: React.ElementType;
  buttonSize?: number;
  tooltip?: any;
}

export default function CopyButton(props: CopyButtonProps): JSX.Element;
