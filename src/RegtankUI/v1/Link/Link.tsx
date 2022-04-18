import React from "react";
import MuiLink, { LinkProps as BaseMuiLinkProps } from "@material-ui/core/Link";
import {
  Link as RouterLink,
  LinkProps as BaseRouterLinkProps,
} from "react-router-dom";

interface LinkProps
  extends Omit<BaseMuiLinkProps, "component">,
    Pick<BaseRouterLinkProps, "to"> {
  replace?: boolean;
}

const Link = React.forwardRef(function Link(
  props: LinkProps,
  ref,
): JSX.Element {
  //@ts-ignore
  return <MuiLink ref={ref} component={RouterLink} {...props} />;
});

export default Link;
