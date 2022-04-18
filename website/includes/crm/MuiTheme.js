
import React from "react";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import BaseMuiTheme from "@protego/sdk/UI/MuiTheme";


const MuiTheme = createMuiTheme(BaseMuiTheme, {
  typography: {
    h4: {
      fontSize: "1.2353rem",
      fontWeight: "bold"
    },
    body2: {
      fontWeight: 500
    },
    button: {
      textTransform: "capitalize"
    }
  },
  palette: {
    text: {
      primary: "#757F88",
      secondary: "#d3d3d3",
      body: "#e0e0e0"
    },
    sideBar: {
      bgActive: "#343d45",
      text: "#9e9e9e",
      textActive: "#fff"
    },
    dropdown: {
      bg: "#39424b"
    },
    CustomSelect: {
      item: "#39424b",
      itemSelected: "#353d45"
    },
    background: {
      paper: "#434f5a"
    }
  },
  overrides: {
    MuiButton: {
      root: {
        paddingTop: "0.824rem",
        paddingBottom: "0.824rem",
        fontSize: "0.9412rem",
        fontWeight: 500,
        color: "#d3d3d3 !important"
      },
      text: {
        paddingTop: "0.824rem",
        paddingBottom: "0.824rem",
        fontSize: "0.9412rem",
        fontWeight: 500,
        color: "#d3d3d3"
      },
      label: {
        lineHeight: 1.3125
      },
      contained: {
        backgroundColor: "#596977",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#515f6c"
        }
      }
    },
    MuiAlert: {
      filledError: {
        backgroundColor: "#f44336"
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: "#556372"
      }
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: "#697784"
      },
      root: {
        "&:hover $notchedOutline": {
          borderColor: "#7b868e"
        }
      },
      input: {
        padding: BaseMuiTheme.mixins.paddingToRem(10, 14, 10, 14),
        backgroundColor: "transparent",
        "&::placeholder": {
          color: "#7e7e7e",
          opacity: 1
        },
        color: "#E0E0E0"
      }
    },
    MuiCheckbox: {
      colorPrimary: {
        "&$checked": {
          color: "#fff"
        }
      }
    },
    MuiTableCell: {
      root: {
        borderBottomColor: "#546371",
        fontWeight: 400
      },
      head: {
        backgroundColor: "#38424b"
      },
      body: {
        backgroundColor: "#434f5b",
        color: "#e0e0e0"
      }
    },
    MuiTablePagination: {
      toolbar: {
        height: BaseMuiTheme.typography.pxToRem(10)
      }
    },
    MuiTableSortLabel: {
      root: {
        "&&$active": {
          color: "#e0e0e0"
        }
      }
    },
    MuiCloseableDialogTitle: {
      root: {
        backgroundColor: "#2d353c"
      }
    },
    SearchBox: {
      panel: {
        backgroundColor: "#434f5a",
        "& .MuiListItemText-root": {
          color: "#9e9e9e"
        }
      }
    },
    PageHeading: {
      root: {
        backgroundColor: "#434f5a",
        "& $linkItem": {
          color: "#808080",
          "&.active, &:hover": {
            color: "#e0e0e0"
          }
        }
      }
    },
    MuiDialogActions: {
      root: {
        padding: 0
      }
    },
    jr: {
      profile: {
        banner: {
          paddingLeft: 0,
          paddingRight: 0
        }
      }
    },
    JRCard: {
      root: {
        backgroundColor: "#434f5a"
      }
    }
  },
  props: {
    MuiButton: {
      debug: "dark"
    },
    MuiCheckbox: {
      color: "primary"
    },
    Logo: {
      alt: "protego",
      title: "protego"
    },
    AppBarNotification: {
      backgroundColor: "#434f5a"
    }
  }
});
export default MuiTheme;

  