import React from "react";
import { ProtegoContext } from "../../core/ProtegoProvider/ProtegoProvider";
import { Redirect, Route, Switch } from "react-router";
import ChangePasswordForm from "../ChangePasswordForm/ChangePasswordForm";
import FirstTimeMFA from "./FirstTimeMFA";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import LoadingWrapper from "../../RegtankUI/v1/LoadingWrapper/LoadingWrapper";
import FirstTimeCodeVerificationFail from "./FirstTimeCodeVerificationFail";
import "../loginLoading.scss";

const FirstTimeUserForm = React.memo(function FirstTimeUserForm({
  match,
  location,
  history,
  ...props
}) {
  const {
      services: { AuthService },
    } = React.useContext(ProtegoContext),
    dispatch = useDispatch(),
    password = location.state?.password || "",
    [otpAuthUri, setOtpAuthUri] = React.useState(null),
    [mfaKey, setMfaKey] = React.useState(null),
    [error, setError] = React.useState(false),
    [loading, setLoading] = React.useState(true),
    { code } = match.params;

  const fetch = async () => {
    try {
      const { data } = await AuthService.firstTimeVerify(match.params.code);
      if (data.otpAuthUri) {
        setMfaKey(data.mfaKey);
        setOtpAuthUri(data.otpAuthUri);
      }
    } catch (error) {
      setError(error.response);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (otpAuthUri === null) {
      fetch();
    }
  }, []);

  return (
    <LoadingWrapper loading={loading}>
      <>
        {!loading &&
          (error ? (
            <FirstTimeCodeVerificationFail error={error} />
          ) : (
            <>
              <Switch>
                <Route
                  path={`${match.url}/change-password`}
                  render={() => (
                    <ChangePasswordForm
                      onChange={async (password) => {
                        if (otpAuthUri === null) {
                          await AuthService.firstTimeActivate(
                            code,
                            password,
                          ).then(() => history.push("/signin"));
                        } else {
                          dispatch(
                            push(`${match.url}/mfa`, {
                              password,
                            }),
                          );
                        }
                      }}
                    />
                  )}
                />
                {otpAuthUri && (
                  <Route
                    path={`${match.url}/mfa`}
                    render={(matchProps) => (
                      <FirstTimeMFA
                        {...matchProps}
                        code={match.params.code}
                        password={password}
                        otpAuthUri={otpAuthUri}
                        mfaKey={mfaKey}
                      />
                    )}
                  />
                )}
              </Switch>
              {password.length === 0 &&
                !/change-password/.test(location.pathname) && (
                  <Redirect
                    to={`${match.url.replace(/\/$/, "")}/change-password`}
                  />
                )}
            </>
          ))}
      </>
    </LoadingWrapper>
  );
});

export default FirstTimeUserForm;
