import React from "react";
import PropTypes from "prop-types";
import Fade from "@mui/material/Fade";
import withStyles from "@mui/styles/withStyles";
import { CircularProgress } from "@material-ui/core";
import styles from "./loading.module.scss"
import clsx from "clsx";

const LoadingWrapper = withStyles(
  () => ({
    root: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: (props) => `rgb(255,255,255,${props.opacity})`,
      "& .MuiCircularProgress-root": {
        zIndex: 99,
      },
    },
  }),
  { name: "LoadingWrapper" },
)(function LoadingWrapper({ classes, loading, children, size }) {
  const $child = React.Children.only(children);

  return React.cloneElement($child, {
    style: { ...($child.props.style || {}), position: "relative" },
    children: (
      <>
        {$child.props.children}
        <Fade in={loading}>
          <div className={classes.root}>
            <CircularProgress className={clsx(styles.circleProgressWrapper, "loadingCustom")} size={size || "2rem"} />
          </div>
        </Fade>
      </>
    ),
  });
});

LoadingWrapper.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.shape({
    root: PropTypes.string,
  }),
  /**
   * Bật/tắt trạng thái loading
   */
  loading: PropTypes.bool.isRequired,
  /**
   * Float number từ 0 đến 1, xác định độ mờ của `LoadingWrapper` khi active
   */
  opacity: PropTypes.number,
};

LoadingWrapper.defaultProps = {
  opacity: 0.25,
};

export default LoadingWrapper;
