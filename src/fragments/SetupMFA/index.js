import React from "react";
import { ProtegoContext } from "../../core/ProtegoProvider/ProtegoProvider";
import { Redirect, Route, Switch } from "react-router";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import LoadingWrapper from "../../UI/LoadingWrapper/LoadingWrapper";
import AuthMainContentFormTwoFA from "../utils/AuthMainContentFormTwoFA";
import FormEnableTwoFactorAuth from "../utils/FormEnableTwoFactorAuth";

const SetupMFA = React.memo(function SetupMFA({
  match,
  location,
  history,
  ...props
}) {
  const {
    services: { AuthService },
  } = React.useContext(ProtegoContext);
  const dispatch = useDispatch();
  const [otpAuthUri, setOtpAuthUri] = React.useState(null);
  const [mfaKey, setMfaKey] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const { code } = match.params;

  const fetch = async () => {
    try {
      const { data } = await AuthService.getMfaInfoForSetup(code);
      if (data.otpAuthUri) {
        setMfaKey(data.mfaKey);
        setOtpAuthUri(data.otpAuthUri);
      }
    } catch (error) {
      history.push("/signin");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (otpAuthUri === null) {
      fetch();
    }
  }, []);

  const onSubmit = async (values, actions) => {
    try {
      await AuthService.setupMfa(code, mfaKey, values.verifyCode);
      history.push("/signin");
    } catch (e) {
      actions.setFieldError("verifyCode", "Invalid code");
    }
  };

  return (
    <LoadingWrapper loading={loading}>
      <AuthMainContentFormTwoFA>
        {otpAuthUri && (
          <FormEnableTwoFactorAuth
            otpAuthUri={otpAuthUri}
            mfaKey={mfaKey}
            onSubmit={onSubmit}
          ></FormEnableTwoFactorAuth>
        )}
      </AuthMainContentFormTwoFA>
    </LoadingWrapper>
  );
});

export default SetupMFA;
