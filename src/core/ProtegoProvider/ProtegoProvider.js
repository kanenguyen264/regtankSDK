import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { clone } from "lodash";
import { SnackbarProvider } from "notistack";
import PropTypes from "prop-types";
import React from "react";
import { useIdleTimer } from "react-idle-timer";
import { Route, Switch } from "react-router";
import FirstTimeUserForm from "../../fragments/FirstTimeUserForm/FirstTimeUserForm";
import ForgotPasswordForm from "../../fragments/ForgotPasswordForm/ForgotPasswordForm";
import LoginForm from "../../fragments/LoginForm/LoginForm";
import MFAuthForm from "../../fragments/MFAuthForm/MFAuthForm";
import RequestAccountForm from "../../fragments/RequestAccountForm/RequestAccountForm";
import ResetPasswordForm from "../../fragments/ResetPasswordForm";
import PromptProvider from "../../UI/PromptDialog/PromptContext";
import SetupMFA from "../../fragments/SetupMFA";
import { withStyles } from "@material-ui/core/styles";
import {baseStyles} from "../../styles/base"
export const ProtegoContext = React.createContext({});
const CP = "CP";
function ProtegoProvider({
  authRender = (Component) => Component,
  accessDenied,
  services,
  children,
  type,
  userTimeOut,
  version,
}) {
  const [extraComponents, setExtraComponents] = React.useState([]);
  const AuthLoginForm = React.useMemo(() => authRender(LoginForm), [
    authRender,
  ]);
  /**
   * Timer
   */

  const [sessionTimeOut, setSessionTimeOut] = React.useState(false);

  const extraComponentsRef = React.useRef({});
  extraComponentsRef.current = extraComponents;

  const addComponent = (component) => {
    const list = clone(extraComponentsRef.current);
    list.push(component);
    setExtraComponents(list);
  };

  const removeComponent = (component) => {
    const list = clone(extraComponentsRef.current);
    let idx = -1;
    if (component.key) {
      idx = list.findIndex((item) => item.key && item.key === component.key);
    } else {
      idx = list.indexOf(component);
    }

    if (idx >= 0) {
      list.splice(idx, 1);
      setExtraComponents(list);
    }
  };

  const handleOnActive = () => {
    /**
     * User action
     */
    setSessionTimeOut(false);
  };

  const handleOnIdle = () => {
    /**
     * User active after a period of time
     */
    setSessionTimeOut(true);
  };
  useIdleTimer({
    timeout: userTimeOut,
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    debounce: 500,
  });

  return (
    <PromptProvider>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <SnackbarProvider
          anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        >
          <ProtegoContext.Provider
            value={{
              services,
              type,
              addComponent,
              removeComponent,
              sessionTimeOut,
              version,
            }}
          >
            <Switch>
              <Route path={"/server-terminate"}>
                <p>Hello!</p>
              </Route>
              {children}
              <Route
                key={"signin"}
                path={"/signin"}
                component={AuthLoginForm}
              />
              <Route
                key={"first-time"}
                path={"/verify/:code"}
                component={authRender(FirstTimeUserForm)}
              />
              <Route
                key={"forgot-password"}
                path={"/forgot-password"}
                component={authRender(ForgotPasswordForm)}
              />
              <Route
                key={"mfa"}
                path={"/mfa"}
                component={authRender(MFAuthForm)}
              />
              <Route
                key="reset"
                path="/reset/:code"
                component={authRender(ResetPasswordForm)}
              />
              {type === CP ? (
                <Route
                  key={"request"}
                  path={"/request"}
                  component={authRender(RequestAccountForm)}
                />
              ) : (
                <Route
                  key={"request"}
                  path={"/request"}
                  component={AuthLoginForm}
                />
              )}
              <Route
                key={"setup-mfa"}
                path={"/setup-mfa/:code"}
                component={authRender(SetupMFA)}
              />
            </Switch>
            <>
              {extraComponentsRef.current.map((comp, index) => {
                return React.isValidElement(comp)
                  ? React.cloneElement(comp, { key: index })
                  : React.cloneElement(comp.component, { key: comp.key });
              })}
            </>
          </ProtegoContext.Provider>
        </SnackbarProvider>
      </MuiPickersUtilsProvider>
    </PromptProvider>
  );
}

ProtegoProvider.propTypes = {
  /**
   * Inject required sharing service inside SDK
   */
  services: PropTypes.shape({
    APIService: PropTypes.shape({
      delete: PropTypes.func.isRequired,
      get: PropTypes.func.isRequired,
      post: PropTypes.func.isRequired,
      put: PropTypes.func.isRequired,
    }).isRequired,
    AuthService: PropTypes.shape({
      firstTimeActivate: PropTypes.func.isRequired,
      firstTimeVerify: PropTypes.func.isRequired,
      forgotPassword: PropTypes.func.isRequired,
      login: PropTypes.func.isRequired,
      loginMfa: PropTypes.func.isRequired,
      refreshToken: PropTypes.func.isRequired,
      resetPassword: PropTypes.func.isRequired,
      resetPasswordVerify: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withStyles(baseStyles)(ProtegoProvider);
