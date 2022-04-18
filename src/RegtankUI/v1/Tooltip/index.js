import React from "react";
import { makeStyles } from "@mui/styles";
import { Tooltip as MuiTooltip } from "@mui/material";
import { toRem } from "../utils";
import ThemeColors from "../constants/ThemeColors";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  root: {
    zIndex: 15,
    "&.MuiTooltip-tooltip": {
      background: `${ThemeColors.defaultDark}`,
      borderRadius: "8px",
      padding: `${toRem(12)}`,
      fontWeight: 400,
      fontSize: toRem(14),
      lineHeight: toRem(12),
      color: "#FFFFFF",
      lineHeight: '20px',
      letterSpacing: "0.1px",
    },

    "& .MuiTooltip-arrow": {
      opacity: "1 !important",
      width: "0",
      height: "0",
      borderStyle: "solid",
      "&:before": {
        display: "none",
      },
    },
  },
  popper: {
    zIndex: "3000 !important",
    "&[data-popper-placement*='top'] .MuiTooltip-arrow": {
      borderWidth: `${toRem(8)} ${toRem(8)} 0 ${toRem(8)}`,
      borderColor: `${ThemeColors.defaultDark} transparent transparent transparent`,
      marginBottom: `${toRem(-7)} !important`,
    },
    "&[data-popper-placement*='top-start'] ": { 
      "& .MuiTooltip-arrow":{
        left: "5% !important",
      },
      "& .MuiTooltip-tooltipPlacementTop": {
        right: "6% !important",
      }
    },
    "&[data-popper-placement*='top-end'] ": {
      "& .MuiTooltip-arrow":{
        left: "-5% !important",
      },
      "& .MuiTooltip-tooltipPlacementTop": {
        left: "6% !important",
      }
    },
    "&[data-popper-placement*='bottom-start'] ": {
      "& .MuiTooltip-arrow":{
        left: "5% !important",
      },
      "& .MuiTooltip-tooltipPlacementTop": {
        right: "6% !important",
      }
    },
    "&[data-popper-placement*='bottom'] .MuiTooltip-arrow": {
      borderWidth: `0 ${toRem(8)} ${toRem(8)} ${toRem(8)}`,
      borderColor: `transparent transparent ${ThemeColors.defaultDark} transparent`,
      marginTop: `${toRem(-7)} !important`,
    },
  },
}));

const Tooltip = React.forwardRef(function Tooltip({ placement, classes,...props }) {
  const styles = useStyles();
  return (
    <MuiTooltip
      placement={placement ? placement : "top-end"}
      arrow
      classes={{
        tooltip: styles.root,
        popper: styles.popper,
        ...classes
      }}
      {...props}
    >
      {props.children}
    </MuiTooltip>
  );
});

export default Tooltip;
