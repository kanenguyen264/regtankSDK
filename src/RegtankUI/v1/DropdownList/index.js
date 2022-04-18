import React from "react";
import {
  FormControl,
  FormLabel,
  OutlinedInput,
  Select,
  SvgIcon,
  FormHelperText,
} from "@mui/material";
import { ReactComponent as ExpandMore } from "assets/icons/IconExpandMore.svg";
import { ReactComponent as ExpandLess } from "assets/icons/IconExpandLess.svg";
import clsx from "clsx";
import { compose } from "recompose";
import CustomScrollbar from "../Scrollbar";
import withFormikField from "../withFormikField";
import styles from "./dropdownlist.module.scss";

const DropdownList = ({
  className,
  style = {},
  field = {},
  label,
  required,
  formik,
  helperText = "",
  InputProps = {},
  Typography,
  ...props
}) => {
  const outlinedInputProps = { ...props, ...field };
  const handleChange = (e) => {
    if (typeof e.target.value !== "undefined" && e.target.value !== undefined)
      onChange(e);
  };

  const [open, setOpen] = React.useState(false),
    handleOpen = (e) => {
      setOpen(true);
    },
    handleClose = () => setOpen(false);

  return (
    <FormControl
      className={clsx(styles.textFieldOutlined, className, {
        [styles.focus]: open,
        [styles.error]: helperText,
      })}
      component="fieldset"
    >
      <FormLabel component="legend">
        <span>{label}</span>
        {required && <span className={styles.required}> *</span>}
      </FormLabel>
      <Select
        {...outlinedInputProps}
        input={<OutlinedInput {...InputProps} />}
        MenuProps={{
          component: "div",
          MenuListProps: { component: "div" },
          PopoverClasses: { root: styles.selectPopover },
          onClose: handleClose,
        }}
        IconComponent={() =>
          open ? (
            <SvgIcon viewBox="0 0 8 6" component={ExpandLess} />
          ) : (
            <SvgIcon viewBox="0 0 8 6" component={ExpandMore} />
          )
        }
        component={"div"}
        onChange={handleChange}
        className={styles.selectWrap}
        open={open}
        onOpen={handleOpen}
        onClose={handleClose}
      >
        <CustomScrollbar>
          <div>{props?.children}</div>
        </CustomScrollbar>
      </Select>
      {helperText && (
        <FormHelperText className={styles.helperText}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default compose(withFormikField)(DropdownList);
