import React from "react";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import { FormControlLabel, Radio as MuiRadio } from "@mui/material";
import { toRem } from "../utils";

const useStyles = makeStyles(() => ({
  formControl: {
    "& .MuiSvgIcon-root": {
      width: toRem(20),
      height: toRem(20),

      " & path": {
        fill: "#95A1AC",
      },
    },
    "& .MuiTypography-root": {
      fontWeight: 500,
      fontSize: toRem(14),
      lineHeight: toRem(20),
      color: "rgba(35, 35, 35, 0.9)",
    },

    "& .MuiButtonBase-root": {
      padding: "10px",
    },
    "& input:checked + span .MuiSvgIcon-root path": {
      fill: "#0080FF",
    },

    "& .Mui-disabled": {
      "& .MuiSvgIcon-root path": {
        fill: "#ABB4BD",
      },

      "& .MuiTypography-root": {
        color: "#ABB4BD",
      },

      "& .MuiSvgIcon-root path": {
        fill: "#ABB4BD !important",
      },
      "& input:not(:checked) + span": {
        position: "relative",
      },
      "& input:not(:checked) + span::before": {
        backgroundColor: "#ECEEF0",
        borderRadius: "50%",
        content: "''",
        position: "absolute",
        width: toRem(20 - 4),
        height: toRem(20 - 4),
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      },
    },
  },
}));

const Radio = React.forwardRef(function Radio(
  { label = "", style = {}, className = {}, ...props },
  ref,
) {
  const styles = useStyles();
  return (
    <FormControlLabel
      style={style}
      className={clsx(styles.formControl, className)}
      control={<MuiRadio ref={ref} {...props} />}
      label={label}
    />
  );
});

export default Radio;
