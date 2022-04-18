import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./JRCard.module.scss";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

const JRCard = withStyles(
  (theme) => ({
    root: { color: theme?.palette?.text?.body },
    header: {
      fontSize: (props) => theme?.typography?.pxToRem(props.size || 17),
    },
    headerLine: {},
  }),
  { name: "JRCard" },
)(
  React.forwardRef(function JRCard(props, ref) {
    const {
      classes,
      className,
      children,
      header,
      headerLine,
      dense,
      disableShadow,
      fullBody = false,
      ...others
    } = props;

    const $header =
      header &&
      [
        React.isValidElement(header) ? (
          <div key={0} className={styles.JRCardHeader}>
            {header}
          </div>
        ) : (
          <Typography
            key={0}
            className={clsx(styles.JRCardHeader, classes.header)}
          >
            {header}
          </Typography>
        ),
        headerLine && <hr key={1} className={classes.headerLine} />,
      ].filter(Boolean);

    return (
      <div
        ref={ref}
        className={clsx(
          classes.root,
          styles.JRCardRoot,
          { [styles.JRCardDense]: dense, [styles.NoShadow]: disableShadow },
          className,
        )}
        {...others}
      >
        {$header}
        {fullBody ? (
          <div className={styles.FullBody}>{children}</div>
        ) : (
          children
        )}
      </div>
    );
  }),
);

JRCard.propTypes = {
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.shape({
    headerLine: PropTypes.string,
    root: PropTypes.string,
  }),
  className: PropTypes.string,
  dense: PropTypes.bool,
  disableShadow: PropTypes.bool,
  header: PropTypes.node,
  headerLine: PropTypes.bool,
  href: PropTypes.string,
};

JRCard.defaultProps = {
  dense: false,
  headerLine: false,
  disableShadow: false,
};

export default JRCard;
