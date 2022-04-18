//@flow
import { Popover } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import clsx from "clsx";
import { rest, sortBy } from "lodash";
import React, { useMemo } from "react";
import { compose } from "recompose";
import { toRem } from "../../utils/measurements";
import type { CountrySelectorProps } from "./CountrySelector";
import styles from "./CountrySelector.module.scss";

const styleCountrySelector = withStyles(
  (theme) => ({
    root: {
      marginTop: toRem(17.5),
      overflow: "visible",
      background: "#3B454F",
      "&::before": {
        borderRight: `${toRem(9)} solid #0000`,
        borderLeft: `${toRem(9)} solid #0000`,
        borderBottom: `${toRem(10)} solid #3B454F`,
        top: toRem(-10),
        content: "''",
        position: "absolute",
        right: toRem(8),
      },
    },
    content: {
      width: (props) => toRem(props.width),
      height: (props) => toRem(props.height),
      padding: toRem(8),
      "& > div": {
        padding: (props) =>
          `${toRem(18 - props.spacing / 2 - 8)} ${toRem(
            25 - props.spacing / 2 - 8,
          )}`,
      },
    },
    chip: {
      display: "inline-flex",
      padding: `${toRem(1)} ${toRem(12)}`,
      borderRadius: toRem(12.5),
      background: "#434f5a",
      margin: toRem(7.5),
      cursor: "pointer",
      color: "#e0e0e0",
      lineHeight: 1.35,
      userSelect: "none",
      "&:hover": {
        background: "#4e5a66",
      },
      "&$selected": {
        backgroundColor: "#D87E30",
        color: "#fff",
      },
    },
    selected: {},
  }),
  { name: "MuiCountrySelector" },
);

const CountrySelector = compose(styleCountrySelector)(function CountrySelector(
  props: CountrySelectorProps,
) {
  const {
    open,
    anchorEl,
    onClose,
    classes,
    value,
    onChange,
    countries,
  } = props;

  const toggleCountryCode = React.useCallback(
    (v) => {
      let isExists = value.indexOf(v);
      const newValue = [...value];
      if (isExists >= 0) {
        newValue.splice(isExists, 1);
      } else {
        newValue.push(v);
      }
      onChange(newValue);
    },
    [value],
  );

  const renderList = () => {
    return sortBy(countries, ["name"]);
  };

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      PaperProps={{
        elevation: 0,
        classes: {
          root: classes.root,
        },
      }}
    >
      <div className={clsx(classes.content, styles.Content)}>
        <div>
          {renderList().map((country) => (
            <span
              key={country.code}
              className={clsx(classes.chip, {
                [classes.selected]: Array.isArray(value)
                  ? value.indexOf(country.code) >= 0
                  : false,
              })}
              onClick={() => toggleCountryCode(country.code)}
            >
              {country.name}
            </span>
          ))}
        </div>
      </div>
    </Popover>
  );
});

CountrySelector.defaultProps = {
  width: 300,
  height: 400,
  spacing: 15,
};

export default CountrySelector;
