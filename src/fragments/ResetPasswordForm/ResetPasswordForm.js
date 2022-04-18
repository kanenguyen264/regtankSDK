import React from "react";
import { compose } from "recompose";
import ChangePasswordForm from "../ChangePasswordForm/ChangePasswordForm";
import ResetCodeVerificationFail from "../ChangePasswordForm/ResetCodeVerificationFail";
import LoadingWrapper from "../../RegtankUI/v1/LoadingWrapper";
import { ProtegoContext } from "../../core/ProtegoProvider/ProtegoProvider";
import { useHistory } from "react-router";
import * as qs from "qs";
import styles from "./resetPasswordForm.module.scss";
import "../loginLoading.scss";

const ResetPasswordForm = compose()(function ResetPasswordForm({ match }) {
  /**
   *
   * @type {AuthService}
   */
  const [typeShowChange, setTypeShowChange] = React.useState(null);
  const { services } = React.useContext(ProtegoContext),
    authService = services.AuthService,
    code = match.params?.code || null,
    [loading, setLoading] = React.useState(false),
    [meta, setMeta] = React.useState(null),
    history = useHistory();

  React.useEffect(() => {
    if (!authService) return;
    if (!code) return;
    authService
      .resetPasswordVerify(code)
      .then(({ data }) => {
        // const ok = typeof data?.email === "string";
        // setStatus(ok ? VERIFY_SUCCESS : VERIFY_FAIL);
        setMeta({ email: data.email });
        setTypeShowChange(true);
      })
      .catch((e) => {
        setTypeShowChange(false);
      });
  }, [authService]);

  // if (status === VERIFY_FAIL || status === CHANGE_SUCCESS)
  //   return (
  //     <Redirect
  //       to={{
  //         pathname: "/signin",
  //         search: meta !== null && qs.stringify(meta),
  //       }}
  //     />
  //   );

  // if (status === VERIFY_INIT) return null;
  return (
    <LoadingWrapper loading={loading}>
      <div className={styles.resetPasswordWrapper}>
        {typeShowChange === true ? (
          <ChangePasswordForm
            onChange={(password) => {
              setLoading(true);
              return authService
                .resetPassword(code, password)
                .then(({ status }) => {
                  if (status === 200) {
                    setLoading(false);
                    history.push({
                      pathname: "/signin",
                      search:
                        typeof meta !== "undefined" &&
                        meta !== null &&
                        qs.stringify(meta),
                    });
                    // setStatus(CHANGE_SUCCESS);
                  } else return Promise.reject("Something went wrong");
                });
            }}
          />
        ) : typeShowChange === false ? (
          <ResetCodeVerificationFail />
        ) : null}
      </div>
    </LoadingWrapper>
  );
});

export default ResetPasswordForm;
