import { createTheme as createMuiTheme } from "@mui/material/styles";
import ThemeColors from '../constants/ThemeColors';
const pxToRem = (px) => `${(px * 1.0) / 16}rem`;

const settings = {
  htmlFontSize: 16,
  palette: {
    primary: {
      light: ThemeColors.primaryDark,
      main: ThemeColors.primary,
      dark: ThemeColors.primaryLight,
      contrastText: '#fff',
    },
    secondary: {
      light: ThemeColors.secondary,
      main: ThemeColors.secondary,
      dark: ThemeColors.secondary,
      contrastText: '#fff',
    },
    success: {
      light: ThemeColors.successDark,
      main: ThemeColors.success,
      dark: ThemeColors.successLight,
      contrastText: '#fff',
    },
    warning: {
      light: ThemeColors.warningDark,
      main: ThemeColors.warning,
      dark: ThemeColors.warningLight,
      contrastText: '#fff',
    },
    error: {
      main: ThemeColors.error,
      dark: ThemeColors.errorLight,
    },
    text: {
      placeholder: "#7e7e7e",
      bodyColor: ThemeColors.bodyText,
    },
    border: {
      lightGray: "#E6E6E6",
    },
    dropdown: {
      shadow: "rgb(34,59,96, 0.16 )",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    htmlFontSize: 16,
    lineHeight: pxToRem(20),
  },
  mixins: {
    pxToRem,
    paddingToRem: (...args) => args.map((num) => pxToRem(num)).join(" "),
  },
  spacing: (factor) => `${0.5 * factor * (26 / 16)}rem`,
  customBreakPoints: {
    sm: 1280,
    md: 1440,
    lg: 1920,
  },
  responsiveFontSize: {
    sm: 12,
    md: 14,
    lg: 16,
  },
};

export const themeSettings = createMuiTheme(settings);

export default settings;
