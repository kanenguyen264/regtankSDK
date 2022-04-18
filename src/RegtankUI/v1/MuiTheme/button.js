import { toRem } from "../utils";
import ThemeColors from "../constants/ThemeColors";
import setting from "./settings";

const button = {
  variants: [
    {
      // add containedWhite button
      props: { variant: "containedWhite" },
      style: {
        backgroundColor: "#fff",
        border: `1px solid #ECEEF0`,
        fontWeight: 600,
        color: ThemeColors.grayText,
      },
    },
  ],
  styleOverrides: {
    root: {
      textTransform: "initial",
      fontSize: toRem(14),
      padding: "unset",
      paddingLeft: toRem(24),
      paddingRight: toRem(24),
      paddingTop: toRem(15),
      paddingBottom: toRem(15),
      borderRadius: toRem(6),
      fontWeight: "600",
      lineHeight: toRem(18),
      height: toRem(48),
      boxShadow: "unset",
      "&:disabled": {
        backgroundColor: ThemeColors.disabledColor,
        color: ThemeColors.white,
      },
      "&:hover": {
        boxShadow: "unset",
        color: ThemeColors.white,
      },
      "& .MuiButton-endIcon": {
        position: "relative",
        transform: "translateY(-50%)",
        top: "50%",
        "& svg": {
          color: "white",
          fontSize: toRem(20),
        },
        marginLeft: toRem(6),
      },
      "& .MuiButton-startIcon": {
        marginRight: toRem(6),
      },
    },
    containedPrimary: {
      "&:hover": {
        backgroundColor: ThemeColors.primaryLight,
        color: ThemeColors.white,
      },
    },
    containedWhite: {
      color: setting.palette.text.bodyColor,
      "&:hover": {
        backgroundColor: ThemeColors.whiteLight,
        color: ThemeColors.bodyText,
      },
    },
    outlined: {
      backgroundColor: ThemeColors.white,
      border: `${toRem(1)} solid ${ThemeColors.primary}`,
      "& .MuiButton-startIcon, .MuiButton-endIcon": {
        "& path": {
          fill: ThemeColors.primary,
        },
      },
      "&:hover": {
        backgroundColor: ThemeColors.primary,
        border: `${toRem(1)} solid ${ThemeColors.primary}`,
        color: ThemeColors.white,
        "& .MuiButton-startIcon, .MuiButton-endIcon": {
          "& path": {
            fill: ThemeColors.white,
          },
        },
        "& svg": {
          "& path": {
            fill: ThemeColors.white,
          },
        },
      },
    },
    outlinedPrimary: {
      backgroundColor: ThemeColors.white,
      color: ThemeColors.primary,
      border: `${toRem(1)} solid ${ThemeColors.primary}`,
      "& .MuiButton-startIcon, .MuiButton-endIcon": {
        "& path": {
          fill: ThemeColors.primary,
        },
      },
      "&:hover": {
        backgroundColor: ThemeColors.primary,
        border: `${toRem(1)} solid ${ThemeColors.primary}`,
        color: ThemeColors.white,
        "& .MuiButton-startIcon, .MuiButton-endIcon": {
          "& path": {
            fill: ThemeColors.white,
          },
        },
      },
    },
    /**
     * outline for button ex cancel..
     */
    outlinedSecondary: {
      backgroundColor: ThemeColors.white,
      fontWeight: 600,
      color: ThemeColors.grayText,
      border: `${toRem(1)} solid ${ThemeColors.borderButton}`,
      "& .MuiButton-startIcon, .MuiButton-endIcon": {
        paddingTop: 7,
        "& path": {
          fill: ThemeColors.bodyText,
        },
      },
      "&:hover": {
        border: `${toRem(1)} solid ${ThemeColors.borderButton}`,
        color: ThemeColors.bodyText,
        "& .MuiButton-startIcon, .MuiButton-endIcon": {
          "& path": {
            fill: ThemeColors.bodyText,
          },
        },
      },
      "&:disabled": {
        backgroundColor: ThemeColors.disabledBg,
        color: ThemeColors.disabledColor,
        border: `${toRem(1)} solid ${ThemeColors.borderButton}`,
      },
    },
    /**
     * Outline have hover for dropdown
     */
    outlinedDropdown: {
      backgroundColor: ThemeColors.white,
      fontWeight: 500,
      border: `${toRem(1)} solid ${ThemeColors.borderBottom}`,
      "& .MuiButton-startIcon, .MuiButton-endIcon": {
        paddingTop: 8,
        "& path": {
          fill: ThemeColors.default,
        },
      },
      "&:hover": {
        backgroundColor: ThemeColors.white,
        border: `${toRem(1)} solid ${ThemeColors.primary}`,
        color: `${ThemeColors.primary} !important`,
        "& .MuiButton-startIcon, .MuiButton-endIcon": {
          "& path": {
            fill: ThemeColors.primary,
          },
        },
        "& .MuiTypography-root": {
          color: ThemeColors.primary,
        },
      },
      "&:disabled": {
        backgroundColor: ThemeColors.disabledBg,
        color: ThemeColors.disabledColor,
        border: `${toRem(1)} solid ${ThemeColors.borderButton}`,
      },
    },
    outlinedIcon: {
      minWidth: toRem(36),
      backgroundColor: ThemeColors.white,
      color: ThemeColors.bodyText,
      border: `${toRem(1)} solid ${ThemeColors.borderButton}`,
      "& .MuiButton-startIcon, .MuiButton-endIcon": {
        "& path": {
          fill: ThemeColors.bodyText,
        },
      },
      "&:hover": {
        border: `${toRem(1)} solid ${ThemeColors.borderButton}`,
        color: ThemeColors.bodyText,
        "& .MuiButton-startIcon, .MuiButton-endIcon": {
          "& path": {
            fill: ThemeColors.bodyText,
          },
        },
      },
      "&:disabled": {
        backgroundColor: ThemeColors.white,
        border: `${toRem(1)} solid ${ThemeColors.borderButton}`,
        color: ThemeColors.borderButton,
        "& .MuiButton-startIcon, .MuiButton-endIcon": {
          "& path": {
            fill: ThemeColors.borderButton,
          },
        },
      },
    },
    /**
     * Button icon no border
     */
    outlinedIconDefault: {
      minWidth: toRem(36),
      backgroundColor: ThemeColors.white,
      color: ThemeColors.bodyText,
      "& .MuiButton-startIcon, .MuiButton-endIcon": {
        "& path": {
          fill: ThemeColors.bodyText,
        },
      },
      "&:hover": {
        color: ThemeColors.bodyText,
        "& .MuiButton-startIcon, .MuiButton-endIcon": {
          "& path": {
            fill: ThemeColors.bodyText,
          },
        },
      },
    },
    containedSecondary: {
      "&:hover": {
        color: ThemeColors.white,
      },
    },
    containedSuccess: {
      backgroundColor: ThemeColors.successDark,
      color: ThemeColors.white,
      "&:hover": {
        backgroundColor: ThemeColors.successLight,
        color: ThemeColors.white,
      },
      "&:disabled": {
        backgroundColor: ThemeColors.successDark,
        color: ThemeColors.white,
      },
    },
    containedError: {
      backgroundColor: ThemeColors.errorBorder,
      color: ThemeColors.white,
      "&:hover": {
        backgroundColor: ThemeColors.errorLight,
        color: ThemeColors.white,
      },
      "&:disabled": {
        backgroundColor: ThemeColors.disabledBg,
        color: ThemeColors.white,
      },
    },
    containedRounded: {
      borderRadius: toRem(20),
      "& .MuiButton-startIcon, .MuiButton-endIcon": {
        paddingTop: 7,
      },
      "& .MuiDropdown-dropdownLabel": {
        paddingLeft: toRem(4),
      },
    },
    sizeSmall: {
      padding: "unset",
      paddingLeft: toRem(10),
      paddingRight: toRem(10),
      paddingTop: toRem(11),
      paddingBottom: toRem(11),
      height: toRem(40),
    },
    sizeMedium: {
      padding: "unset",
      paddingLeft: toRem(8),
      paddingRight: toRem(8),
      paddingTop: toRem(8),
      paddingBottom: toRem(8),
      height: toRem(40),
      minWidth: toRem(120),
      fontWeight: "600 !important",
    },
    text: {
      fontSize: toRem(14),
      fontWeight: 500,
      backgroundColor: ThemeColors.white,
      borderBottom: `${toRem(1)} solid ${ThemeColors.borderBottom}`,
      borderRadius: 0,
      color: ThemeColors.grayText,
      "& .MuiButton-startIcon, .MuiButton-endIcon": {
        "& path": {
          fill: ThemeColors.grayText,
        },
      },
      "&:hover": {
        borderBottom: `${toRem(1)} solid ${ThemeColors.primary}`,
        color: ThemeColors.primary,
        "& .MuiButton-startIcon, .MuiButton-endIcon": {
          "& path": {
            fill: ThemeColors.primary,
          },
        },
      },
    },
  },
};

export default button;
