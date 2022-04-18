import withStyles from "@material-ui/core/styles/withStyles";

export const NavMenuItemBaseStyles = withStyles(
  (theme) => ({
    root: {
      position: "relative",
      "& $icon": {
        marginRight: theme.typography.pxToRem(8),
        width: theme.typography.pxToRem(24),
        height: theme.typography.pxToRem(24),
        textAlign: "center",
        fontSize: theme.typography.pxToRem(14),
        fill: "red",
      },
      "& $text": {
        "&:focus, &:hover, &.active": {
          color: theme.palette.sideBar.textActive,
          "& svg": {
            fill: theme.palette.sideBar.textActive,
          },
          "& .nav-text": {
            color: theme.palette.sideBar.textActive
          }
        },
        color: theme.palette.sideBar.text,
        fontSize: theme.typography.pxToRem(14),
        padding: theme.mixins.paddingToRem(12, 16, 12, 16),
        letterSpacing: theme.typography.pxToRem(0.2),
        lineHeight: theme.typography.pxToRem(18),
        display: "block",
        textDecoration: "none",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
    },
    text: {},
    icon: {},
  }),
  { name: "NavMenuItemBase" },
);