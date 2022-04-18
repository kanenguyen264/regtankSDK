import React from "react";
import Switch from "@mui/material/Switch";
import styles from "./basicSwitch.module.scss";

const BasicSwitch = (props) => {
  const {checked} = props
  return (
    <span className={styles.switchWrapper}>
      <Switch {...props} className={checked ? styles.swichChecked : ""} />
    </span>
  );
};

export default BasicSwitch;
