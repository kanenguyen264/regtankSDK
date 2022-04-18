import React, { useState } from "react";
import Input from "../TextFieldOutlined";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import eyeOnIc from "./eyeOn.svg";
import styles from "./inputPassword.module.scss";
import clsx from "clsx";

const InputPassword = (props) => {
  const [toggleIconEye, setToggleIconEye] = useState(true);
  const toggleIconPassword = (toggle) => {
    setToggleIconEye(!toggle);
  };

  return (
    <div className={clsx(styles.inputPasswordWrapper, "inputPassword")}>
      <Input {...props} type={toggleIconEye ? "password" : "text"} />
      <IconButton className={styles.endButton} onClick={()=>{toggleIconPassword(toggleIconEye)}}>
        {toggleIconEye ? <VisibilityOff /> : <img src={eyeOnIc} />}
      </IconButton>
    </div>
  );
};

export default InputPassword;
