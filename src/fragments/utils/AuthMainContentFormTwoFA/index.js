import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import clsx from "clsx";
import Logo from "../../../UI/Logo/Logo";
import IntlMessages from "../../../UI/IntlMessages";
import JRCard from "../../../UI/JRCard/JRCard";

const AuthMainContentFormTwoFA = withStyles(
  {
    root: {
      maxWidth: "642px",
    },
    logo: {
      textAlign: "center",
      marginBottom: "45px",
    },
    header: {
      fontSize: "24px",
      color: "#2B2B2B",
      textAlign: "center",
      fontWeight: 500,
    },
    container: {
      paddingLeft: "32px",
      paddingRight: "32px",
    },
  },
  { name: "AuthMainContentFormTwoFA" },
)(
  React.forwardRef(function AuthMainContentFormTwoFA({
    classes,
    className,
    children,
    ...props
  }) {
    return (
      <div className="app-login-container d-flex flex-column justify-content-center align-items-center">
        <div className={clsx(classes.root, className)} {...props}>
          <div className={classes.logo}>
            <Logo />
          </div>
          <JRCard
            headerLine
            fullBody
            header={
              <div className={classes.header}>
                <IntlMessages id="profile.form.enable" />
              </div>
            }
          >
            <div className={classes.container}>{children}</div>
          </JRCard>
        </div>
      </div>
    );
  }),
);

export default AuthMainContentFormTwoFA;
