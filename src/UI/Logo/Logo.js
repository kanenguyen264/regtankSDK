import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
const Logo = withStyles(
  {},
  { name: "Logo" },
)(function Logo(props) {
  const { className, src, alt, title } = props;
  return <img className={className} src={src} alt={alt} title={title} />;
});

export default Logo;
