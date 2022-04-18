import React from "react";
import styles from "./ChangePasswordForm.module.scss";
import { Typography } from "@mui/material";
import IntlMessages from "../../RegtankUI/v1/IntlMessages";
import { FormattedHTMLMessage, useIntl } from "react-intl";
import { Form, Formik } from "formik";
import TextFieldOutlined from "../../RegtankUI/v1/TextField/TextFieldOutlined";
import Button from "../../RegtankUI/v1/Button/ButtonBase";
import PropTypes from "prop-types";
import AuthMainContentForm from "../utils/AuthMainContentForm/AuthMainContentForm";
import PasswordValidator from "password-validator";
import makeStyles from "@mui/styles/makeStyles";

const helperTextStyles = makeStyles((theme) => ({
  helperText: {
    marginLeft: 0,
    marginTop: 0,
  },
}));
const schema = new PasswordValidator();
schema.is().min(8).has().uppercase(1).has().digits(1);

const ChangePasswordForm = React.forwardRef(function ChangePasswordForm(
  { onChange },
  ref,
) {
  const intl = useIntl();
  const className = helperTextStyles();

  return (
    <AuthMainContentForm ref={ref}>
      <Formik
        initialValues={{ password: "", confirmPassword: "" }}
        onSubmit={(values, { setErrors }) => {
          if (values.confirmPassword !== values.password) {
            setErrors({
              confirmPassword: "Confirm password doesn't match password",
            });
            return;
          }
          if (!schema.validate(values.password)) {
            const msg =
              "Password is not strong enough. Please comply with the rules indicated.";
            setErrors({
              password: msg,
              confirmPassword: msg,
            });
            return;
          }
          onChange(values.password).catch(() => {
            setErrors({
              password: "Something went wrong",
              confirmPassword: "Something went wrong",
            });
          });
        }}
      >
        <Form>
          <Typography className={"text-center mb-4"} variant={"titleForm"}>
            <IntlMessages id="appModule.changePw.title" />
          </Typography>
          <Typography
            className={styles.Desc}
            color={"textSecondary"}
            variant={"body2"}
            style={{ fontSize: "1rem" }}
          >
            <FormattedHTMLMessage id="appModule.changePw.desc" />
          </Typography>
          <div className={styles.distanceField}></div>
          <TextFieldOutlined
            formik
            fullWidth
            placeholder={intl.formatMessage({
              id: "appModule.changePw.newPwDesc",
            })}
            name={"password"}
            type={"password"}
            togglePassword={true}
            FormHelperTextProps={{
              className: className.helperText,
            }}
            label={<IntlMessages id={"appModule.changePw.newPw"} />}
          />
          <div className={styles.distanceField}></div>
          <TextFieldOutlined
            formik
            fullWidth
            placeholder={intl.formatMessage({
              id: "appModule.changePw.confirmPw",
            })}
            name={"confirmPassword"}
            type={"password"}
            togglePassword={true}
            FormHelperTextProps={{
              className: className.helperText,
            }}
            label={<IntlMessages id={"appModule.changePw.confirmPw"} />}
          />
          <div className={styles.distanceField}></div>
          <Button
            className={"mt-3"}
            fullWidth
            type={"submit"}
            variant="contained"
            color="primary"
          >
            <IntlMessages id="appModule.changePw.title" />
          </Button>
        </Form>
      </Formik>
    </AuthMainContentForm>
  );
});

ChangePasswordForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ChangePasswordForm;
