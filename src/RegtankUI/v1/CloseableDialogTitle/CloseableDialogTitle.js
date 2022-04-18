import React from "react";
import clsx from "clsx";
import { compose } from "recompose";
import DialogTitle from "@mui/material/DialogTitle";
import withStyles from "@mui/styles/withStyles";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { toRem } from "@protego/sdk/utils/measurements";
import { theme } from "../MuiTheme/theme";
const CloseableDialogTitle = compose(
  withStyles(
    () => ({
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
  const { classes, className, children, onClose, hideCloseIcon = false, ...others } = props;
  return (
    <DialogTitle
      disableTypography
      className={clsx(classes.root, className)}
      {...others}
    >
      <Typography variant={"h6"} className={clsx(classes.title, classes.text)}>
        {children}
      </Typography>
      {(typeof onClose === "function" && hideCloseIcon === false) && (
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
