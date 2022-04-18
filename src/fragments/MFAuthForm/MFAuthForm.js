import React from "react";
import * as PropTypes from "prop-types";
import styles from "./MFAuthForm.module.scss";
import { Redirect, withRouter } from "react-router";
import IntlMessages from "../../UI/IntlMessages";
import { Typography } from "@material-ui/core";
import { ReactComponent as MFAIcon } from "./MFA.svg";
import { useIntl } from "react-intl";
import Button from "@material-ui/core/Button";
import TextField from "../../UI/TextField/TextField";
import { Form, Formik, useFormik } from "formik";
import isEmpty from "lodash/isEmpty";
import { useDispatch } from "react-redux";
import { StringParam, useQueryParam, withDefault } from "use-query-params";
import AuthMainContentForm from "../utils/AuthMainContentForm/AuthMainContentForm";
import { AuthActionMfa } from "../../actions/auth";
import Link from "../../UI/Link";

function Step3(props) {
  const intl = useIntl(),
    [mfaToken] = useQueryParam("mfa_token", withDefault(StringParam, ""));
  const formik = useFormik({
    initialValues: {
      mfa_token: mfaToken,
      mfa_code: "",
    },
  });

  if (mfaToken === null || mfaToken.length === 0)
    throw new Error("Error expected");
  return (
    <>
      <MFAIcon className={styles.KeyLock} />
      <Typography
        className={"text-left mt-3 mb-3"}
        color={"textSecondary"}
        variant={"body2"}
        style={{ fontSize: "1rem" }}
      >
        <IntlMessages id={"appModule.mfa.enter"} />
      </Typography>
      <TextField
        fullWidth
        placeholder={intl.formatMessage({
          id: "appModule.mfa.enter2",
        })}
        name={"mfa_code"}
        value={formik.values.mfa_code}
        onChange={formik.handleChange}
        // {...(formik.errors.verification && {
        //   error: true,
        //   helperText: intl.formatMessage({ id: formik.errors.verification })
        // })}
      />
      <Button
        className={"mt-3"}
        fullWidth
        onClick={async () => {
          if (isEmpty(await formik.validateForm()))
            props.onMFALogin(formik.values);
          // props.history.push("/app");
        }}
        variant="contained"
        color="primary"
      >
        <IntlMessages id="appModule.submit" />
      </Button>
    </>
  );
}

const MFAuthForm = withRouter(function MFAuthForm({
  history,
  location,
  match,
  ...props
}) {
  const dispatch = useDispatch(),
    intl = useIntl();
  if (typeof location.state?.mfaToken !== "string") {
    return <Redirect to={"/signin"} />;
  }
  return (
    <AuthMainContentForm className={styles.MFA}>
      <Formik
        initialValues={{ mfaToken: location.state.mfaToken, mfaCode: "" }}
        onSubmit={async (values, actions) => {
          await dispatch(AuthActionMfa(values)).catch((e) => {
            actions.setFieldError("mfaCode", "Invalid code");
          });
        }}
        validateOnBlur={false}
      >
        <Form>
          <Typography
            className={"text-center mb-4"}
            color={"textPrimary"}
            variant={"h4"}
          >
            <IntlMessages id="appModule.mfa.title" />
          </Typography>
          <MFAIcon className={styles.KeyLock} />
          <Typography
            className={"text-left mt-3 mb-3"}
            color={"textSecondary"}
            variant={"body2"}
            style={{ fontSize: "1rem" }}
          >
            <IntlMessages id={"appModule.mfa.enter"} />
          </Typography>
          <TextField
            formik
            autoFocus
            fullWidth
            placeholder={intl.formatMessage({
              id: "appModule.mfa.enter2",
            })}
            name={"mfaCode"}
          />
          <Button
            className={"mt-3"}
            fullWidth
            type={"submit"}
            variant="contained"
            color="primary"
          >
            <IntlMessages id="appModule.submit" />
          </Button>
          <Link
            className={"d-inline-block align-self-center mt-3"}
            to={"/signin"}
            color={"textSecondary"}
            variant={"body2"}
          >
            <IntlMessages id="go-back" />
          </Link>
        </Form>
      </Formik>
    </AuthMainContentForm>
  );
});

MFAuthForm.propTypes = {
  onMFALogin: PropTypes.func.isRequired,
};

export default MFAuthForm;
