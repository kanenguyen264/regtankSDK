import React from "react";
//@ts-ignore
import styles from "./RequestAccountForm.module.scss";
import IntlMessages from "../../RegtankUI/v1/IntlMessages";
import { Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Form, Formik } from "formik";
import TextFieldOutlined from "../../RegtankUI/v1/TextField/TextFieldOutlined";
import TextField from "../../RegtankUI/v1/TextField";
import { useIntl } from "react-intl";
import Select from "../../RegtankUI/v1/Select/Select";
import { Button } from "../../RegtankUI/v1/Button";
import { useHistory, useLocation } from "react-router";
import clsx from "clsx";
//@ts-ignore
import LogoRegtank from "../../RegtankUI/v1/icons/LogoRegtankIcon.svg";
import { compose } from "redux";
import { SupportTicketDto } from "../../types";
import { useDispatch } from "react-redux";
import { AUTH_ACTION_SUPPORT } from "../../actions/auth";
import { StringParam, useQueryParam, withDefault } from "use-query-params";
import * as Yup from "yup";
//@ts-ignore
import UploadFile from "../../RegtankUI/v1/Upload/uploadFile";
import { typeEmail } from "../../utils/regularExpression";
import { toRem } from "../../RegtankUI/v1/utils";

interface LocationStateProps {
  success: boolean;
}

const RequestAccountForm = compose(
  (Component: React.ComponentType) => (props: any) => {
    const location = useLocation<LocationStateProps>();
    return (
      <div className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
        <div
          className={clsx(
            styles.RequestMainContent,
            location.state?.success === true && styles.Success,
          )}
        >
          <img src={LogoRegtank} className={styles.Logo} />
          <Component location={location} {...props} />
        </div>
      </div>
    );
  },
)(function RequestAccountForm(props) {
  const [q] = useQueryParam<string>("q", withDefault(StringParam, "others")),
    intl = useIntl(),
    validationSchema = React.useMemo(() => {
      return Yup.object().shape({
        company: Yup.string()
          .min(1, intl.formatMessage({ id: "company-is-required" }))
          .required(intl.formatMessage({ id: "company-is-required" })),
        name: Yup.string()
          .min(1, intl.formatMessage({ id: "name-is-required" }))
          .required(intl.formatMessage({ id: "name-is-required" })),
        email: Yup.string()
          .test(
            "Validate Email",
            intl.formatMessage({ id: "must-be-a-valid-email" }),
            (value) => {
              return typeEmail(value);
            },
          )
          .min(1, intl.formatMessage({ id: "email-is-required" }))
          .required(intl.formatMessage({ id: "email-is-required" })),
        phone: Yup.string().min(
          1,
          intl.formatMessage({ id: "phone-is-required" }),
        ),
        message: Yup.string()
          .min(1, "Message is required")
          .required("Message is required"),
      });
    }, [intl]);
  const history = useHistory(),
    dispatch = useDispatch();
  //@ts-ignore
  if (props.location.state?.success === true)
    return (
      <form>
        <Typography className={"text-center mb-4"} variant={"titleForm"}>
          <IntlMessages id="appModule.requestForm.requestSent" />
        </Typography>
        <Typography
          className={"text-center"}
          color={"textSecondary"}
          variant={"body2"}
          style={{ fontSize: "1rem" }}
        >
          <IntlMessages id="appModule.requestForm.requestSentDescription" />
        </Typography>
        <Button
          className={"mt-3"}
          fullWidth
          onClick={async () => {
            history.push("/signin");
          }}
          variant="contained"
          color="primary"
        >
          <IntlMessages id="appModule.signIn" />
        </Button>
      </form>
    );
  //@ts-ignore
  const setFileUploadFunction = (value, setFieldValue) => {
    setFieldValue("files", value);
  };
  return (
    <Formik<SupportTicketDto>
      initialValues={{
        company: "",
        name: "",
        email: "",
        phone: "",
        message: "",
        subject: q,
        files: [],
      }}
      validationSchema={validationSchema}
      enableReinitialize
      onSubmit={async (values, bag) => {
        await dispatch(AUTH_ACTION_SUPPORT(values));
        history.push({ state: { success: true } });
      }}
    >
      {({ setFieldValue }) => {
        return (
          <Form>
            <Typography
              className={clsx(styles.titleForm, "text-center")}
              component={"div"}
              variant={"titleForm"}
            >
              <IntlMessages id="appModule.requestForm.title" />
            </Typography>
            {/* <Typography
              color={"textSecondary"}
              variant={"body2"}
              style={{ fontSize: "1rem" }}
            >
              <IntlMessages id="appModule.requestForm.description" />
            </Typography> */}
            <Select
              name={"subject"}
              formik
              label={<IntlMessages id={"appModule.requestForm.method"} />}
            >
              <MenuItem value={"account"}>
                <IntlMessages id={"appModule.requestForm.method.staff"} />
              </MenuItem>
              <MenuItem value={"unlock-account"}>
                <IntlMessages id={"appModule.requestForm.method.unlock"} />
              </MenuItem>
              <MenuItem value={"others"}>
                <IntlMessages id={"appModule.requestForm.method.others"} />
              </MenuItem>
            </Select>
            <div className={styles.distanceField}></div>
            <TextFieldOutlined
              fullWidth
              placeholder={intl.formatMessage({
                id: "Type your name here.",
              })}
              name={"name"}
              formik
              autoFocus
              label={<IntlMessages id={"appModule.requestForm.name"} />}
              className={styles.fieldForm}
            />
            <div className={styles.distanceField}></div>
            <TextFieldOutlined
              fullWidth
              placeholder={intl.formatMessage({
                id: "Type your company here.",
              })}
              name={"company"}
              formik
              autoFocus
              label={<IntlMessages id={"appModule.requestForm.company"} />}
              className={styles.fieldForm}
            />
            <div className={styles.distanceField}></div>
            <TextFieldOutlined
              fullWidth
              placeholder={intl.formatMessage({
                id: "Type your email here.",
              })}
              name={"email"}
              type={"email"}
              formik
              label={<IntlMessages id={"appModule.requestForm.email"} />}
              className={styles.fieldForm}
            />
            <div className={styles.distanceField}></div>
            <TextFieldOutlined
              fullWidth
              placeholder={intl.formatMessage({
                id: "Type your phone here.",
              })}
              name={"phone"}
              type={"tel"}
              formik
              label={
                <IntlMessages id={"appModule.requestForm.contactNumber"} />
              }
              className={styles.fieldForm}
            />
            <div className={styles.distanceField}></div>
            <TextField
              fullWidth
              placeholder={intl.formatMessage({
                id: "Type your message here.",
              })}
              name={"message"}
              formik
              multiline
              label={<IntlMessages id={"appModule.requestForm.message"} />}
              variant="outlined"
            />
            <div style={{ height: toRem(32) }}></div>
            <UploadFile
              fileUploadCallback={(e: any) =>
                setFileUploadFunction(e, setFieldValue)
              }
            />
            <div style={{ height: toRem(32) }}></div>
            <div className={styles.buttonGroup}>
              <div className={styles.button}>
                <Button
                  fullWidth
                  variant="containedWhite"
                  onClick={() => {
                    history.push("/signin");
                  }}
                >
                  <IntlMessages id="appModule.requestForm.cancel" />
                </Button>
              </div>
              <div className={clsx(styles.button, styles.submitButton)}>
                <Button fullWidth variant="contained" type={"submit"}>
                  <IntlMessages id="appModule.submit" />
                </Button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
});

export default RequestAccountForm;
