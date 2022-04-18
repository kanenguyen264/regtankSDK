import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const SearchBoxPanel = withStyles(
  (theme) => ({
    root: {
      borderRadius: 5,
      width: 400,
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.26)",
      "& .MuiCircularProgress-root": {
        marginLeft: "calc(50% - 1rem)",
      },
      "& .MuiList-root": {
        "&:first-child": {
          paddingTop: 0,
        },
        paddingBottom: theme.typography.pxToRem(12.3),
      },
      "& .MuiListSubheader-root": {
        fontSize: "1rem",
        color: theme.palette.text.body,
        fontWeight: "400",
        padding: 0,
        lineHeight: "unset",
        marginBottom: theme.typography.pxToRem(12),
      },
      "& .MuiListItem-root": {
        paddingLeft: 0,
        paddingRight: 0,
      },
      "& .MuiListItemText-root": {
        marginTop: 0,
        marginBottom: theme.typography.pxToRem(2),
        paddingLeft: theme.typography.pxToRem(15),
        lineHeight: 23 / 17,
      },
    },
    content: {
      padding: `${theme.typography.pxToRem(13.6)} ${theme.typography.pxToRem(
        20,
      )} !important`,
    },
  }),
  { name: "SearchBoxPanel" },
)(function SearchBoxPanel(props) {
  const { classes, children } = props;
  return (
    <Card className={clsx(classes.root)}>
      <CardContent className={classes.content}>{children}</CardContent>
    </Card>
  );
});

export default SearchBoxPanel;
