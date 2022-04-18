//@flow
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { compose } from "recompose";
import type { DatePickerProps } from "./DatePicker";
// import TextField from "../TextField";
import BaseDatePicker from "@mui/lab/DateTimePicker";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import InputAdornment from "@mui/material";
import { withStyles } from "@mui/styles";
import { toRem } from "../utils";
import withFormikField from "../withFormikField";
import { TextField } from "@mui/material";
import { ReactComponent as CalendarIcon } from "../../../assets/icons/ic_calendar.svg";
import styles from "./styles.module.scss";
const DatePicker = compose(withFormikField)(function DatePicker(
  props: DatePickerProps,
) {
  const {
      placeholder,
      classes,
      field = {},
      form = {},
      formik,
      onChange,
      fullWidth = false,
      size = "medium",
      ...others
    } = props,
    DatePickerTextField = React.useCallback(
      (textFieldProps) => (
        <TextField
          className={styles.TextField}
          fullWidth={fullWidth}
          placeholder={placeholder}
          {...textFieldProps}
          size={size}
          variant={"outlined"}
          InputProps={{
            startAdornment: (
              <div className="mr-2">
                <CalendarIcon />
              </div>
            ),
          }}
        />
      ),
      [placeholder],
    );
  return (
    <BaseDatePicker
      TextFieldComponent={DatePickerTextField}
      variant={"inline"}
      classes={classes}
      {...field}
      onChange={
        formik
          ? (date) => form.setFieldValue(field.name, date, false)
          : onChange
      }
      {...others}
    />
  );
});

export default DatePicker;
