import React from "react";
import PropTypes from "prop-types";
import BaseOutlinedInput from "@material-ui/core/OutlinedInput";
import { withStyles } from "@material-ui/core/styles";
import { FormControl } from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";
import styles from "./TextField.module.scss";
import clsx from "clsx";
import withFormikField from "../withFormikField";
import { compose } from "recompose";
import { ReactComponent as _PasswordHideIcon } from "../../assets/icons/PasswordHideIcon.svg";
import { ReactComponent as _PasswordRevealIcon } from "../../assets/icons/PasswordRevealIcon.svg";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { toRem } from "../../utils/measurements";

const PasswordRevealIcon = React.memo(function PasswordRevealIcon({
  show,
  ...props
}) {
  const Icon = show === true ? VisibilityIcon : VisibilityOffIcon;
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
      root: {
        marginBottom: "0.647rem",
      },
      focused: {
        "&$focused $notchedOutline": {
          borderColor: (props) => props.error === false && "#0080FF",
        },
      },
      input: {
        padding: "0.647rem 1.1765rem",
        "&::placeholder": {
          fontSize: "1rem",
          color: theme.palette.text.placeholder,
          opacity: 1,
        },
      },
      /**
       * Size input large heigh is 52px
       */
      sizeLarge: {
        "& $input": {
          paddingTop: toRem(16),
          paddingBottom: toRem(16),
        },
      },
      notchedOutline: {
        borderWidth: (props) =>
          props.disableOutline === true ? 0 : "1px important",
      },
      multiline: {
        padding: 0,
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
      ...others
    } = props;
    return (
      <BaseOutlinedInput
        classes={{
          root: clsx(root, size === "large" && sizeLarge),
          ...otherClasses,
        }}
        inputRef={ref}
        notched={false}
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

    // React.useEffect(() => {
    if (togglePassword === true) {
      outlinedInputProps.type = reveal ? "text" : "password";
      outlinedInputProps.endAdornment = endAdornment;
    }
    // }, [togglePassword, reveal]);
    return (
      <FormControl
        className={className}
        variant={"outlined"}
        fullWidth={fullWidth}
        error={error}
      >
        <OutlinedInput error={error} ref={ref} {...outlinedInputProps} />
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
