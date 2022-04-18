import React from "react";
import BaseSelect from "@mui/material/Select";
import withStyles from "@mui/styles/withStyles";
import { OutlinedInput } from "@mui/material";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import MenuItem from "@mui/material/MenuItem";
import SearchBox from "../SearchBox/SearchBox";
import makeStyles from "@mui/styles/makeStyles";
import { compose } from "recompose";
import withFormikField from "../withFormikField";
import { FixedSizeList as List } from "react-window";
import FormHelperText from "@material-ui/core/FormHelperText";
import { FormControl } from "@material-ui/core";
import { toRem } from "../utils";
import styles from "./Select.module.scss";
import ThemeColors from "../constants/ThemeColors";
import clsx from "clsx";
import ClickAwayListener from "@mui/material/ClickAwayListener";
const customPaperMenuSelect = styles.customPaperMenuSelect;
const useSearchBoxStyles = makeStyles(
  (theme) => ({
    root: {
      width: "100%",
    },
    input: {
      height: theme.typography.pxToRem(40),
      width: "100%",
      borderRadius: theme.typography.pxToRem(4),
    },
    icon: {
      transform: "none",
      top: theme.typography.pxToRem(11.5),
    },
  }),
  { name: "Select-SearchBox" },
);

const selectStyles = (theme) => {
  return {
    search: {
      paddingTop: theme.typography.pxToRem(9.5),
      paddingBottom: theme.typography.pxToRem(9.5),
      "&,&:focus": {
        outline: "none",
      },
    },
  };
};

const Select = React.forwardRef(function CustomMuiSelect(props, ref) {
  const {
    dropdownPosition,
    classes: {
      menuList: menuListClass,
      menuPaper: menuPaperClass,
      search,
      input: inputClass,
      ...classes
    },
    size,
    searchable,
    onSearchChange,
    children,
    onChange,
    formik,
    field = {},
    form = {},
    virtualize = false,
    helperText,
    FormHelperTextProps,
    withFormControlProps = null,
    SearchBoxClasses = {},
    isUnderlineInput,
    label,
    ...others
  } = props;
  const searchBoxClasses = useSearchBoxStyles();
  const [open, setOpen] = React.useState(false),
    handleOpen = (e) => {
      setOpen(true);
    },
    handleClose = () => setOpen(false),
    handleChange = (e) => {
      if (typeof e.target.value !== "undefined" && e.target.value !== undefined)
        onChange(e);
    },
    MenuListProps = {},
    BaseSelectProps = {
      // renderValue: React.useCallback((v) => v || others.placeholder || "-", [])
    },
    VirtualizedItem = React.useCallback(
      function VirtualizeItem({ index, style }) {
        return (
          <MenuItem
            key={virtualize[index].value}
            value={virtualize[index].value}
            style={style}
            onClick={(event) => {
              Object.defineProperty(event, "target", {
                writable: true,
                value: {
                  value: virtualize[index].value,
                  name: others.name || field.name,
                },
              });
              (onChange || field.onChange)(event);
              handleClose();
            }}
          >
            {virtualize[index].name}
          </MenuItem>
        );
      },
      [virtualize],
    ),
    VirtualizedList = React.useCallback(
      React.forwardRef(function VirtualizedList(props$1, ref) {
        return (
          <List
            itemSize={36}
            height={360}
            itemCount={virtualize.length}
            outerRef={ref}
          >
            {VirtualizedItem}
          </List>
        );
      }),
      [virtualize],
    );
  if (Array.isArray(virtualize)) {
    MenuListProps.component = VirtualizedList;
    BaseSelectProps.renderValue = React.useCallback(
      (value) =>
        virtualize.find((v) => v.value === value)?.name ||
        others.placeholder ||
        "",
      [],
    );
  }
  const [focus, setFocus] = React.useState(false);

  const onFocus = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };
  const innerSelect = (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={onBlur}
    >
      <div className={styles.selectWrapper}>
        {label && (
          <div className={clsx(styles.labelSelect, focus && styles.blueText)}>
            {label}
          </div>
        )}
        <BaseSelect
          onFocus={onFocus}
          className={styles.container}
          ref={ref}
          input={
            !isUnderlineInput && (
              <OutlinedInput
                classes={{ root: inputClass }}
                size={size}
                className={focus && styles.blueText}
              />
            )
          }
          MenuProps={{
            classes: {
              list: menuListClass,
              paper: customPaperMenuSelect,
            },
            variant: "menu",
            anchorOrigin: {
              vertical: "bottom",
              horizontal: dropdownPosition,
            },
            transformOrigin: {
              vertical: "top",
              horizontal: dropdownPosition,
            },
            getContentAnchorEl: null,
            MenuListProps,
          }}
          IconComponent={ExpandMoreRoundedIcon}
          classes={classes}
          open={open}
          onOpen={handleOpen}
          onClose={handleClose}
          onChange={handleChange}
          {...others}
          {...field}
          {...BaseSelectProps}
        >
          {searchable && (
            <MenuItem
              className={search}
              button={false}
              value={undefined}
              onClick={handleOpen}
            >
              <SearchBox classes={searchBoxClasses} onChange={onSearchChange} />
            </MenuItem>
          )}

          {children}
        </BaseSelect>
        {helperText && (
          <FormHelperText
            className={styles.helperTextStyle}
            {...FormHelperTextProps}
          >
            {helperText}
          </FormHelperText>
        )}
      </div>
    </ClickAwayListener>
  );
  if (withFormControlProps === null || typeof withFormControlProps !== "object")
    return innerSelect;
  return (
    <FormControl {...withFormControlProps} error={others.error}>
      {innerSelect}
    </FormControl>
  );
});

Select.propTypes = {
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.shape({
    disabled: PropTypes.string,
    filled: PropTypes.string,
    icon: PropTypes.string,
    iconFilled: PropTypes.string,
    iconOpen: PropTypes.string,
    iconOutlined: PropTypes.string,
    outlined: PropTypes.string,
    root: PropTypes.string,
    search: PropTypes.string,
    select: PropTypes.string,
    selectMenu: PropTypes.string,
  }),
  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.any,
  /**
   * Cho phép canh lề vị trí của dropdown so với select input là canh lề trái (`left`) hay lề phải (`right`). Mặc định là `left`
   */
  dropdownPosition: PropTypes.oneOf(["left", "right"]),
  /**
   * `true` cho phép component inject data của Formik. Xem thêm tại (https://formik.org/docs/api/field)[https://formik.org/docs/api/field]
   */
  formik: PropTypes.bool,
  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: PropTypes.func,
  /**
   * Event fire khi Select searchable và giá trị của ô tìm kiếm thay đổi
   */
  onSearchChange: PropTypes.func,
  /**
   * Cho phép hiện ô tìm kiếm bên trong Dropdown
   */
  searchable: PropTypes.bool,
  /**
   * @ignore
   */
  value: PropTypes.any,
};

Select.defaultProps = {
  dropdownPosition: "left",
  searchable: false,
  onSearchChange: () => {},
  SearchBoxClasses: {},
};

export default compose(
  withFormikField,
  withStyles(selectStyles, { name: "CustomSelect" }),
)(Select);
