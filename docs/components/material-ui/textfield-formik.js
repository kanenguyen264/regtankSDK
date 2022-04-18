import React from "react";
import { Form, Formik } from "formik";
import TextField from "../../../src/UI/TextField";
import Button from "@material-ui/core/Button";

function TextFieldFormikExample() {
  return (
    <div style={{ width: "450px" }}>
      <h1>Example Sign In Form</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 200);
        }}
      >
        <Form className={"d-flex flex-column"}>
          <TextField formik name={"email"} placeholder={"Enter email"} />
          <TextField formik name={"password"} placeholder={"Enter Password"} />
          <Button variant={"contained"} type={"submit"}>
            Submit
          </Button>
        </Form>
      </Formik>
    </div>
  );
}

export default TextFieldFormikExample;
