import React from "react";
import clsx from "clsx";
import { withStyles, makeStyles } from "@mui/styles";
import {
  Checkbox as MuiCheckbox,
  FormControlLabel,
  SvgIcon,
} from "@mui/material";
import { toRem } from "../utils";
import { ReactComponent as CheckedIcon } from "../../../assets/icons/IconCbChecked.svg";
import { ReactComponent as UncheckedIcon } from "../../../assets/icons/IconCbUnchecked.svg";
import { ReactComponent as IndeterminateIcon } from "../../../assets/icons/IconCbIndeterminate.svg";
import { ReactComponent as DisabledIcon } from "../../../assets/icons/IcoCbDisabled.svg";

const CustomCheckbox = makeStyles(() => ({
  formControl: {
    padding: 0,
    marginLeft: 0,
    color: "transparent",
    "& .MuiSvgIcon-root": {
      width: toRem(20),
      height: "auto",
    },
    "& input:not(:checked) + .MuiSvgIcon-root": {
      fill: "#FFF",
    },
    "&.Mui-disabled .MuiSvgIcon-root rect": {
      fill: "#ABB4BD",
    },
    "& .MuiCheckbox-root": {
      padding: toRem(10),
      "&:hover": {
        backgroundColor: "#F5FAFE",
      },
    },
    "& .MuiTouchRipple-root": {
      display: "none",
    },
    "& .MuiTypography-root": {
      fontWeight: 500,
      fontSize: toRem(12),
      lineHeight: toRem(16),
      color: "#232323",

      "&.Mui-disabled": {
        color: "#ABB4BD",
      },
    },
  },
  disabledIcon: {
    boxSizing: "border-box",
    "& rect": {
      fill: "#F9F9FA !important",
    },
  },
}));

const Checkbox = React.forwardRef(function Checkbox(
  { label = "", classes = {}, style = {}, className = "", ...props },
  ref,
) {
  const viewBox = "0 0 16 16";
  const styles = CustomCheckbox();
  return (
    <FormControlLabel
      label={label}
      style={style}
      className={clsx(styles.formControl, className, classes.formControl)}
      control={
        <MuiCheckbox
          ref={ref}
          indeterminateIcon={
            <SvgIcon viewBox={viewBox} component={IndeterminateIcon} />
          }
          icon={
            <SvgIcon
              viewBox={viewBox}
              className={
                props.disabled
                  ? clsx(styles.disabledIcon, classes.disabledIcon)
                  : ""
              }
              component={props.disabled ? DisabledIcon : UncheckedIcon}
            />
          }
          checkedIcon={<SvgIcon viewBox={viewBox} component={CheckedIcon} />}
          classes={classes}
          {...props}
        />
      }
    />
  );
});

// export default withStyles(customStyles)(Checkbox);
export default Checkbox;
