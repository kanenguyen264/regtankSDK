import ThemeColors from "../constants/ThemeColors";
import { toRem } from "../utils";
import { themeSettings } from "./settings";

const dialog = {
  MuiDialogTitle:{
    styleOverrides: {
      root: {
        backgroundColor: ThemeColors.white,
        borderBottom: "1px solid #F4F4F6",
        height: toRem(60),
        padding: themeSettings.mixins.paddingToRem(16, 20),
        "& h6": {
          color: themeSettings.palette.text.bodyColor,
          fontWeight: 600,
          fontSize: toRem(16),
          linenHeight: "20px",
        },
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        fontWeight: 400,
        color: ThemeColors.grayText,
        fontSize: `${toRem(14)}`,
        lineHeight: "24px",
        padding: "unset",
        padding: themeSettings.mixins.paddingToRem(16, 20),
        marginTop: toRem(16),
      },
    }
  },
  MuiCloseableDialogTitle:{
    styleOverrides: {
      title:{
        right: toRem(-12),
      }
    }
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: themeSettings.mixins.paddingToRem(20, 20),
      },
    }
  },
  MuiDialog:{
    styleOverrides: {
      root: {
        color: themeSettings.palette.text.bodyColor,
      },
      paper: { 
        borderRadius: toRem(10),
      },
    },
  }
};

export default dialog;
