import React from "react";
import BaseSelect from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import { OutlinedInput } from "../TextField/TextField";
import PropTypes from "prop-types";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import MenuItem from "@material-ui/core/MenuItem";
import SearchBox from "../SearchBox/SearchBox";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { compose } from "recompose";
import withFormikField from "../withFormikField";
import { FixedSizeList as List } from "react-window";
import textFieldStyles from "../TextField/TextField.module.scss";
import FormHelperText from "@material-ui/core/FormHelperText";
import { FormControl } from "@material-ui/core";

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
    select: {
      "&, &:focus": {
        backgroundColor: theme.overrides.MuiOutlinedInput.input.backgroundColor,
      },
    },
    input: {},
    icon: {
      top: "calc(50% - 0.7rem)",
      right: "0.5rem",
      color: "currentColor",
    },
    menuList: {
      paddingTop: 0,
      paddingBottom: 0,
      "& .MuiMenuItem-root": {
        backgroundColor: theme.palette.CustomSelect.item,
        color: theme.palette.text.body,
        "&.Mui-selected, &.Mui-selected:hover": {
          backgroundColor: theme.palette.CustomSelect.itemSelected,
        },
      },
    },
    menuPaper: {
      backgroundColor: theme.palette.CustomSelect.item,
    },
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
        // console.count("fuck");
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
  const innerSelect = (
    <>
      <BaseSelect
        ref={ref}
        input={<OutlinedInput classes={{ root: inputClass }} size={size} />}
        MenuProps={{
          classes: {
            list: menuListClass,
            paper: menuPaperClass,
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
          className={textFieldStyles.HelperText}
          {...FormHelperTextProps}
        >
          {helperText}
        </FormHelperText>
      )}
    </>
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
