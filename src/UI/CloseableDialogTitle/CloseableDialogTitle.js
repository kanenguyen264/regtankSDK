import React from "react";
import clsx from "clsx";
import { compose } from "recompose";
import DialogTitle from "@material-ui/core/DialogTitle";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { toRem } from "@protego/sdk/utils/measurements";

const CloseableDialogTitle = compose(
  withStyles(
    (theme) => ({
      root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: theme.palette.primary.main,
        padding: theme.mixins.paddingToRem(26, 30),
      },
      title: {
        color: "#fff",
      },
      text: { fontSize: theme.typography.pxToRem(26), lineHeight: 34.0 / 26 },
      close: {
        marginTop: theme.typography.pxToRem(-5.5),
        marginBottom: theme.typography.pxToRem(-5.5),
        marginRight: -12,
        padding: `0 ${toRem(12)}`,
      },
    }),
    { name: "MuiCloseableDialogTitle" },
  ),
)(function CloseableDialogTitle(props) {
  const { classes, className, children, onClose, ...others } = props;
  return (
    <DialogTitle
      disableTypography
      className={clsx(classes.root, className)}
      {...others}
    >
      <Typography variant={"h6"} className={clsx(classes.title, classes.text)}>
        {children}
      </Typography>
      {typeof onClose === "function" && (
        <IconButton
          aria-label="close"
          onClick={onClose}
          className={clsx(classes.title, classes.close)}
        >
          <CloseIcon />
        </IconButton>
      )}
    </DialogTitle>
  );
});

CloseableDialogTitle.propTypes = {
  onClose: PropTypes.func,
};

export default CloseableDialogTitle;
