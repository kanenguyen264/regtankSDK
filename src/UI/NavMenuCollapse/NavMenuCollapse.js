import React, { useEffect } from "react";
import { Collapse, List, ListItem } from "@material-ui/core";
import IconExpandLess from "@material-ui/icons/ExpandLess";
import IconExpandMore from "@material-ui/icons/ExpandMore";
import { useHistory } from "react-router-dom";

import IntlMessages from "../IntlMessages";
import NavMenuItem from "../NavMenuItem/NavMenuItem";
import NavIcon from "../NavIcon/NavIcon";
import { compose } from "recompose";
import { NavMenuItemBaseStyles } from "../NavMenuItemBase/NavMenuItemBase";
import clsx from "clsx";
import withStyles from "@material-ui/core/styles/withStyles";

const svgWidthEm = 1.28571429;

const NavMenuCollapse = compose(
  NavMenuItemBaseStyles,
  withStyles((theme) => ({
    root: {},
    text: {
      position: "relative",
    },
    toggleIcon: {
      position: "absolute",
      right: `calc(50px - ${svgWidthEm / 2}em)`,
      top: "calc(50% - 0.5em)",
      marginRight: "0 !important",
    },
    icon: {},
  })),
)((props) => {
  const history = useHistory();
  const {
    classes,
    name,
    icon,
    children = [],
    isAlwaysOpen = false,
    ...others
  } = props;
  const isExpandable = children && children.length > 0;
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (isUrlInChildren(props, history.location.pathname)) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [props, history]);

  function handleClick() {
    setOpen(!open);
  }

  history.listen((location, action) => {
    if (isUrlInChildren(props, location.pathname)) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  });

  /**
   * Check if the given url can be found
   * in one of the given parent's children
   *
   * @param parent
   * @param url
   * @returns {boolean}
   */
  function isUrlInChildren(parent, url) {
    if (!parent.children) {
      return false;
    }

    for (let i = 0; i < parent.children.length; i++) {
      if (parent.children[i].children) {
        if (isUrlInChildren(parent.children[i], url)) {
          return true;
        }
      }

      if (parent?.children[i]?.link === url) {
        return true;
      }
    }

    return false;
  }

  const checkParentActive = (children = null, url = "") => {
    if (children && url) {
      for (let i = 0; i < children.length; i++) {
        if (children[i]?.link === url) {
          return "parent-active";
        }
      }
    }
    return "";
  };

  const MenuCollapse = (
    <div
      className={clsx(
        "nav-menu-item nav-collapse-btn",
        classes.text,
        checkParentActive(props?.children, history?.location?.pathname),
      )}
      onClick={handleClick}
      {...others}
    >
      {/* Display an icon if any */}
      {!!icon && <NavIcon icon={icon} className={classes.icon} />}
      <span className="nav-text">
        <IntlMessages id={name} />
      </span>
      {/* Display the expand menu if the item has children */}
      {isExpandable && !open && (
        <IconExpandMore className={clsx("nav-arrow", classes.toggleIcon)} />
      )}
      {isExpandable && open && (
        <IconExpandLess className={clsx("nav-arrow", classes.toggleIcon)} />
      )}
    </div>
  );

  const MenuItemChildren = isExpandable ? (
    <Collapse
      className="nav-collapse-item"
      in={open || isAlwaysOpen}
      timeout="auto"
    >
      <List component="div" disablePadding>
        {children.map((item, index) => {
          switch (item.type) {
            case "section":
              return <NavSection {...item} key={index} />;
            case "collapse":
              return <NavMenuCollapse {...item} key={index} />;
            case "item":
              return <NavMenuItem {...item} key={index} />;
          }
        })}
      </List>
    </Collapse>
  ) : null;

  return (
    <div
      className={clsx(
        `nav-collapse ${open || isAlwaysOpen ? "open" : ""}`,
        classes.root,
      )}
    >
      {MenuCollapse}
      {MenuItemChildren}
    </div>
  );
});

export default NavMenuCollapse;
