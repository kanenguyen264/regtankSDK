import React from "react";
import withStyles from "@mui/styles/withStyles";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";
import { withRouter } from "react-router";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { compose } from "recompose";
import Link from "../Link";
import styles from "./PageHeading.module.scss";
import { PageHeadingContext } from "./PageHeadingProvider";
import MuiTheme from "../MuiTheme/theme";
const HomeRoute = "/app/dashboard";
const getUrlString = (path, sub, index) => {
  if (index === 0) {
    return HomeRoute;
  } else {
    return "/" + path.split(sub)[0] + sub;
  }
};

const PageHeading = compose(
  withStyles(
    () => ({
      root: {
        "& h2$title": {
          color: MuiTheme.palette.text.body,
        },
        "&$card": {
          padding: MuiTheme.mixins.paddingToRem(12, 30),
          paddingBottom: MuiTheme.mixins.paddingToRem(12),
        },
      },
      inlineBr: {
        height: MuiTheme.mixins.paddingToRem(70),
      },
      card: {},
      title: {},
      disabled: {},
      link: {
        display: "flex",
      },
      icon: {
        marginRight: MuiTheme.spacing(0.5),
        marginBottom: MuiTheme.spacing(0.2),
        width: MuiTheme.typography.pxToRem(18),
        height: MuiTheme.typography.pxToRem(18),
        color: "#0080FF",
      },
      linkItem: {
        "&:last-child": { color: "#0080FF !important" },
        "&:hover": {
          "& a": {
            color: "#0080FF !important",
          },
        },
      },
      buttonText: {
        textTransform: "none",
        fontSize: MuiTheme.typography.pxToRem(15),
        marginRight: MuiTheme.typography.pxToRem(-10),
        padding: MuiTheme.mixins.paddingToRem(11, 30),
      },
    }),
    { name: "PageHeading" },
  ),
  withRouter,
)(function PageHeading({
  classes,
  title,
  history,
  match,
  inlineBreadcrumb,
  titleButton = null,
  backButtonUrl = null,
  customUrlResolver = () => {},
}) {
  const path = match.url.substr(1);
  const subPath = path.split("/");
  const { formatMessage } = useIntl(),
    shouldInlineBreadcrumb = inlineBreadcrumb && titleButton === null,
    context = React.useContext(PageHeadingContext);

  let filtered = [];
  if (subPath) {
    filtered = subPath.filter(function (el) {
      return el !== "";
    });
  }

  const $breadcrumb = (
    <Breadcrumb tag="nav" aria-label="breadcrumb">
      {filtered.map((sub, index) => {
        let customUrlArr = null;
        const customUrl = customUrlResolver(
          index,
          sub,
          index === filtered.length - 1,
        );

        if (customUrl) {
          customUrlArr = customUrl;
        } else {
          customUrlArr =
            context?.customUrlResolver?.(
              index,
              sub,
              index === filtered.length - 1,
            ) || null;
        }

        let label = null;
        let url = null;
        let clickable = true;

        if (Array.isArray(customUrlArr)) {
          if (typeof customUrlArr[3] === "boolean" && customUrlArr[3]) {
            return <></>;
          }
          url = customUrlArr[1];
          if (typeof customUrlArr[2] === "boolean") clickable = customUrlArr[2];
          label = customUrlArr[0];
        } else {
          label = customUrlArr;
        }

        const LinkComponent = clickable ? Link : "span";
        const linkProps = clickable
          ? {
              to: url ?? getUrlString(path, sub, index),
            }
          : {};
        return (
          <BreadcrumbItem
            key={index}
            className={clsx(classes.linkItem, !clickable && classes.disabled)}
            active={filtered.length === index + 1}
            tag={"span"}
          >
            <LinkComponent {...linkProps}>
              {label ??
                formatMessage({
                  id: index === 0 ? "url._home" : `url.${sub}`,
                })}
            </LinkComponent>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
  return (
    <div className={clsx(styles.PageHeading, "PageHeading-root")}>
      <div>
        <span className={styles.title}>{title}</span>
        {!shouldInlineBreadcrumb && $breadcrumb}
      </div>
    </div>
  );
});

PageHeading.propTypes = {
  customUrlResolver: PropTypes.func,
  inlineBreadcrumb: PropTypes.bool,
  title: PropTypes.node,
  titleButton: PropTypes.any,
};

PropTypes.defaultProps = {
  inlineBreadcrumb: false,
  titleButton: null,
};

export default PageHeading;
