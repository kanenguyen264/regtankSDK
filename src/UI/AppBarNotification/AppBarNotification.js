import React, { useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import { Dropdown, DropdownToggle } from "reactstrap";
import Badge from "@material-ui/core/Badge";
import { ReactComponent as NotificationICon } from "./IcNotification.svg";
import PropTypes from "prop-types";
import clsx from "clsx";
import DropdownMenu from "reactstrap/es/DropdownMenu";
import IntlMessages from "../IntlMessages";
import { Divider } from "@material-ui/core";

const AppBarNotification = compose(
  withStyles(
    (theme) => ({
      menu: {
        border: "none",
        "&.dropdown-menu": {
          padding: 0,
          backgroundColor: (props) => props.backgroundColor,
          "&:before,&:after": {
            borderBottomColor: (props) => `${props.backgroundColor} !important`,
          },
        },
      },
      menuHeader: {
        fontSize: theme.typography.pxToRem(21),
        color: theme.palette.text.body,
        lineHeight: 28 / 21,
        padding: `${theme.typography.pxToRem(20.4)} ${theme.typography.pxToRem(
          30,
        )}`,
        paddingBottom: theme.typography.pxToRem(18.5),
      },
      menuContent: {
        "& > * > *:first-child": {
          paddingLeft: theme.typography.pxToRem(30),
          paddingRight: theme.typography.pxToRem(20.5),
        },
      },
      icon: {
        width: theme.typography.pxToRem(17.53),
        height: theme.typography.pxToRem(21.36),
      },
      badge: {
        width: theme.typography.pxToRem(18),
        minWidth: theme.typography.pxToRem(18),
        height: theme.typography.pxToRem(18),
        padding: 0,
        borderRadius: "50%",
        fontSize: theme.typography.pxToRem(12),
      },
    }),
    { name: "AppBarNotification" },
  ),
)(
  React.forwardRef(function AppBarNotification(props, ref) {
    const { classes, count, children, onOpen } = props;
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
      open && onOpen && onOpen();
      // eslint-disable-next-line
    }, [open]);

    return (
      <Dropdown
        className="dropdown-menu-notification quick-menu"
        isOpen={open}
        toggle={() => setOpen(!open)}
      >
        <DropdownToggle
          className="d-inline-block ml-2 mr-2"
          tag="span"
          data-toggle="dropdown"
        >
          <Badge
            badgeContent={count}
            color="error"
            classes={{ badge: classes.badge }}
          >
            <NotificationICon className={classes.icon} />
          </Badge>
        </DropdownToggle>
        <DropdownMenu className={clsx("mdc-elevation--z2", classes.menu)}>
          <div className={clsx(classes.menuHeader, classes.bordered)}>
            <IntlMessages id="appNotification.title" />
          </div>
          <Divider />
          <div ref={ref} className={classes.menuContent}>
            {children}
          </div>
        </DropdownMenu>
      </Dropdown>
    );
  }),
);

AppBarNotification.propTypes = {
  count: PropTypes.number,
};
AppBarNotification.defaultProps = {
  count: 4,
};

export default AppBarNotification;
