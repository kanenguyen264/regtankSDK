import { StyledComponentProps } from "@material-ui/core";
import * as React from "react";

interface PromptDialogActionObject {
  color?: null | "primary";
  value: string | number | boolean;
  label?: string;
}

export type PromptDialogAction =
  | PromptDialogActionObject
  | string
  | number
  | boolean;

export interface PromptDialogProps
  extends StyledComponentProps<PromptDialogClasses> {
  /**
   * Cho phép hộp thoại hiển thị nút thoát ở tiêu đề
   */
  allowCloseOnTitle?: boolean;
  /**
   * Tiêu đề của hộp thoại
   */
  title: React.ReactNode;
  /**
   * Nội dung của hộp thoại
   */
  children: React.ReactNode;
  /**
   * Xác định trạng thái đóng/mở của hộp thoại
   */
  open: boolean;
  /**
   * Callback được gọi khi hộp thoại đóng, param là giá trị action gắn kèm với nút được nhấn (đóng hộp thoại bằng nút close param là `null`)
   * @param result
   */
  onClose: (result: any) => void;
  /**
   * Chỉ định các label ở modal footer, các label này sẽ được pass vào first parameter của `onClose`
   */
  actions: PromptDialogAction[];
}

export type PromptDialogClasses = "root" | "title" | "content" | "action";

export default function PromptDialog(props: PromptDialogProps): JSX.Element;
