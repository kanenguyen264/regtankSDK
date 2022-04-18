import React from "react";
import { makeStyles } from "@mui/styles";
import ThemeColors from "../../constants/ThemeColors";
import { toRem } from "../../utils";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as PenIcon } from "./penIcon.svg";

const useStyle = makeStyles({
  iconButton: {
    "& .MuiIconButton-root": {
      backgroundColor: ThemeColors.white,
      borderRadius: toRem(4.5),
      border: `${toRem(1)} solid ${ThemeColors.grayText1}`,
      width: toRem(40),
      height: toRem(40),
    },
  },
});

const EditButton = (props) => {
  const classes = useStyle();
  return (
    <div className={classes.iconButton}>
      <IconButton {...props}>
        <PenIcon />
      </IconButton>
    </div>
  );
};

export default EditButton;
