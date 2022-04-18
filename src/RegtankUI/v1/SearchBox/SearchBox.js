import React from "react";
import clsx from "clsx";
import styles from "./SearchBox.module.scss";
import withStyles from "@mui/styles/withStyles";
import { ReactComponent as SearchBoxIcon } from "./SearchBox.svg";
import { ReactComponent as DelIcon } from "./Del.svg";

const SearchBox = withStyles(
  (theme) => {
    return {
      root: {
        width: 277,
      },
      input: {
        backgroundColor: "rgba(255,255,255,0.2)",
        padding: theme.mixins.paddingToRem(0, 16, 0, 43),
        height: theme.typography.pxToRem(30),
        color: "white",
        fontSize: "1rem",
        "&:focus": {
          boxShadow: "unset !important",
          backgroundColor: "rgba(255,255,255,0.27)",
          color: "white",
          outline: "none",
        },
      },
      icon: {
        position: "absolute",
        left: theme.typography.pxToRem(11),
        top: "45%",
        transform: "translateY(-50%)",
        color: "#fff",
        backgroundColor: "transparent",
        border: "0 none",
        "& svg": {
          height: theme.typography.pxToRem(17.5),
          width: theme.typography.pxToRem(17.5),
        },
        padding: 0,
      },
      panel: {
        position: "absolute",
        top: "100%",
      },
      delIcon: {
        position: "absolute",
        right: theme.typography.pxToRem(11.8),
        top: "50%",
        transform: "translateY(-50%)",
        width: theme.typography.pxToRem(9.67),
        height: theme.typography.pxToRem(9.67),
        cursor: "pointer",
        fill: "#e0e0e0",
        "&:hover": {
          fill: "#fff",
        },
      },
    };
  },
  { name: "SearchBox" },
)(
  ({
    classes,
    className,
    placeholder,
    onChange,
    value,
    children,
    onPressClear,
  }) => {
    return (
      <div className={clsx(classes.root, styles.SearchBox, className)}>
        <div className="form-group">
          <input
            className={clsx(classes.input, "form-control border-0")}
            type="search"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
          />
          <button className={classes.icon}>
            <SearchBoxIcon />
          </button>
          {value.length > 0 && (
            <DelIcon
              className={classes.delIcon}
              onClick={() => onChange({ target: { value: "" } })}
            />
          )}
        </div>
        {children &&
          React.cloneElement(React.Children.only(children), {
            classes: {
              root: classes.panel,
            },
          })}
      </div>
    );
  },
);
export default SearchBox;

SearchBox.defaultProps = {
  className: "",
  value: "",
};
