import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  FormLabel,
  TextField as MuiTextField,
} from "@mui/material";
import styles from "./styles.module.scss";
import withFormikField from "../withFormikField";
import { compose } from "recompose";
import ThemColors from "../constants/ThemeColors";

const TextFieldOutlined = compose(withFormikField)(
  React.forwardRef(function TextField(
    {
      className,
      style = {},
      field = {},
      label,
      required,
      formik,
      InputProps = {},
      ...props
    },
    ref,
  ) {
    const [focus, setFocus] = React.useState(false);
    const onFocusInput = () =>{
      setFocus(true);
    }
    const onBlurInput = () =>{
      setFocus(false);
    }
    const outlinedInputProps = { ...props, ...field, InputProps };
    return (
      <FormControl className={styles.textFieldOutlined} component="fieldset">
        <FormLabel component="legend">
          <span style={{color: focus ? ThemColors.primary : ""}}>{label}</span>
          {required && <span className={styles.required}> *</span>}
        </FormLabel>
        <MuiTextField
          fullWidth
          variant="outlined"
          shrink={"true"}
          ref={ref}
          {...outlinedInputProps}
          InputProps= {
            {
              ...InputProps,
              onFocus: onFocusInput,
              onBlur: onBlurInput
            }
          }
        />
      </FormControl>
    );
  }),
);

export default TextFieldOutlined;
