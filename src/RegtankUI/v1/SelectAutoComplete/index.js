import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Autocomplete, Paper, Popper, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { fill } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import ThemeColors from "../constants/ThemeColors";
import { toRem } from "../utils";
import styles from "./styles.module.scss";
import CustomScrollbar from "../Scrollbar";
import clsx from "clsx";
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles({
  root: {
    top: "unset",
    right: 9,
  },
  clearIndicator: {
    backgroundColor: "red",
    "& span": {
      "& svg": {
        "& path": {
          d:
            "path('M0.577485 0.910779C0.733758 0.754553 0.945681 0.66679 1.16665 0.66679C1.38762 0.66679 1.59954 0.754553 1.75582 0.910779L6.99999 6.15495L12.2442 0.910779C12.321 0.831187 12.413 0.767702 12.5146 0.724027C12.6163 0.680353 12.7257 0.657365 12.8363 0.656404C12.947 0.655442 13.0567 0.676527 13.1591 0.718428C13.2615 0.760328 13.3546 0.822206 13.4328 0.90045C13.5111 0.978694 13.5729 1.07174 13.6148 1.17415C13.6567 1.27656 13.6778 1.3863 13.6769 1.49695C13.6759 1.6076 13.6529 1.71695 13.6092 1.81862C13.5656 1.92029 13.5021 2.01224 13.4225 2.08911L7.58915 7.92245C7.43288 8.07867 7.22096 8.16643 6.99999 8.16643C6.77902 8.16643 6.56709 8.07867 6.41082 7.92245L0.577485 2.08911C0.421259 1.93284 0.333496 1.72092 0.333496 1.49995C0.333496 1.27898 0.421259 1.06705 0.577485 0.910779Z')", // your svg icon path here
        },
      },
    },
  },
  option: {
    color: ThemeColors.darkGray,
    opacity: "1 !important",
    zIndex: 10,
  }
});
/**
 * Should use formik form
 */
const SelectAutoComplete = ({
  form,
  field,
  options,
  placeholder,
  getOptionLabel,
  textFieldProps,
  PopperComponent,
  popperFullWidth = false,
  label = "",
  customRenderInput,
  labelRequired = false,
  disableSearch = false,
  variant = "standard",
  InputProps,
  noLabel = false,
  ...props
}) => {
  const { value, name } = field ? field : props;
  const classes = useStyles();
  const inputRef = useRef();

  const onChange = (event, value) => {
    form?.setFieldValue(name, value);
    props.onChange?.(value);
  };

  // const PopperMy = (props) => {
  //   const { children } = props;
  //   const [widthPopper, setWidthPopper] = useState();
  //   useEffect(() => {
  //     setWidthPopper(
  //       inputRef.current?.offsetWidth - (popperFullWidth ? 0 : 10),
  //     );
  //   }, []);
  //   return (
  //     <Popper
  //       {...props}
  //       placement="bottom-start"
  //       style={{
  //         boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.161)",
  //         borderRadius: 6,
  //         width: widthPopper,
  //         marginTop: toRem(8),
  //         backgroundColor: ThemeColors.white,
  //         overflow: 'hidden'
  //       }}
  //     >
  //       <div style={{ backgroundColor: ThemeColors.white }}>{children}</div>
  //     </Popper>
  //   );
  // };
  
  function PaperComponent(props) {
    return (
      <div className={styles.paper}>
        <CustomScrollbar>{props.children}</CustomScrollbar>
      </div>
    );
  }
  const InputLabelPropsObj = {
    shrink: true,
    required: labelRequired,
  };

  return (
    <div ref={inputRef}>
      <Autocomplete
        handleHomeEndKeys
        popupIcon={<ExpandMoreIcon />}
        name={name}
        classes={{
          endAdornment: classes.root,
          clearIndicatorDirty: classes.clearIndicator,
          popupIndicator: classes.popupIndicator,
          option: classes.option,
          paper: styles.paper
        }}
        onChange={onChange}
        onBlur={() => form?.setTouched({ [name]: true })}
        getOptionLabel={getOptionLabel}
        options={options}
        value={value}
        defaultValue={value}
        renderInput={
          customRenderInput
            ? customRenderInput
            : (params) => {
              return (
                <TextField
                  {...params}
                  variant={variant}
                  className={clsx(styles.TextField, disableSearch ? styles.disableSearch : "", noLabel ? styles.selectNoLabel : "")}
                  InputLabelProps={{
                    ...params.InputLabelProps,
                    ...InputLabelPropsObj
                  }}
                  placeholder={placeholder}
                  label={label}
                  disabled={disableSearch}
                  InputProps={{
                    ...params.InputProps,
                    ...InputProps
                  }}
                  {...textFieldProps}
                />
              );
            }
        }
        PaperComponent={PaperComponent}
        {...props}
      />
    </div>
  );
};

export default SelectAutoComplete;
