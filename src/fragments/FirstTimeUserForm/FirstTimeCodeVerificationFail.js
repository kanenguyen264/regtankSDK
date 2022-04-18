// import styles from "./ChangePasswordForm.module.scss";
import { Button, Link as MuiLink, Typography } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import React from "react";
import { useHistory, useRouteMatch } from "react-router";
import { ProtegoContext } from "../../core/ProtegoProvider/ProtegoProvider";
import IntlMessages from "../../RegtankUI/v1/IntlMessages";
import LoadingWrapper from "../../RegtankUI/v1/LoadingWrapper/LoadingWrapper";
import MainCodeVerificationFail from "../utils/MainCodeVerificationFail/MainCodeVerificationFail";
import { ReactComponent as CodeVerificationFailIcon } from "../../assets/icons/CodeVerificationFailIcon.svg";
import { toRem } from "../../utils/measurements";
import "./firstTimeForm.scss";
const useStyles = makeStyles({
  loginButton: {
    fontSize: 19,
    marginTop: 10,
    background: "#0080FF",
    fontWeight: 500,

    "&:hover": {
      backgroundColor: "#0080FF",
    },
  },
  linkExpired: {
    fontWeight: 500,
    fontSize: toRem(32),
    lineHeight: toRem(48),
    textAlign: "center",
  },
  content: {
    fontWeight: 400,
    fontSize: toRem(21),
    lineHeight: toRem(31.5),
    textAlign: "center",
    color: "#888D92",
  },
});

const FirstTimeCodeVerificationFail = withStyles({
  root: {
    paddingTop: 65,
  },
})(
  React.forwardRef(function FirstTimeCodeVerificationFail({ classes }, ref) {
    const className = useStyles();
    const history = useHistory();
    const {
      params: { code },
    } = useRouteMatch();
    const {
      services: { AuthService },
    } = React.useContext(ProtegoContext);
    const [renewed, setRenewed] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const goToLogin = () => {
      history.push("/signin");
    };

    const renewFirstTimeCode = async () => {
      try {
        setLoading(true);
        await AuthService.renewFirstTimeCode(code);
        setRenewed(true);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    return (
      <LoadingWrapper loading={loading}>
        <MainCodeVerificationFail ref={ref} classes={classes}>
          <CodeVerificationFailIcon />
          {renewed ? (
            <>
              <p className={className.linkExpired}>
                <IntlMessages id="appModule.firstTime.failed.requestSent" />
              </p>
              <p className={className.content}>
                <IntlMessages id="appModule.firstTime.failed.requestSuccess" />
              </p>
            </>
          ) : (
            <>
              <p className={className.linkExpired}>
                <IntlMessages id="appModule.linkExpired" />
              </p>
              <p className={className.content}>
                <IntlMessages id="appModule.contentLink" />
              </p>
            </>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={goToLogin}
            className={className.loginButton}
          >
            <IntlMessages id="appModule.firstTime.failed.goToLogin" />
          </Button>
        </MainCodeVerificationFail>
      </LoadingWrapper>
    );
  }),
);

export default FirstTimeCodeVerificationFail;
