import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { Typography } from "@mui/material";

const JRCard = React.forwardRef(function JRCard(props, ref) {
  const {
    classes,
    className,
    children,
    header,
    footer,
    footerLine,
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
        <div key={0} className={clsx(styles.JRCardHeader, "RegCard-header")}>
          {header}
        </div>
      ) : (
        <Typography
          key={0}
          className={clsx(styles.JRCardHeader, classes?.header)}
        >
          {header}
        </Typography>
      ),
      headerLine && (
        <hr key={1} className={clsx(styles.HeaderLine, classes?.headerLine)} />
      ),
    ].filter(Boolean);

  const $footer = footer && [
    footerLine && (
      <hr key={1} className={clsx(styles.FooterLine, classes?.footerLine)} />
    ),
    React.isValidElement(footer) ? (
      <div key={0} className={styles.JRCardFooter}>
        {footer}
      </div>
    ) : (
      <Typography
        key={0}
        className={clsx(styles.JRCardFooter, classes?.footer)}
      >
        {footer}
      </Typography>
    ),
  ];

  return (
    <div
      ref={ref}
      className={clsx(
        "RegCard-root",
        classes?.root,
        styles.JRCardRoot,
        { [styles.JRCardNoShadow]: disableShadow },
        className,
      )}
      {...others}
    >
      {$header}
      <div className={clsx(styles.JRCardBody, "RegCard-body")}>{children}</div>
      {$footer}
    </div>
  );
});

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
  footer: PropTypes.node,
  headerLine: PropTypes.bool,
  footerLine: PropTypes.bool,
  href: PropTypes.string,
};

JRCard.defaultProps = {
  dense: false,
  headerLine: false,
  disableShadow: false,
};

export default JRCard;
