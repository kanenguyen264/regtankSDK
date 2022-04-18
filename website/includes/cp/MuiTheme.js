
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
  overrides: {
    MuiButton: {
      root: {
        paddingTop: "0.824rem",
        paddingBottom: "0.824rem",
        fontSize: "0.9412rem",
        fontWeight: 500
      },
      text: {
        paddingTop: "0.824rem",
        paddingBottom: "0.824rem",
        fontSize: "0.9412rem",
        fontWeight: 500,
        color: "#7e7e7e"
      },
      label: {
        lineHeight: 1.3125
      },
      contained: {
        backgroundColor: "#f4f4f4",
        color: "#7e7e7e",
        "&$disabled": {
          backgroundColor: "#c2c2c2",
          color: "white"
        }
      },
      containedSecondary: {
        backgroundColor: "#606981"
      }
    },
    MuiAlert: {
      filledError: {
        backgroundColor: "#E25141"
      }
    },
    SearchBox: {
      panel: {
        backgroundColor: "#fff",
        "& .MuiListItemText-root": {
          color: "#808080"
        }
      }
    },
    PageHeading: {
      root: {
        backgroundColor: "#fff",
        "& $linkItem": {
          color: "#808080",
          "&.active, &:hover": {
            color: "#3f51b5"
          }
        }
      }
    },
    MuiToolbar: {
      root: {
        color: "#303030",
        fontWeight: 400,
        fontSize: "1rem"
      }
    },
    MuiOutlinedInput: {
      root: {
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#adadad"
        }
      },
      input: {
        padding: BaseMuiTheme.mixins.paddingToRem(10, 14, 10, 14),
        backgroundColor: "#fff",
        "&::placeholder": {
          color: "#7e7e7e",
          opacity: 1
        }
      },
      notchedOutline: {
        borderColor: "#DCE0E4"
      }
    },
    /**
     * MUI select
     */
    MuiTypography: {
      body2: {
        fontSize: "1rem",
        fontWeight: 400
      },
      colorInherit: {
        color: "#303030"
      }
    },
    MuiListItem: {
      root: {
        backgroundColor: "white"
      }
    },
    MuiSelect: {
      root: {
        marginLeft: BaseMuiTheme.typography.pxToRem(0),
        backgroundColor: "white"
      },
      nativeInput: {
        height: "100%"
      },
      icon: {
        top: "unset",
        bottom: "unset"
      }
    },
    /**
     * Table
     */
    MuiAvatar: {
      root: {
        marginRight: BaseMuiTheme.typography.pxToRem(8)
      }
    },
    MuiTablePagination: {
      toolbar: {
        height: BaseMuiTheme.typography.pxToRem(10)
      }
    },

    MuiTableCell: {
      root: {
        borderBottomColor: "#eee",
        fontWeight: 400
      },
      head: {
        backgroundColor: "#f5f5f5"
      },
      body: {
        backgroundColor: "#fff",
        color: "#212529"
      }
    },
    MuiTableSortLabel: {
      root: {
        "&&$active": {
          color: "#575757"
        }
      },
      active: {}
    },
    MuiDialog: {
      paper: {
        backgroundColor: "transparent"
      }
    },
    MuiDialogContent: {
      root: { backgroundColor: "#fff" }
    },
    MuiDialogActions: {
      root: { backgroundColor: "#fff", marginTop: -1 }
    },
    JRCard: {
      root: {
        backgroundColor: "#fff"
      },
      headerLine: {
        borderColor: "#e4e4e4"
      }
    }
  },

  /**
   * Search table
   */

  palette: {
    text: {
      primary: "#595959",
      secondary: "#7e7e7e",
      body: "#252525"
    },
    sideBar: {
      bgActive: "#293145",
      text: "#a1a1a1",
      textActive: "#fff"
    },
    dropdown: {
      bg: "#fff"
    },
    CustomSelect: {
      item: "#fff",
      itemSelected: "#f4f4f4"
    }
  },
  props: {
    MuiButton: {
      debug: "light"
    },
    Logo: {
      alt: "protego",
      title: "protego"
    },
    AppBarNotification: {
      backgroundColor: "#fff"
    }
  }
});

export default MuiTheme;

  