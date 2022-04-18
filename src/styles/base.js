export const baseStyles = (theme) => {
  if (!theme) {
    return {};
  }

  const responsiveFontSize = {};

  if (theme.customBreakPoints && theme.responsiveFontSize) {
    for (var key in theme.customBreakPoints) {
      if (theme.responsiveFontSize.hasOwnProperty(key)) {
        let bp = theme.customBreakPoints[key];
        responsiveFontSize[theme.breakpoints.up(bp)] = {
          fontSize: theme.responsiveFontSize[key],
        };
      }
    }
  }
  const body = {};
  if(theme.typography?.fontFamily) {
    body.fontFamily = theme.typography.fontFamily;
  }
  return {
    "@global": {
      // MUI typography elements use REMs, so you can scale the global
      // font size by setting the font-size on the <html> element.
      ":root": {
        fontSize: theme.htmlFontSize,
        ...responsiveFontSize,
      },
      //temp
      "body": {
        ...body,
      }
    },
  };
};
