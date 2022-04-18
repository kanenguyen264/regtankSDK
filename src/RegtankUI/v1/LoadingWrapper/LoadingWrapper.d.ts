import { StyledComponentProps } from "@material-ui/core";

export interface LoadingWrapperProps extends StyledComponentProps<"root"> {
  children: React.ReactNode;
  /**
   * Bật/tắt trạng thái loading
   */
  loading: boolean;
  /**
   * Float number từ 0 đến 1, xác định độ mờ của `LoadingWrapper` khi active
   */
  opacity?: number;
  size?: string | number;
}

export default function LoadingWrapper(props: LoadingWrapperProps): JSX.Element;
