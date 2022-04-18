import { Theme } from "@material-ui/core";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import clsx from "clsx";
import React from "react";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      //@ts-ignore
      padding: theme.mixins.paddingToRem(11, 16),
      position: "relative",
      cursor: "pointer",
      //@ts-ignore
      color: theme.palette.text.body,
      "&:after": {
        content: "''",
        visibility: "visible",
        display: "block",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        backgroundColor: "#000",
        opacity: 0,
      },
      "&:hover:after": {
        opacity: 10 / 255,
      },
      "&[disabled]": {
        cursor: "auto"
      }
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
      children,
    );
  }),
);

export default DropdownItem;
