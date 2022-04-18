import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { compose } from "recompose";
import DialogMUI from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CloseableDialogTitle from "../CloseableDialogTitle/CloseableDialogTitle";
import withStyles from "@mui/styles/withStyles";
import DialogActions from "@mui/material/DialogActions";
import { capitalizeFirst } from "../../../utils/string";
import { Button } from "@mui/material";
import { toRem } from "../utils";
import styles from "./dialog.module.scss";
const {
  bool,
  number,
  string,
  object,
  objectOf,
  element,
  shape,
  func,
  any,
} = PropTypes;

const Dialog = compose(
  withStyles(
    (theme) => ({
      root: {},
      title: {
        "& .titleIcon": {
          marginRight: toRem(14),
          position: "relative",
          top: toRem(-2),
          "& svg": {
            fontSize: toRem(25),
          },
        },
      },
      content: {
        whiteSpace: "break-spaces",
        maxWidth: toRem(800),
        minWidth: toRem(500),
        overflow: "hidden !important",
        marginBottom: toRem(-5),
      },
      actions: {
        justifyContent: "center",
        paddingBottom: toRem(20),
      },
      action: {
        width: toRem(120),
        height: toRem(40),
        boxSizing: "content-box",
        "&, &:not(:first-child)": {
          marginLeft: toRem(15),
        },
        "&:first-child": {
          marginLeft: 0,
        },
      },
    }),
    {
      name: "MuiPromptDialog",
    },
  ),
)(function Dialog({
  open,
  onClose,
  title,
  children,
  classes,
  okProps, // right buttons props
  cancelProps, // left buttons props
  allowCloseOnTitle,
  maxWidth = false,
  width,
  height,
  actionsCustom,
  scrollType,
  disableDialogAction,
  hideCloseIcon = false,
  className,
  ...props
}) {
  return (
    <DialogMUI
      disableBackdropClick
      disableEscapeKeyDown
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      scroll={scrollType || "paper"}
      className={clsx(styles.dialogRootWrapper, className)}
      {...props}
    >
      <CloseableDialogTitle
        onClose={cancelProps?.onClick || (() => onClose(null))}
        hideCloseIcon={hideCloseIcon}
        className={classes.title}
      >
        {title?.icon && <span className="titleIcon">{title.icon}</span>}
        <span>{title?.text || title}</span>
      </CloseableDialogTitle>
      <DialogContent className={classes.content}>{children}</DialogContent>
      {!disableDialogAction && (
        <DialogActions disableSpacing className={classes.actions}>
          {actionsCustom ? (
            actionsCustom
          ) : (
            <div>
              {cancelProps && ( // left buttons prop
                <Button
                  className={classes.action}
                  variant={cancelProps?.variant || "containedWhite"}
                  size={cancelProps?.size || "small"}
                  onClick={cancelProps?.onClick}
                  {...cancelProps}
                >
                  {cancelProps?.text || "Cancel"}
                </Button>
              )}
              {okProps && ( // right buttons prop
                <Button
                  className={classes.action}
                  variant={okProps?.variant || "contained"}
                  size={okProps?.size || "small"}
                  onClick={okProps?.onClick}
                  {...okProps}
                >
                  {okProps?.text || "Ok"}
                </Button>
              )}
            </div>
          )}
        </DialogActions>
      )}
    </DialogMUI>
  );
});

Dialog.propTypes = {
  open: bool, //state open/close dialog
  onClose: func,
  title:
    string ||
    objectOf(
      shape({
        text: string,
        icon: element,
      }),
    ),
  children: element,
  classes: object,
  okProps: objectOf(
    // right buttons props
    shape({
      text: string,
      onClick: func,
    }),
  ),
  cancelProps: objectOf(
    // left buttons props
    shape({
      text: string,
      onClick: func,
    }),
  ),
  allowCloseOnTitle: bool,
  maxWidth: number,
  width: number,
  actionsCustom: element,
  disableDialogAction: bool,
  hideCloseIcon: bool,
};

export default Dialog;
