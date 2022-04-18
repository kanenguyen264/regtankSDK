import { toRem } from "../utils";
import ThemeColors from "../constants/ThemeColors";

const typography = {
  styleOverrides: {
    h3: {
      fontSize: toRem(32),
      fontWeight: 600,
    },
    h4: {
      fontSize: toRem(24),
      fontWeight: 500,
    },
    h5: {
      fontSize: toRem(20),
      fontWeight: 600,
    },
    h6: {
      fontSize: toRem(18),
      fontWeight: 500,
    },
    titleForm: {
      fontSize: toRem(18),
      fontWeight: 600,
      color: ThemeColors.mainBlackText,
    },
    titleForm2: {
      fontSize: toRem(18),
      fontWeight: 500,
      color: ThemeColors.mainBlackText,
    },
    title: {
      fontSize: toRem(16),
      fontWeight: 600,
      color: ThemeColors.mainBlackText,
    },
    Subtitle1: {
      fontSize: toRem(16),
      fontWeight: 500,
      color: ThemeColors.mainBlackText,
    },
    Subtitle2: {
      fontSize: toRem(14),
      fontWeight: 500,
      color: ThemeColors.grayText,
    },
    Subtitle3: {
      fontSize: toRem(14),
      fontWeight: 600,
    },
    Subtitle4: {
      fontSize: toRem(14),
      fontWeight: 500,
      color: ThemeColors.mainBlackText,
    },
    Subtitle5: {
      fontSize: toRem(14),
      fontWeight: 500,
    },
    body: {
      fontSize: toRem(16),
      fontWeight: 400,
    },
    body1: {
      fontSize: toRem(14),
      fontWeight: 400,
    },
    textLabel: {
      fontSize: toRem(14),
      fontWeight: 400,
      color: ThemeColors.default,
    },
    textLabel2: {
      fontSize: toRem(14),
      fontWeight: 400,
      color: ThemeColors.mainBlackText,
    },
    body3: {
      fontSize: toRem(16),
      fontWeight: 400,
      color: ThemeColors.mainBlackText,
    },
    small1: {
      fontSize: toRem(12),
      fontWeight: 500,
    },
    small2: {
      fontSize: toRem(12),
      fontWeight: 400,
      color: ThemeColors.mainBlackText,
    },
    small3: {
      fontSize: toRem(11),
      fontWeight: 400,
    },
    button: {
      fontSize: toRem(14),
      fontWeight: 600,
    },
    initials: {
      fontSize: toRem(13),
      fontWeight: 600,
    },
    status: {
      fontSize: toRem(15),
      fontWeight: 600,
    },
    labelFieldForm: {
      fontSize: toRem(12),
      fontWeight: 500,
      color: ThemeColors.grayText,
    },
    headerChildTable: {
      fontSize: toRem(14),
      color: ThemeColors.mainBlackText,
      fontWeight: 500,
      opacity: 0.9,
    },
    titleCard: {
      fontSize: toRem(18),
      fontWeight: 600,
      color: ThemeColors.mainBlackText,
      opacity: 0.9,
    },
    button2: {
      fontSize: toRem(14),
      fontWeight: 600,
      color: ThemeColors.defaultLight,
    },
    subtitleGray: {
      fontSize: toRem(14),
      fontWeight: 400,
      color: ThemeColors.grayText,
    },
    h3MainBlack: {
      fontSize: toRem(26),
      fontWeight: 500,
      color: ThemeColors.mainBlackText,
    },
    smallDefault: {
      fontSize: toRem(12),
      fontWeight: 500,
      color: ThemeColors.default,
    },
    labelFieldBlack: {
      fontSize: toRem(12),
      fontWeight: 500,
      color: ThemeColors.mainBlackText,
    },
    smallGrayDefault: {
      fontSize: toRem(12),
      fontWeight: 400,
      color: ThemeColors.grayText,
    },
    subtitleGraySemiBold: {
      fontSize: toRem(14),
      fontWeight: 600,
      color: ThemeColors.grayText,
    },
  },
};

export default typography;
