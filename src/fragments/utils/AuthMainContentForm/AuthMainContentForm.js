import React from "react";
import styles from "./AuthMainContentForm.module.scss";
import withStyles from "@material-ui/core/styles/withStyles";
import clsx from "clsx";
import LogoRegtank from "../../../RegtankUI/v1/icons/LogoRegtankIcon.svg";
import IntlMessages from "../../../RegtankUI/v1/IntlMessages";

const AuthMainContentForm = withStyles(
  {
    root: {},
    logo: {},
  },
  { name: "AuthMainContentForm" },
)(
  React.forwardRef(function AuthMainContentForm(
    { classes, className, children, ...props },
    ref,
    version,
  ) {
    return (
      <div
        className={clsx(
          styles.appLoginWrapper,
          "app-login-container d-flex flex-column justify-content-center align-items-center animated slideInUpTiny animation-duration-3",
        )}
      >
        <div className={clsx(classes.root, className)} {...props} ref={ref}>
          <div className={styles.AuthMainContent}>
            <img src={LogoRegtank} className={clsx(classes.logo, styles.Logo)} />
            {children}
            <div className={styles.versionCenter}>
              {props?.version && (
                <div className={styles.version}>
                  <span>
                    <IntlMessages id="setting.version" />{" "}
                    {props.version?.VERSION_WEB} |{" "}
                    <IntlMessages id="setting.build" />{" "}
                    {props.version?.VERSION_BUILD}
                    <br />
                  </span>
                  <span>
                    © 2021 <IntlMessages id="setting.by" /> RegTank Technology
                    Pte. Ltd.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }),
);

export default AuthMainContentForm;
