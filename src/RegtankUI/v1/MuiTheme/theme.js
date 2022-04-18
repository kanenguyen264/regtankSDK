import { createTheme as createMuiTheme } from "@mui/material/styles";
import MuiTableSortIcon from "../../../assets/icons/MuiTableSortIcon";
import { toRem } from "../utils";
import button from "./button";
import select from "./select";
import dialog from "./dialog";
import iconButton from "./iconButton";
import typography from "./typography";
import { themeSettings } from "./settings";
import ThemeColors from "../constants/ThemeColors";

const BaseMuiTheme = createMuiTheme(themeSettings, {
  components: {
    palette: {
      text: {
        primary: "#595959",
        secondary: "#7e7e7e",
        body: ThemeColors.mainBlackText,
      },
      sideBar: {
        bgActive: ThemeColors.bgActiveSidebar,
        text: ThemeColors.default,
        textActive: ThemeColors.white,
      },
      dropdown: {
        bg: "#fff",
      },
      CustomSelect: {
        item: "#fff",
        itemSelected: "#f4f4f4",
      },
      primary: {
        main: "#ffffff",
      },
    },
    MuiButton: button,
    MuiSelect: select,
    MuiIconButton: iconButton,
    ...dialog,
    MuiSwitch: {
      root: {
        width: themeSettings.typography.pxToRem(34 + 24),
        height: themeSettings.typography.pxToRem(20 - 6 + 24),
        padding: themeSettings.typography.pxToRem(12),
      },
      track: {
        backgroundColor: "#bcbcbc",
        borderRadius: themeSettings.typography.pxToRem(7),
      },
      switchBase: {
        padding: themeSettings.mixins.paddingToRem(9.12, 12, 9),
        "&,&$colorPrimary": {
          "&,&$checked": {
            color: "#fafafa",
          },
          "&$checked + $track": {
            backgroundColor: "#13b743",
          },
        },
        "&$checked": {
          transform: `translateX(${themeSettings.typography.pxToRem(14.3)})`,
          "& + $track": {
            opacity: 1,
          },
        },
      },
      checked: {},
      thumb: {
        width: themeSettings.typography.pxToRem(20),
        height: themeSettings.typography.pxToRem(20),
      },
    },
    MuiTableCell: {
      root: {
        fontSize: "1rem",
        padding: themeSettings.typography.pxToRem(6),
      },
      head: {
        fontSize: themeSettings.typography.pxToRem(16),
        paddingTop: themeSettings.typography.pxToRem(19),
        paddingBottom: themeSettings.typography.pxToRem(19),
        paddingLeft: themeSettings.typography.pxToRem(7),
        paddingRight: themeSettings.typography.pxToRem(7),
        lineHeight: 21 / 16,
        fontWeight: "400",
      },
      body: {
        background: "transparent",
        paddingTop: themeSettings.typography.pxToRem(12),
        paddingBottom: themeSettings.typography.pxToRem(12),
        paddingLeft: themeSettings.typography.pxToRem(7),
        paddingRight: themeSettings.typography.pxToRem(7),
      },
    },
    MuiTableRow: {
      root: {
        "& .MuiTableCell-root:first-child": {
          paddingLeft: themeSettings.typography.pxToRem(20),
        },
        "& .MuiTableCell-root:last-child": {
          paddingRight: themeSettings.typography.pxToRem(20),
        },
      },
    },
    MuiTableSortLabel: {
      root: {
        fontWeight: 400,
        verticalAlign: "unset",
        "&$active": {
          // color: theme.palette.text.primary,
          // && instead of & is a workaround for https://github.com/cssinjs/jss/issues/1045
          "&& $icon": {
            opacity: 1,
            // color: theme.palette.text.secondary,
          },
        },
      },
      icon: {
        opacity: 1,
        transition: "none",
      },
      iconDirectionDesc: {
        transform: "unset",
      },
      iconDirectionAsc: {
        transform: "unset",
      },
    },
    MuiOutlinedInput: {
      input: {
        "&::placeholder": {
          color: "#7e7e7e",
          opacity: 1,
        },
      },
      root: {
        "&:hover $notchedOutline": {
          borderColor: ThemeColors.default,
        }
      }
    },
    MuiCircularProgress: {
      root: {
        "& .MuiCircularProgress-circle": {
          color: "#0080FF",
        },
      },
    },
    MuiTypography: typography,
    MuiCheckbox: {
      styleOverrides: {
        colorPrimary: {
          color: "#DBDDE0",
          "&$checked": {
            color: "#0080FF",
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: "#d44333",
          "&$error": {
            color: "#d44333",
          },
        },
      },
    }
  },
  props: {
    MuiCheckbox: {
      color: "primary",
    },
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
    MuiSwitch: {
      color: "primary",
    },
    MuiTableSortLabel: {
      IconComponent: MuiTableSortIcon,
    },
    AppLayout: {
      sidebarWidth: 225,
    },
  },
});

export const theme = createMuiTheme(BaseMuiTheme);

export default BaseMuiTheme;
