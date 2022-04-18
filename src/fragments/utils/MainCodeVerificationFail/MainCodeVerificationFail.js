import React from "react";
import styles from "./MainCodeVerificationFail.module.scss";
import withStyles from "@material-ui/core/styles/withStyles";
import clsx from "clsx";
import Logo from "../../../UI/Logo/Logo";

const MainCodeVerificationFail = withStyles(
  {
    root: {},
    logo: {},
  },
  { name: "AuthMainContentForm" },
)(
  React.forwardRef(function MainCodeVerificationFail({ classes, children }) {
    return (
      <div
        className={clsx(
          "d-flex justify-content-center align-items-center flex-column",
          styles.bodyMainCodeVerificationFail,
        )}
      >
        <div
          className={clsx(
            "d-flex justify-content-center align-items-center",
            styles.header,
          )}
        >
          <Logo className={clsx(classes.logo, styles.Logo)} />
        </div>
        <div className="flex-grow-1 d-flex  justify-content-center align-items-center">
          <div style={{ textAlign: "center" }}> {children} </div>
        </div>
      </div>
    );
  }),
);

export default MainCodeVerificationFail;
