import React, { useContext } from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { connect, useDispatch } from "react-redux";
import styles from "../MFAuthForm/MFAuthForm.module.scss";
import { Typography } from "@material-ui/core";
import { FormattedHTMLMessage, useIntl } from "react-intl";
import Button from "@material-ui/core/Button";
import IntlMessages from "../../UI/IntlMessages";
import AuthMainContentFormTwoFA from "../utils/AuthMainContentFormTwoFA";
import FormEnableTwoFactorAuth from "../utils/FormEnableTwoFactorAuth";
import { Form, Formik } from "formik";
import { Redirect, Route, Switch } from "react-router";
import QRCode from "qrcode.react";
import TextField from "../../UI/TextField";
import { ProtegoContext } from "../../core/ProtegoProvider/ProtegoProvider";
import { push } from "connected-react-router";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Link,
} from "@material-ui/core";

const FirstTimeMFA = ({
  history,
  code,
  otpAuthUri,
  mfaKey,
  password,
  ...props
}) => {
  const dispatch = useDispatch();
  const {
    services: { AuthService },
  } = React.useContext(ProtegoContext);
  const intl = useIntl();
  const onSubmit = async (values, actions) => {
    try {
      await AuthService.firstTimeActivate(code, password, values.verifyCode);
      history.push("/signin");
    } catch (e) {
      actions.setFieldError("verifyCode", "Invalid code");
    }
  };

  return (
    <AuthMainContentFormTwoFA>
      <FormEnableTwoFactorAuth
        otpAuthUri={otpAuthUri}
        mfaKey={mfaKey}
        onSubmit={onSubmit}
      ></FormEnableTwoFactorAuth>
    </AuthMainContentFormTwoFA>
  );
};

FirstTimeMFA.propTypes = {
  otpAuthUri: PropTypes.string.isRequired,
};

export default FirstTimeMFA;
