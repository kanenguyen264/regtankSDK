import React from "react";
import styles from "./ChangePasswordForm.module.scss";
import { Typography } from "@mui/material";
import IntlMessages from "../../RegtankUI/v1/IntlMessages";
import { Form, Formik } from "formik";
import Button from "../../RegtankUI/v1/Button/ButtonBase";
import AuthMainContentForm from "../utils/AuthMainContentForm/AuthMainContentForm";
import { useHistory } from "react-router";

const ResetCodeVerificationFail = React.forwardRef(
  function ResetCodeVerificationFail({}, ref) {
    const history = useHistory();
    const reloadPage = () => {
      history.push("/forgot-password");
    };

    return (
      <AuthMainContentForm ref={ref}>
        <Formik>
          <Form>
            <Typography
              className={"text-center mb-4"}
              variant={"titleForm"}
            >
              <IntlMessages id="appModule.changePwFail.title" />
            </Typography>
            <Typography className={("text-center mb-4", styles.colorRed)}>
              <IntlMessages id="appModule.changePwFail.content" />
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => reloadPage()}
            >
              <IntlMessages id="appModule.changePwFail.requestAgain" />
            </Button>
          </Form>
        </Formik>
      </AuthMainContentForm>
    );
  },
);

export default ResetCodeVerificationFail;
