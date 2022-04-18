import React from "react";
import PropTypes from "prop-types";
import BaseOutlinedInput from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { FormControl } from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";
import styles from "./TextField.module.scss";
import clsx from "clsx";
import withFormikField from "../withFormikField";
import { compose } from "recompose";
import { ReactComponent as _PasswordHideIcon } from "../../assets/icons/PasswordHideIcon.svg";
import { ReactComponent as _PasswordRevealIcon } from "../../assets/icons/PasswordRevealIcon.svg";
import { toRem } from "../../utils/measurements";

const PasswordRevealIcon = React.memo(function PasswordRevealIcon({
  show,
  ...props
}) {
  const Icon = show === true ? _PasswordHideIcon : _PasswordRevealIcon;
  return <Icon style={{ cursor: "pointer" }} {...props} />;
});

const withPhoneRegexHOC = (Component) => {
  return React.forwardRef(function WithPhoneRegexHOC(
    { type, onChange, ...props },
    ref,
  ) {
    if (type !== "tel")
      return <Component ref={ref} type={type} onChange={onChange} {...props} />;
    const onPhoneNumberChange = (e) => {
      if (/[^0-9+\s-]+/.test(e.target.value)) return;
      if (e.target.value.lastIndexOf("+") > 0) return;
      onChange(e);
    };

    return (
      <Component
        ref={ref}
        type={type}
        onChange={onPhoneNumberChange}
        {...props}
      />
    );
  });
};

const OutlinedInput = compose(
  withStyles(
    (theme) => ({
      sizeLarge: {
        "& $input": {
          paddingTop: theme.typography.pxToRem(13),
          paddingBottom: theme.typography.pxToRem(13),
        },
      },
    }),
    { name: "CustomOutlinedInput" },
  ),
  withPhoneRegexHOC,
)(
  React.forwardRef(function OutlinedInput(props, ref) {
    const {
      classes: { root, sizeLarge, ...otherClasses },
      size,
      notched,
      disableOutline,
      error,
      label,
      ...others
    } = props;

    return (
      <BaseOutlinedInput
        id="outlined-basic"
        className={styles.textField}
        classes={{
          root: clsx(root, size === "large" && sizeLarge),
          ...otherClasses,
        }}
        inputRef={ref}
        label={label}
        variant="outlined"
        error={error}
        {...others}
      />
    );
  }),
);

const TextField = compose(withFormikField)(
  React.forwardRef(function TextField(
    {
      className,
      label,
      fullWidth,
      error = false,
      helperText,
      field = {},
      form = {},
      // for only documentation
      formik,
      autoFocus,
      FormHelperTextProps = {},
      togglePassword = false,
      InputProps = {},
      ...props
    },
    ref,
  ) {
    const outlinedInputProps = { ...props, ...field, ...InputProps },
      [reveal, setReveal] = React.useState(false),
      endAdornment = (
        <PasswordRevealIcon show={reveal} onClick={() => setReveal(!reveal)} />
      );

    if (togglePassword === true) {
      outlinedInputProps.type = reveal ? "text" : "password";
      outlinedInputProps.endAdornment = endAdornment;
    }

    return (
      <FormControl className={className} fullWidth={fullWidth} error={error}>
        <OutlinedInput
          error={error}
          ref={ref}
          label={label}
          {...outlinedInputProps}
        />
        {helperText && (
          <FormHelperText
            className={styles.HelperText}
            {...FormHelperTextProps}
          >
            {helperText}
          </FormHelperText>
        )}
      </FormControl>
    );
  }),
);

TextField.propTypes = {
  /**
   * @ignore
   */
  children: PropTypes.node,
  className: PropTypes.string,
  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: PropTypes.bool,
  /**
   * `true` cho phép component inject data của Formik. Xem thêm tại (https://formik.org/docs/api/field)[https://formik.org/docs/api/field]
   */
  formik: PropTypes.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * The helper text content.
   */
  helperText: PropTypes.node,
  /**
   * The label content.
   */
  label: PropTypes.node,
};

export default TextField;

export { OutlinedInput };
