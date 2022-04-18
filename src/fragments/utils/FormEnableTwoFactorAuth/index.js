import React, { useContext } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Link,
  Typography,
  Button,
} from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { connect, useDispatch } from "react-redux";

import { ReactComponent as IcAuthLock } from "./IcAuthLock.svg";
import { ReactComponent as IcAuthGoogle } from "./IcAuthGoogle.svg";
import { ReactComponent as IcAuthy } from "./IcAuthy.svg";

import styles from "./FormEnableTwoFactorAuth.module.scss";
import { FormattedHTMLMessage, useIntl } from "react-intl";
import IntlMessages from "../../../UI/IntlMessages";
import AuthMainContentForm from "../AuthMainContentFormTwoFA";
import { Form, Formik } from "formik";
import { Redirect, Route, Switch } from "react-router";
import QRCode from "qrcode.react";
import TextField from "../../../UI/TextField";
import { ProtegoContext } from "../../../core/ProtegoProvider/ProtegoProvider";
import * as Yup from "yup";

const FormEnableTwoFactorAuth = ({ mfaKey, otpAuthUri, onSubmit }) => {
  const intl = useIntl();

  const twoFaForm = React.useMemo(() => {
    const verifyCodeError = intl.formatMessage({ id: "please-enter-code-mfa" });
    return Yup.object().shape({
      verifyCode: Yup.string(verifyCodeError).required(verifyCodeError),
    });
  }, [intl]);

  return (
    <Formik
      initialValues={{
        verifyCode: "",
      }}
      onSubmit={onSubmit}
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={twoFaForm}
    >
      <Form>
        <Grid container className={styles.formMFA}>
          <Grid
            container
            item
            xs={12}
            className={"mt-4"}
            direction={"row"}
            spacing={2}
          >
            <Grid item xs={4} className="text-center">
              <a
                className={"mr-2"}
                href={
                  "https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2"
                }
                target="_blank"
              >
                <IcAuthGoogle />
              </a>
              <a
                href={
                  "https://play.google.com/store/apps/details?id=com.authy.authy"
                }
                target="_blank"
              >
                <IcAuthy />
              </a>
            </Grid>
            <Grid item xs={8}>
              <FormattedHTMLMessage id="appModule.mfa.install" />
              <div>
                <a
                  className={clsx(styles.linkDownload, "mr-1")}
                  href={
                    "https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2"
                  }
                  target="_blank"
                >
                  Google Authenticator
                </a>
                <span>
                  <IntlMessages id="profile.2af.mobile.or"></IntlMessages>
                </span>
                <a
                  className={clsx(styles.linkDownload, "ml-1")}
                  href={
                    "https://play.google.com/store/apps/details?id=com.authy.authy"
                  }
                  target="_blank"
                >
                  Authy
                </a>
              </div>
            </Grid>
            <Grid item xs={12} className="mt-2">
              <Divider />
            </Grid>
          </Grid>

          <Grid
            container
            item
            xs={12}
            className="mt-3"
            direction={"row"}
            spacing={2}
          >
            <Grid item xs={4} className="text-center">
              <QRCode
                className={styles.qrCodeBorder}
                value={otpAuthUri}
                size={137}
              />
            </Grid>
            <Grid item xs={8}>
              <Typography>
                <IntlMessages id={"profile.2af.mobile.scan"} />
              </Typography>
              <Typography className={"mt-4"}>
                <IntlMessages id={"profile.2af.mobile.key"} />
              </Typography>
              <span className={styles.textCode}>{mfaKey}</span>
            </Grid>
            <Grid item xs={12} className="mt-1">
              <Divider />
            </Grid>
          </Grid>

          <Grid container item xs={12} className={"mt-4 mb-5"}>
            <Grid item xs={4} className="text-center">
              <IcAuthLock />
            </Grid>
            <Grid container item xs={8}>
              <Typography>
                <IntlMessages id={"profile.enter.digit.code"} />
              </Typography>
              <Grid container item xs={12} className="mt-2">
                <TextField
                  size="large"
                  formik
                  name={"verifyCode"}
                  autoFocus
                  style={{
                    width: 220,
                    height: 50,
                    background: "#fff",
                    float: "left",
                    marginBottom: 5,
                  }}
                  inputProps={{
                    style: {
                      background: "#fff",
                    },
                  }}
                />
                <Button
                  type={"submit"}
                  variant="contained"
                  color="primary"
                  style={{
                    float: "left",
                    width: 125,
                    height: 50,
                    marginLeft: 16,
                    borderRadius: "6px",
                  }}
                >
                  <IntlMessages id="profile.2af.mobile.verify" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
};

FormEnableTwoFactorAuth.propTypes = {
  otpAuthUri: PropTypes.string.isRequired,
  mfaKey: PropTypes.string.isRequired,
};

export default FormEnableTwoFactorAuth;
