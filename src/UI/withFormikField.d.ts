export interface WithFormikFieldInjectedProps {
  /**
   * `true` cho phép component inject data của Formik. Xem thêm tại (https://formik.org/docs/api/field)[https://formik.org/docs/api/field]
   */
  formik?: boolean | "fast";
  /**
   * `true` cho phép field tự động focus khi hiển thị form. Chỉ available khi `formik=true`
   */
  autoFocus?: boolean;
}
