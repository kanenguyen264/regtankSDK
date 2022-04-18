import React, { useEffect } from "react";
import { withStyles, makeStyles } from "@mui/styles";
import { compose } from "recompose";
import { Dropdown, DropdownToggle } from "reactstrap";
import Badge from '@mui/material/Badge';
import { ReactComponent as NotificationICon } from "./IcNotification.svg";
import { ReactComponent as NotificationIConActive } from "./IcNotificationActive.svg";
import PropTypes from "prop-types";
import clsx from "clsx";
import DropdownMenu from "reactstrap/es/DropdownMenu";
import IntlMessages from "../IntlMessages";
import { Divider } from "@mui/material";
import {toRem} from "../utils"
import ThemeColors from "../constants/ThemeColors";
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
        fontSize:toRem(21),
        color: ThemeColors.bodyText,
        lineHeight: 28 / 21,
        padding: `${toRem(20.4)} ${toRem(30)}`,
        paddingBottom: toRem(18.5),
      },
      menuContent: {
        "& > * > *:first-child": {
          paddingLeft: toRem(30),
          paddingRight: toRem(20.5),
        },
      },
      icon: {
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        height:"100%",
        width:"100%",
      },
      badge: {
        width: toRem(25),
        minWidth: toRem(25),
        height: toRem(25),
        padding: 0,
        borderRadius: "50%",
        fontSize: toRem(10),
        left:3
      },
      wrapperCircle:{
        width: toRem (36),
        height:toRem (36),
        backgroundColor:"#ededed",
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center",
      }
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
        className={`dropdown-menu-notification quick-menu ${classes.wrapperCircle}`}
        isOpen={open}
        toggle={() => setOpen(!open)}
      >
        <DropdownToggle
          tag="span"
          data-toggle="dropdown"
        >
           <div className={classes.icon}>
          <Badge
            badgeContent={count}
            color="error"
            classes={{ badge: classes.badge }}
          >
            <NotificationICon/>
          </Badge>
          </div>
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
