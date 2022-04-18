import React from "react";
import { withStyles, createStyles } from "@mui/styles";
import clsx from "clsx";
//@ts-ignore
import ThemeColors from "../constants/ThemeColors";
import { toRem } from "../utils";
import theme from "../MuiTheme/theme.js";

const styles = () =>
  createStyles({
    root: {
      //@ts-ignore
      "&:first-child": {
        marginTop: toRem(8),
      },
      "&:last-child": {
        marginBottom: toRem(8),
      },
      position: "relative",
      cursor: "pointer",

      //@ts-ignore
      color: ThemeColors.defaultDark,
      "& .optionText": {
        content: "''",
        visibility: "visible",
        display: "block",
        width: "100%",
        borderRadius: toRem(4),
        paddingLeft: toRem(18),
        paddingRight: toRem(18),
        paddingTop: toRem(8),
        paddingBottom: toRem(8),
        height: toRem(40),
        lineHeight: toRem(20),
        fontFamily: "Montserrat",
      },
      "& .optionText:hover": {
        backgroundColor: ThemeColors.itemHover,
        color: ThemeColors.primary,
      },
      "& .optionText:active": {
        backgroundColor: ThemeColors.primary,
        color: ThemeColors.white,
      },
      "&[disabled]": {
        cursor: "auto",
      },
    },
  });

interface DropdownItemProps
  extends WithStyles<typeof styles>,
    React.HTMLAttributes<HTMLElement> {
  component?: React.ComponentType;
}

const DropdownItem = withStyles(styles, { name: "DropdownItem" })(
  React.forwardRef(function DropdownItem(props: DropdownItemProps, ref) {
    const {
      component = "div",
      classes,
      className,
      children,
      ...others
    } = props;
    return React.createElement(
      component,
      ({
        className: clsx(classes.root, className),
        ...others,
      } as unknown) as React.Attributes,
      <div className={"optionText"}>{children}</div>,
    );
  }),
);

export default DropdownItem;
