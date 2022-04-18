import { Typography } from "@mui/material";
import Button from "../../RegtankUI/v1//Button/ButtonBase";
import clsx from "clsx";
import { Form, Formik } from "formik";
import React from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { Link as BaseLink } from "react-router-dom";
import { compose } from "recompose";
import * as Yup from "yup";
import { AuthActionForgot } from "../../actions/auth";
import { ProtegoContext } from "../../core/ProtegoProvider/ProtegoProvider";
import IntlMessages from "../../RegtankUI/v1/IntlMessages";
import TextField from "../../RegtankUI/v1/TextField/TextFieldOutlined";
import styles from "./forgotPasswordForm.module.scss";
import AuthMainContentForm from "../utils/AuthMainContentForm/AuthMainContentForm";
import { PRIMARY_COLOR } from "../../styles/themecolor";
import { typeEmail } from "../../utils/regularExpression";
import { toRem } from "../../RegtankUI/v1/utils";
const CP = "CP";
const ForgotPasswordSchema = Yup.object().shape({
  username: Yup.string()
    .required("Please enter a valid email address.")
    .test("Validate Email", "Please enter a valid email address.", (value) => {
      return typeEmail(value);
    }),
});

const ForgotPasswordForm = compose((Component) => (props) => {
  return (
    <div className={clsx(styles.forgotPasswordWrapper)}>
      <AuthMainContentForm>
        <Component {...props} />
      </AuthMainContentForm>
    </div>
  );
})(function ForgotPasswordForm(props) {
  const location = useLocation(),
    history = useHistory(),
    intl = useIntl(),
    dispatch = useDispatch();
  const { type } = React.useContext(ProtegoContext);

  if (/\/success/.test(location.pathname)) {
    return (
      <form>
        <Typography
          color={"textSecondary"}
          variant={"body2"}
          className={"text-center mx-1"}
          style={{ fontWeight: 500 }}
        >
          <IntlMessages id={"appModule.emailSentDescription"} />
        </Typography>
        <Button
          className={clsx(styles.button, "mt-3")}
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => history.push("/signin")}
        >
          <IntlMessages id="appModule.signIn" />
        </Button>
      </form>
    );
  }

  return (
    <Formik
      initialValues={{ username: "" }}
      validationSchema={ForgotPasswordSchema}
      onSubmit={(values, { setErrors }) => {
        setErrors({});
        dispatch(AuthActionForgot({ email: values.username }))
          .then(() => {
            history.push(location.pathname + "/success");
          })
          .catch((e) => {
            if (e.response.status === 400) {
              setErrors({
                username: "The email address is invalid.",
              });
            }
          });
      }}
    >
      <Form noValidate={true}>
        <Typography
          className={"text-center mb-4"}
          variant={"titleForm"}
        >
          <IntlMessages id="appModule.forgotPassword" />
        </Typography>
        <TextField
          formik
          fullWidth
          placeholder={intl.formatMessage({ id: "appModule.enterEmail" })}
          className={styles.Field}
          name={"username"}
          type={"email"}
          label={"Email"}
        />
        {type === CP && (
          <div className={clsx(styles.forgotEmailDiv)}>
            <Typography color={"primay"} variant={"body2"} fontWeight={500}>
              <BaseLink
                to={"/request?q=account"}
              >
                <IntlMessages id={"appModule.forgotEmail"} />
              </BaseLink>
            </Typography>
          </div>
        )}
        <Button
          className={clsx(styles.button, "mt-3")}
          fullWidth
          type={"submit"}
          variant="contained"
          color="primary"
        >
          <IntlMessages id="appModule.resetPassword" />
        </Button>
      </Form>
    </Formik>
  );
});

export default ForgotPasswordForm;
