import React from "react";
import { List } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import IntlMessages from "../IntlMessages";
import NavIcon from "../NavIcon/NavIcon";
import styles from "./NavMenuItem.module.scss";
import { compose } from "recompose";
import { NavMenuItemBaseStyles } from "../NavMenuItemBase/NavMenuItemBase";

const NavMenuItem = compose(
  NavMenuItemBaseStyles,
  withStyles(
    (theme) => ({
      root: {
        "& $text": {
          "&:before,&:after": {
            visibility: "visible",
            content: '""',
            display: "block",
            position: "absolute",
            zIndex: 0,
          },
          "&:focus, &:hover, &.active": {
            "& >*": {
              zIndex: 1,
              position: "relative",
            },
            "&:before": {
              top: 0,
              bottom: 0,
              left: 0,
              width: `${theme.props.AppLayout.sidebarWidth - 25}px`,
              backgroundColor: theme.palette.sideBar.bgActive,
              borderTopRightRadius: 500,
              borderBottomRightRadius: 500,
            },
          },
          "&.active:after": {
            top: "50%",
            left: `${theme.props.AppLayout.sidebarWidth - 50}px`,
            width: "0.588rem",
            height: "0.588rem",
            backgroundColor: "white",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
          },
        },
      },
      text: {},
      icon: {},
    }),
    { name: "NavMenuItem" },
  ),
)((props) => {
  const { name, icon, link, classes, ...others } = props;
  return (
    <div className={clsx(classes.root, "nav-menu-item")}>
      <NavLink
        className={clsx(classes.text, styles.NavMenuLink)}
        to={link}
        {...others}
      >
        {/* Display an icon if any */}
        {!!icon && <NavIcon icon={icon} className={classes.icon} />}
        <span className="nav-text">
          <IntlMessages id={name} />
        </span>
      </NavLink>
    </div>
  );
});

export default NavMenuItem;
