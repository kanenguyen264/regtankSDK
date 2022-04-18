//@flow
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { compose } from "recompose";
import type { DatePickerProps } from "./DatePicker";
import TextField from "../TextField";
import { DatePicker as BaseDatePicker } from "@material-ui/pickers";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import InputAdornment from "@material-ui/core/InputAdornment";
import withStyles from "@material-ui/core/styles/withStyles";
import { toRem } from "../../utils/measurements";
import withFormikField from "../withFormikField";

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
          fullWidth={fullWidth}
          placeholder={placeholder}
          {...textFieldProps}
          size={size}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <CalendarTodayIcon
                  fontSize={24 |> toRem}
                  style={{ cursor: "pointer" }}
                />
              </InputAdornment>
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
