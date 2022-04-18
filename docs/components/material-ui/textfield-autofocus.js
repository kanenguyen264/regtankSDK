import React from "react";
import { Route, Switch } from "react-router";
import Link from "@protego/sdk/UI/Link";
import { Form, Formik } from "formik";
import TextField from "@protego/sdk/UI/TextField";

function TextFieldAutoFocusExample() {
  return (
    <Switch>
      <Route
        path={"/"}
        exact
        render={() => <Link to={"/form"}>Click here to go to form</Link>}
      />
      <Route
        path={"/form"}
        render={() => (
          <div style={{ width: 400 }}>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={() => {
                // do nothing hihi :">
              }}
            >
              <Form>
                <TextField
                  formik
                  autoFocus
                  fullWidth
                  name={"email"}
                  placeholder={"Email"}
                />
                <TextField
                  formik
                  fullWidth
                  name={"password"}
                  placeholder={"Password"}
                />
              </Form>
            </Formik>
          </div>
        )}
      />
    </Switch>
  );
}

export default TextFieldAutoFocusExample;
