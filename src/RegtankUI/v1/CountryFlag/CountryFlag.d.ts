import * as React from "react";
import { StandardProps } from "@material-ui/core";

export interface CountryCodeProps
  extends StandardProps<
    React.HTMLAttributes<HTMLDivElement>,
    CountryCodeClassKey
  > {
  /**
   * Mã quốc gia của lá cờ muốn hiển thị (định dạng 2 ký tự). Tra cứu tại [https://countrycode.org/]()
   */
  countryCode: string;
  /**
   * Định dạng hiển thị của component (mặc định là `false` sẽ hiển thị dưới dạng Emoji)
   */
  svg?: boolean;
  /**
   * Kích thước của icon, tính bằng pixel. Mặc định là 24
   */
  size?: number;
  /**
   * @ignore
   */
  cdnUrl?: string;
  /**
   * Không sử dụng tooltip khi hover mouse qua icon lá cờ
   */
  disableTooltip?: boolean;
  /**
   * Hiển thị tên quốc gia
   */
  displayCountryName?: boolean;
  /**
   * Hiển thị tên và tooltip dưới dạng demonym
   */
  demonym?: boolean;

  /**
   * truyền locale từ store xuống để thay đổi ngôn ngữ
   */
  language?: string;
}

export type CountryCodeClassKey = "root";

export default function CountryFlag(props: CountryCodeProps): JSX.Element;
