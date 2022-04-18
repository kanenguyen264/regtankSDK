import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { compose } from "recompose";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CloseableDialogTitle from "../CloseableDialogTitle/CloseableDialogTitle";
import withStyles from "@material-ui/core/styles/withStyles";
import DialogActions from "@material-ui/core/DialogActions";
import { capitalizeFirst } from "../../utils/string";
import Button from "@material-ui/core/Button";

const PromptDialog = compose(
  withStyles(
    (theme) => ({
      root: {},
      title: {},
      content: {
        padding: theme.mixins.paddingToRem(40, 70),
        fontSize: theme.typography.pxToRem(20),
        fontWeight: 500,
        whiteSpace: "break-spaces",
        maxWidth: theme.typography.pxToRem(600),
        minWidth: theme.typography.pxToRem(500),
      },
      actions: {
        justifyContent: "center",
        paddingBottom: theme.typography.pxToRem(20),
      },
      action: {
        width: theme.typography.pxToRem(174),
        height: theme.typography.pxToRem(50),
        "&, &:not(:first-child)": {
          marginLeft: theme.typography.pxToRem(15),
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
)(function PromptDialog(props) {
  const {
    open,
    onClose,
    title,
    children,
    classes,
    actions,
    allowCloseOnTitle,
    maxWidth = false,
  } = props;
  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      open={open}
      onClose={() => onClose(null)}
      aria-labelledby="prompt-dialog"
      maxWidth={maxWidth}
    >
      <CloseableDialogTitle
        onClose={allowCloseOnTitle && (() => onClose(null))}
        className={classes.title}
      >
        {title}
      </CloseableDialogTitle>
      <DialogContent className={classes.content}>{children}</DialogContent>
      <DialogActions disableSpacing className={classes.actions}>
        {actions.map((action) => (
          <Button
            key={`dialog-action-${action?.value || action}`}
            className={classes.action}
            variant={"contained"}
            color={action?.color || undefined}
            onClick={() => onClose(action?.value || action)}
          >
            {action.label ||
              capitalizeFirst(action?.value) ||
              capitalizeFirst(action)}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
});

export default PromptDialog;
