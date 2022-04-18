import React from "react";
import PropTypes from "prop-types";
import { FormControl } from "@mui/material";
import clsx from "clsx";
import { compose } from "recompose";
import withFormikField from "../withFormikField";
import BaseOutlinedInput from "@mui/material/TextField";
import styles from "./styles.module.scss";
import { withStyles } from "@mui/material/styles";
import TextFieldOutlined from "./TextFieldOutlined";

const TextField = compose(withFormikField)(
  React.forwardRef(function TextField(
    {
      className,
      style = {},
      field = {},
      label,
      fullWidth,
      error = false,
      formik,
      InputProps = {},
      variant = "standard",
      ...props
    },
    ref,
  ) {
    const outlinedInputProps = { ...props, ...field };
    return (
      <FormControl
        style={style}
        className={clsx(
          className,
          styles.TextField,
          label ? "" : styles.labelNoProp,
        )}
        fullWidth={fullWidth}
        error={error}
      >
        <BaseOutlinedInput
          InputLabelProps={{ shrink: true }}
          label={label}
          error={error}
          ref={ref}
          variant={variant}
          InputProps={InputProps}
          {...outlinedInputProps}
        />
      </FormControl>
    );
  }),
);

TextField.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  error: PropTypes.bool,
  formik: PropTypes.bool,
  fullWidth: PropTypes.bool,
  label: PropTypes.node,
};

export default TextField;
export { TextFieldOutlined };
