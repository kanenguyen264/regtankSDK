import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import MuiTableSortIcon from "../assets/icons/MuiTableSortIcon";
import React from "react";
import { toRem } from "../utils/measurements";

const pxToRem = (px) => `${(px * 1.0) / 17}rem`;

const root = createMuiTheme({
  htmlFontSize: 17,
  typography: {
    htmlFontSize: 17,
  },
  mixins: {
    pxToRem,
    paddingToRem: (...args) => args.map((num) => pxToRem(num)).join(" "),
  },
  spacing: (factor) => `${0.5 * factor * (26 / 17)}rem`,
  customBreakPoints: {
    sm: 1260,
    md: 1346,
    lg: 1580,
    xl: 1900,
  },
  responsiveFontSize: {
    sm: 11.33333,
    md: 12.5,
    lg: 14.2,
    xl: 17,
  },
});

const BaseMuiTheme = createMuiTheme(root, {
  typography: {
    // Tell MUI what's the font-size on the html element is.
    htmlFontSize: 17,
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          fontSize: 22,
        },
      },
    },
    MuiButton: {
      root: {
        textTransform: "initial",
      },
      containedSizeLarge: {
        padding: root.mixins.paddingToRem(15, 70),
      },
      outlinedSizeLarge: {
        padding: [15, 70].map((px) => `calc(${px |> toRem} - 1px)`).join(" "),
        fontSize: 15 |> toRem,
      },
      containedSizeSmall: {
        padding: root.mixins.paddingToRem(9, 15),
        fontSize: root.typography.pxToRem(15),
      },
      outlinedSizeSmall: {
        padding: [9, 15]
          .map((px) => `calc(${root.typography.pxToRem(px)} - 1px)`)
          .join(" "),
        fontSize: root.typography.pxToRem(15),
      },
    },
    MuiSwitch: {
      root: {
        width: root.typography.pxToRem(34 + 24),
        height: root.typography.pxToRem(20 - 6 + 24),
        padding: root.typography.pxToRem(12),
      },
      track: {
        backgroundColor: "#bcbcbc",
        borderRadius: root.typography.pxToRem(7),
      },
      switchBase: {
        padding: root.mixins.paddingToRem(9.12, 12, 9),
        "&,&$colorPrimary": {
          "&,&$checked": {
            color: "#fafafa",
          },
          "&$checked + $track": {
            backgroundColor: "#13b743",
          },
        },
        "&$checked": {
          transform: `translateX(${root.typography.pxToRem(14.3)})`,
          "& + $track": {
            opacity: 1,
          },
        },
      },
      checked: {},
      thumb: {
        width: root.typography.pxToRem(20),
        height: root.typography.pxToRem(20),
      },
    },
    MuiTableCell: {
      root: {
        fontSize: "1rem",
        padding: root.typography.pxToRem(6),
      },
      head: {
        fontSize: root.typography.pxToRem(16),
        paddingTop: root.typography.pxToRem(19),
        paddingBottom: root.typography.pxToRem(19),
        paddingLeft: root.typography.pxToRem(7),
        paddingRight: root.typography.pxToRem(7),
        lineHeight: 21 / 16,
        fontWeight: "400",
      },
      body: {
        background: "transparent",
        paddingTop: root.typography.pxToRem(12),
        paddingBottom: root.typography.pxToRem(12),
        paddingLeft: root.typography.pxToRem(7),
        paddingRight: root.typography.pxToRem(7),
      },
    },
    MuiTableRow: {
      root: {
        "& .MuiTableCell-root:first-child": {
          paddingLeft: root.typography.pxToRem(20),
        },
        "& .MuiTableCell-root:last-child": {
          paddingRight: root.typography.pxToRem(20),
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
        padding: root.mixins.paddingToRem(10, 14, 10, 14),
        "&::placeholder": {
          color: "#7e7e7e",
          opacity: 1,
        },
      },
    },
    MuiCircularProgress: {
      root: {
        "& .MuiCircularProgress-circle": {
          color: "#0080FF",
        },
      },
    },
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
  palette: {
    text: {
      placeholder: "#7e7e7e",
      bodyColor: "#2b2b2b",
    },
    border: {
      lightGray: "#E6E6E6",
    },
    dropdown: {
      shadow: "rgb(34,59,96, 0.16 )",
    },
  },
});


export default BaseMuiTheme;
