import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import ExpandLessOutlined from "@material-ui/icons/ExpandLessOutlined";

import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import React from "react";
import { FixedSizeList as List } from "react-window";
import { compose } from "recompose";
import ThemeColors from "../constants/ThemeColors";
import SearchBox from "../SearchBox/SearchBox";
import { toRem } from "../utils";
import withFormikField from "../withFormikField";
import textFieldStyles from "./Select.scss";

const useSearchBoxStyles = makeStyles(
  (theme) => ({
    root: {
      width: "100%",
    },
    input: {
      height: toRem(42),
      width: "100%",
      borderRadius: toRem(4),
    },
    icon: {
      transform: "none",
      top: toRem(10),
    },
  }),
  { name: "Select-SearchBox" },
);

const selectStyles = (theme) => {
  return {
    icon: {
      right: toRem(10),
      top: toRem(10),
    },
    menuPaper: {
      maxHeight: toRem(480),
      "& .MuiMenuItem-root:hover": {
        "& .MuiTypography-root": {
          color: `${ThemeColors.primary} !important`,
        },
        "& .MuiAvatar-root": {
          position: "relative",
          overflow: "visible",
        },
      },
      "& .MuiAvatar-root:after": {
        content: "",
        display: "block",
        position: "absolute",
        width: `${toRem(38)}`,
        height: `${toRem(38)}`,
        position: "absolute",
        borderRadius: "50%",
        border: `1px solid ${ThemeColors.primary}`,
        zIndex: "200",
        backgroundColor: "transparent",
      },
    },
  };
};

const CSelect = React.forwardRef(function CustomMuiSelect(props, ref) {
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
    BaseSelectProps = {},
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
  const innerSelect = (
    <div>
      <Select
        fullWidth
        ref={ref}
        input={<OutlinedInput classes={{ root: inputClass }} />}
        sx={{
          height: toRem(42),
          paddingLeft: toRem(6),
          borderRadius: 2,
          "&& svg": {
            marginTop: toRem(4),
          },
          "&:hover": {
            color: ThemeColors.primary,
            "&& fieldset": {
              border: `1px solid ${ThemeColors.primary}`,
            },
            "&& svg:not(:root)": {
              color: ThemeColors.primary,
            },
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              marginTop: toRem(6),
              borderRadius: 2,
              maxHeight: toRem(440),
              "& .MuiMenuItem-root.Mui-selected": {
                backgroundColor: ThemeColors.itemHover,
              },
              "& .MuiMenuItem-root:hover": {
                backgroundColor: ThemeColors.itemHover,
                color: ThemeColors.primary,
                "& .MuiAvatar-root": {
                  border: `1px solid ${ThemeColors.primary}`,
                },
              },
              "& .MuiMenuItem-root.Mui-selected:hover": {
                backgroundColor: ThemeColors.itemHover,
              },
            },
          },
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
        IconComponent={open ? ExpandLessOutlined : ExpandMoreRoundedIcon}
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
      </Select>
      {helperText && (
        <FormHelperText
          className={textFieldStyles.HelperText}
          {...FormHelperTextProps}
        >
          <Typography variant="small1">{helperText}</Typography>
        </FormHelperText>
      )}
    </div>
  );
  if (withFormControlProps === null || typeof withFormControlProps !== "object")
    return innerSelect;
  return (
    <FormControl
      {...withFormControlProps}
      error={others.error}
      className={clsx(classes.formControl)}
    >
      {innerSelect}
    </FormControl>
  );
});

CSelect.propTypes = {
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

CSelect.defaultProps = {
  dropdownPosition: "left",
  searchable: false,
  onSearchChange: () => {},
  SearchBoxClasses: {},
};

export default compose(
  withFormikField,
  withStyles(selectStyles, { name: "CustomSelect" }),
)(CSelect);
