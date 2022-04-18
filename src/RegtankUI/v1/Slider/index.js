import React from "react";
import { styled, alpha } from '@mui/system';
import { Slider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ThemeColors from "../constants/ThemeColors";
import {toRem} from "../utils";

const StyledSlider = styled(Slider)(
    ({ theme }) => `
    color: ${theme.palette.mode === 'light' ? '#1976d2' : '#90caf9'};
    & .MuiSlider-thumb {
      position: absolute;
      width: 14px;
      height: 14px;
      margin-left: -6px;
      box-sizing: border-box;
      border-radius: 50%;
      outline: 0;
      border: 2px solid currentColor;
      background-color: #fff;
  
      :hover,
      &.Mui-focusVisible {
        box-shadow: 0 0 0 0.25rem ${alpha(
          theme.palette.mode === 'light' ? '#1976d2' : '#90caf9',
          0.15,
        )};
      }
  
      &.Mui-active {
        box-shadow: 0 0 0 0.25rem ${alpha(
          theme.palette.mode === 'light' ? '#1976d2' : '#90caf9',
          0.3,
        )};
      }
    }
  `,
  );

  const useStyles = makeStyles((theme) => ({
    SliderCustom: {
      "&.MuiSlider-root": {
        color: ThemeColors.primary,
        "& .MuiSlider-track": {
          backgroundColor: ThemeColors.primary,
          height: toRem(2),
        },
        "& .MuiSlider-rail": {
          backgroundColor: ThemeColors.borderBottom,
          borderColor: ThemeColors.borderBottom,
          height: toRem(2),
        },
        "& .MuiSlider-mark": {
          backgroundColor: ThemeColors.primary,
          width: 16,
          height: 16,
          borderRadius: toRem(20),
          opacity: 1,
          marginLeft: -12,
        },
        "& .MuiSlider-markLabel":{
        },
        "& .MuiSlider-thumbColorPrimary": {
          "&:focus, &:hover, &$active": {
            boxShadow: "inherit",
          },
        },
        "& .MuiSlider-valueLabel": {
          backgroundColor: ThemeColors.bgTooltipSlider,
          opacity: 1,
          "& .MuiSlider-valueLabelLabel": {
            color: ThemeColors.white,
          }
        },
      },
    },
  }));

  const sliderCustom = (props) => {
    const classes = useStyles();
    return <StyledSlider {...props} className={classes.SliderCustom} />
  }

  export default sliderCustom;