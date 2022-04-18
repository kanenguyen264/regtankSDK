import { memoize } from "lodash";
import { useTheme } from "@material-ui/styles"
export const toVw = (number: number): string => `${(number * 100.0) / 1920}vw`;

// noinspection PointlessArithmeticExpressionJS
export const toRem: (number: number) => string = memoize(
  (number) => ((number * 1.0) / 17).toFixed(5) + "rem",
);

