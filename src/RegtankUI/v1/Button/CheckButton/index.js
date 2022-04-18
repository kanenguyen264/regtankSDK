import React from "react";
import { styled } from "@mui/material/styles";
import ThemeColors from "../../constants/ThemeColors";
import { toRem } from "../../utils";
import Button from "../ButtonBase";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as CheckIcon } from "./Check.svg";
import styles from "./styles.module.scss";

const CheckButton = (props) => {
  return (
    <div className={styles.CheckButtonWrapper}>
      <IconButton {...props}>
        <CheckIcon />
      </IconButton>
    </div>
  );
};

export default CheckButton;
