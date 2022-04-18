import React from "react";
import clsx from "clsx";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Popover from "@material-ui/core/Popover";

const Dropdown = withStyles(
  (theme) => ({
    dropdown: {
      paddingTop: theme.typography.pxToRem(7),
      paddingBottom: theme.typography.pxToRem(9),

      "&:focus, &:active": {
        color: theme.palette.text.bodyColor,
        border: `1px solid ${theme.palette.border.lightGray}`,
        boxShadow: `0px 2px 4px ${theme.palette.dropdown.shadow}`
      }
    },
    rounded: {
      borderRadius: 500,
    },
    dropdownLabel: {
      textAlign: "center",
    },
    panel: {
      borderRadius: 4,
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
            )}
            variant={variant}
            color={color}
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
