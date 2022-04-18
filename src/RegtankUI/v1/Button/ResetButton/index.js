import React from "react";
import { Button as ButtonMui } from "@mui/material";
import styles from "./resetButton.module.scss";

const ResetButton = (props) => {
  return (
    <div className={`${styles.ResetButton} customResetButton`}>
      <ButtonMui variant={"containedWhite"} size={"small"} {...props} />
    </div>
  );
};

export default ResetButton;
