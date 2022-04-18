import React from "react";
import DatePicker from "../../../src/UI/DatePicker";
import Moment from "react-moment";
import { Form, Formik } from "formik";
import Button from "@material-ui/core/Button";
function DatePickerFormikExample() {
  const [value, setValue] = React.useState({});
  return (
    <div style={{ width: "500px" }}>
      <Formik
        initialValues={{
          date: null,
        }}
        onSubmit={(values) => {
          setValue(values);
        }}
      >
        <Form>
          <DatePicker formik name={"date"} placeholder={"Enter a date here"} />
          <Button type={"submit"} variant={"contained"}>
            Submit
          </Button>
        </Form>
      </Formik>
      <p className="mt-2">
        Your date is{" "}
        {value.date ? (
          <Moment format={"DD/MM/YYYY"}>{value.date}</Moment>
        ) : (
          "undefined"
        )}
      </p>
    </div>
  );
}

export default DatePickerFormikExample;
