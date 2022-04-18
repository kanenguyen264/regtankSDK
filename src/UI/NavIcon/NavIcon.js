import React from "react";
import clsx from "clsx";

const NavIcon = function NavIcon({ className, icon: RenderedIcon }) {
  if (React.isValidElement(RenderedIcon))
    return React.cloneElement(RenderedIcon, { className });
  return (
    <i className={clsx("zmdi zmdi-hc-fw  zmdi-" + RenderedIcon, className)} />
  );
};

export default NavIcon;
