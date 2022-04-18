import { Typography, Grid } from "@mui/material";
import { Button } from "../../RegtankUI/v1/Button";
import Checkbox from "../../RegtankUI/v1/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Alert from "@material-ui/lab/Alert";
import { Form, Formik } from "formik";
import * as PropTypes from "prop-types";
import React from "react";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { StringParam, useQueryParam, withDefault } from "use-query-params";
import * as Yup from "yup";
import {
  AuthActionLogin,
  AUTH_ACTION_SET_REMEMBER_ME,
} from "../../actions/auth";
import { APIErrorAccountLocked } from "../../core/APIService";
import { ProtegoContext } from "../../core/ProtegoProvider/ProtegoProvider";
import IntlMessages from "../../RegtankUI/v1/IntlMessages";
import Link from "../../RegtankUI/v1/Link/Link";
import LoadingWrapper from "@protego/sdk/RegtankUI/v1/LoadingWrapper/LoadingWrapper";
import TextField from "../../RegtankUI/v1/TextField/TextFieldOutlined";
import InputPassWordField from "../../RegtankUI/v1/TextField//InputPassword"
import AuthMainContentForm from "../utils/AuthMainContentForm/AuthMainContentForm";
import styles from "./LoginForm.module.scss";
import { useSnackbar } from "notistack";
import { typeEmail } from "../../utils/regularExpression";
import { useHistory } from "react-router-dom";
import { toRem } from "../../RegtankUI/v1/utils";
import "../loginLoading.scss";

const CP = "CP";
function RememberMe({ dispatch }) {
  const rememberMe = useSelector((state) => state.auth.rememberMe);
  return (
    <FormControlLabel
      control={
        <Checkbox
          name="rememberMe"
          color={"primary"}
          checked={rememberMe}
          onChange={({ target }) =>
            dispatch(AUTH_ACTION_SET_REMEMBER_ME(target.checked))
          }
        />
      }
      label={<IntlMessages id="appModule.rememberMe" />}
    />
  );
}

function LoginForm(props) {
  const history = useHistory();
  const [loginErr, setLoginErr] = React.useState(false),
    [loading, setLoading] = React.useState(false),
    [emailParam] = useQueryParam("email", withDefault(StringParam, "")),
    intl = useIntl(),
    dispatch = useDispatch(),
    lastLoggedIn = useSelector((state) => state.auth.lastLoggedIn),
    { type, version } = React.useContext(ProtegoContext);
  // console.log('version', version);
  const { enqueueSnackbar } = useSnackbar();

  const SignInSchema = React.useMemo(() => {
    const emailError = intl.formatMessage({
        id: "please-enter-a-valid-email-address",
      }),
      passwordError = intl.formatMessage({ id: "please-enter-password" });
    return Yup.object().shape({
      username: Yup.string()
        .required(emailError)
        .test("Validate Email", emailError, (value) => {
          return typeEmail(value);
        }),
      password: Yup.string(passwordError).required(passwordError),
    });
  }, [intl]);

  React.useEffect(() => {
    if (type === CP) {
      /**
       * Default remember is true
       */
      dispatch(AUTH_ACTION_SET_REMEMBER_ME(true));
    }
  }, [dispatch]);

  return (
    <LoadingWrapper loading={loading}>
      <AuthMainContentForm
        version={version}
        className={styles.LoginMainContentFormWrapper}
      >
        {loginErr && (
          <div className={styles.Error}>
            <Alert variant={"filled"} severity={"error"} icon={false}>
              <Typography variant={"h4"}>Account Locked</Typography>
              <Typography variant={"body1"}>
                <IntlMessages
                  id="your-account-has-been-locked--please-send-us-a--link--to-unlock-your-account-"
                  values={{
                    link: (
                      <Link to={"/request"}>
                        <IntlMessages id="request-form" />
                      </Link>
                    ),
                  }}
                />
              </Typography>
            </Alert>
          </div>
        )}
        <Formik
          initialValues={{
            username: emailParam || lastLoggedIn?.username || "",
            password: "",
          }}
          validationSchema={SignInSchema}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={async (values, { setErrors }) => {
            setErrors({});
            setLoading(true);
            try {
              await dispatch(AuthActionLogin(values));
            } catch (e) {
              setErrors({
                username: intl.formatMessage({
                  id: "please-enter-a-valid-email-address",
                }),
                password: intl.formatMessage({
                  id: "please-enter-a-valid-password",
                }),
              });
              if (e instanceof APIErrorAccountLocked) {
                setLoginErr(true);
                return;
              }
              /**
               * Show number login failed
               */
              if (e?.response?.data?.failed_attempts) {
                enqueueSnackbar(
                  e?.response?.data?.failed_attempts +
                    " " +
                    intl.formatMessage({
                      id: "sign-in-failed-number",
                    }),
                  {
                    variant: "warning",
                    anchorOrigin: {
                      vertical: "top",
                      horizontal: "right",
                    },
                  },
                );
              }
            } finally {
              setLoading(false);
            }
          }}
        >
          <Form>
            <div className={styles.Field}>
              <TextField
                formik
                autoFocus
                fullWidth
                placeholder={intl.formatMessage({
                  id: "Type your email here.",
                })}
                name={"username"}
                type={"email"}
                label={intl.formatMessage({ id: "appModule.email" })}
              />
            </div>
            <div className={styles.Field}>
              <InputPassWordField
                className={styles.Field}
                formik
                fullWidth
                placeholder={intl.formatMessage({
                  id: "Type your password here.",
                })}
                name={"password"}
                label={intl.formatMessage({ id: "appModule.password" })}
              />
            </div>
            <div className={styles.Field}>
            <Grid container spacing={1} alignItems={"center"} justifyContent={"space-between"} className={styles.rememberWrapper}>
              <Grid item xs={6} className={styles.rememberMe}>
                {/* <div>
                  <RememberMe dispatch={dispatch} />
                </div> */}
              </Grid>
              <Grid item xs={5} className={styles.forgotPassword}>
                <Link to={"/forgot-password"} className={styles.Forgot}>
                  <IntlMessages id="appModule.forgotPassword" />
                </Link>
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems={"center"}>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant={"outlined"}
                  onClick={() => {
                    history.push("/request?q=account");
                  }}
                  style={{height:toRem(48)}}
                >
                  <IntlMessages id="Register" />
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{height:toRem(48)}}
                >
                  <IntlMessages id="appModule.signIn" />
                </Button>
              </Grid>
            </Grid>
            </div>
          </Form>
        </Formik>
      </AuthMainContentForm>
    </LoadingWrapper>
  );
}

LoginForm.propTypes = {
  onForgot: PropTypes.func,
  error: PropTypes.object,
};
LoginForm.defaultProps = {
  onForgot: () => {},
  error: null,
};

export default LoginForm;
