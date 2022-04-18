import React from "react";
import clsx from "clsx";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Popover from "@material-ui/core/Popover";
import { toRem } from "../utils";

const Dropdown = withStyles(
  (theme) => ({
    dropdown: {
      paddingTop: theme.typography.pxToRem(7),
      paddingBottom: theme.typography.pxToRem(9),
    },
    rounded: {
      borderRadius: toRem(500),
    },
    dropdownLabel: {
      textAlign: "center",
    },
    panel: {
      borderRadius: toRem(4),
      overflow: "hidden",
      backgroundColor: theme.palette.dropdown.bg,
    },
  }),
  {
    name: "MuiDropdown",
  },
)(
  React.forwardRef(
    /**
     *
     * @param {DropdownProps} props
     * @param ref
     * @returns {JSX.Element}
     * @constructor
     */
    function Dropdown(props, ref) {
      const {
          classes,
          className,
          label,
          dropdownPosition = "left",
          color = "primary",
          size = "small",
          children,
          variant = "contained",
          rounded = false,
          ...others
        } = props,
        [anchorEl, setAnchorEl] = React.useState(null);

      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };

      const handleClose = () => {
        setAnchorEl(null);
      };

      const open = Boolean(anchorEl),
        anchorOrigin = {
          vertical: "bottom",
          horizontal: dropdownPosition,
        },
        transformOrigin = {
          vertical: "top",
          horizontal: dropdownPosition,
        };
      return (
        <>
          <Button
            ref={ref}
            className={clsx(
              classes.dropdown,
              rounded && classes.rounded,
              className,
              {"open": open}
            )}
            variant={variant}
            color={color?color:"primary"}
            size={size}
            endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            onClick={handleClick}
            {...others}
          >
            <span className={classes.dropdownLabel}>{label}</span>
          </Button>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={anchorOrigin}
            transformOrigin={transformOrigin}
            className={classes?.popoverContainer}
            style={{marginTop: toRem(3)}}
          >
            <div
              className={classes.panel}
              style={anchorEl ? { minWidth: `${anchorEl.offsetWidth}px` } : {}}
            >
              {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                  onClick: (e) => {
                    if (typeof child.props.onClick === "function") {
                      child.props.onClick(e);
                    }
                    if (!e.defaultPrevented) {
                      handleClose();
                    }
                  },
                }),
              )}
            </div>
          </Popover>
        </>
      );
    },
  ),
);

export default Dropdown;
