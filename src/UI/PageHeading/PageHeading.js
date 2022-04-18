import React from "react";
import PropTypes from "prop-types";
import styles from "./PageHeading.module.scss";
import { withRouter } from "react-router";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import HomeIcon from "@material-ui/icons/Home";
import { useIntl } from "react-intl";
import clsx from "clsx";
import { compose } from "recompose";
import withStyles from "@material-ui/core/styles/withStyles";
import JRCard from "../JRCard/JRCard";
import { PageHeadingContext } from "./PageHeadingProvider";
import Link from "../Link";
import { ReactComponent as BackIcon } from "../../assets/icons/BackIcon.svg";
import { toRem } from "../../utils/measurements";
import IntlMessages from "../IntlMessages";

const getUrlString = (path, sub, index) => {
  if (index === 0) {
    return "/";
  } else {
    return "/" + path.split(sub)[0] + sub;
  }
};

const PageHeading = compose(
  withStyles(
    (theme) => ({
      root: {
        "& h2$title": {
          color: theme.palette.text.body,
        },
        "&$card": {
          padding: theme.mixins.paddingToRem(12, 30),
          paddingBottom: theme.mixins.paddingToRem(12),
        },
      },
      inlineBr: {
        height: theme.mixins.paddingToRem(70),
      },
      card: {},
      title: {},
      disabled: {},
      link: {
        display: "flex",
      },
      icon: {
        marginRight: theme.spacing(0.5),
        marginBottom: theme.spacing(0.2),
        width: theme.typography.pxToRem(18),
        height: theme.typography.pxToRem(18),
        color: "#0080FF",
      },
      linkItem: {
        "&:last-child": { color: "#0080FF !important" },
      },
      buttonText: {
        textTransform: "none",
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.typography.pxToRem(-10),
        padding: theme.mixins.paddingToRem(11, 30),
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
              {index === 0 && (
                <HomeIcon
                  // style={ marginBottom: "rem(13px)" }
                  className={classes.icon}
                />
              )}
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

  const backIcon = [
    <BackIcon
      style={{
        verticalAlign: "text-top",
        marginRight: 8 |> toRem,
        height: 16 |> toRem,
      }}
    />,
    <IntlMessages id="back" />,
  ];

  const rightContent =
    titleButton ??
    (typeof backButtonUrl === "string" ? (
      <Link to={backButtonUrl}>{backIcon}</Link>
    ) : (
      backButtonUrl === true && (
        <Link
          to={null}
          onClick={(e) => {
            e.preventDefault();
            history.goBack();
          }}
        >
          {backIcon}
        </Link>
      )
    ));

  return (
    <JRCard
      className={clsx(classes.root, styles.PageHeading, {
        [classes.inlineBr]: inlineBreadcrumb,
      })}
      classes={{ root: classes.card }}
    >
      <div>
        <h2 className={classes.title}>{title}</h2>
        {!shouldInlineBreadcrumb && $breadcrumb}
      </div>
      {shouldInlineBreadcrumb && <div>{$breadcrumb}</div>}
      {rightContent &&
        React.cloneElement(rightContent, {
          className: clsx(rightContent.props.className, classes.buttonText),
        })}
    </JRCard>
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
