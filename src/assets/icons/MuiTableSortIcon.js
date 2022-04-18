import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import clsx from "clsx";

const MuiTableSortIcon = withStyles(
  (theme) => ({
    root: {
      marginLeft: theme.typography.pxToRem(5),
      height: theme.typography.pxToRem(12),
      minHeight: theme.typography.pxToRem(12),
      maxHeight: theme.typography.pxToRem(8),
      width: theme.typography.pxToRem(8),
      minWidth: theme.typography.pxToRem(8),
      maxWidth: theme.typography.pxToRem(8),
      "& $asc, $desc": {
        fill: theme.palette.text.secondary,
        fillOpacity: 0.45,
      },
      ".MuiTableSortLabel-active &": {
        "&.MuiTableSortLabel-iconDirectionAsc $asc": {
          fillOpacity: 1,
        },
        "&.MuiTableSortLabel-iconDirectionDesc $desc": {
          fillOpacity: 1,
        },
      },
    },
    asc: {},
    desc: {},
  }),
  { name: "MuiTableSortIcon" },
)(function MuiTableSortIcon({ classes, className }) {
  return (
    <svg
      className={clsx(classes.root, className)}
      xmlns="http://www.w3.org/2000/svg"
      width="6.651"
      height="11.047"
      viewBox="0 0 6.651 11.047"
    >
      <path
        id="Shape"
        d="M.081,3.744,3.1.105a.317.317,0,0,1,.472,0l3,3.638a.316.316,0,0,1-.236.527H.316A.316.316,0,0,1,.081,3.744Z"
        transform="translate(0 0)"
        className={classes.asc}
      />
      <path
        id="Shape-2"
        data-name="Shape"
        d="M.081-3.744,3.1-.105a.317.317,0,0,0,.472,0l3-3.638a.316.316,0,0,0-.236-.527H.316A.316.316,0,0,0,.081-3.744Z"
        transform="translate(0 11.047)"
        className={classes.desc}
      />
    </svg>
  );
});

export default MuiTableSortIcon;
