import React from "react";

import lightTheme from "include-cp-theme";
import cpLng from "include-cp-intl";
import darkTheme from "include-crm-theme";
import crmLng from "include-crm-intl";
import {ThemeProvider} from "@material-ui/core/styles";
import {IntlProvider} from "react-intl";
import useThemeContext from "@theme/hooks/useThemeContext";
import PropTypes from "prop-types";
import CodeBlock from "@theme/CodeBlock";
import {compose} from "recompose";
import BrowserSimulator from "./BrowserSimulator/BrowserSimulator";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PromptProvider from "@protego/sdk/UI/PromptDialog/PromptContext";
import MomentUtils from "@date-io/moment";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";

const useStyles = makeStyles({
  codeBlock: {
    "& span": {
      fontSize: "93%",
    },
  },
});

const ProtegoCP = compose((Component) => ({withBrowser = false, ...props}) => {
  if (!withBrowser) return <Component {...props} />;

  return (
    <BrowserSimulator>
      <Component {...props} />
    </BrowserSimulator>
  );
})(({example = {}, children, noTitle = false}) => {
  const {isDarkTheme} = useThemeContext(),
    theme = isDarkTheme ? darkTheme : lightTheme,
    intlCtx = (isDarkTheme ? crmLng : cpLng).en,
    {default: Example, __source} = example,
    classes = useStyles();
  return (
    <IntlProvider locale={intlCtx.locale} messages={intlCtx.messages}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <ThemeProvider theme={theme}>
          <PromptProvider>
            {Example ? (
              <div className={"BrowserSimulator--playground"}>
                {!noTitle && (
                  <h4>Protego {isDarkTheme ? "CRM" : "CP"} Theme</h4>
                )}
                <Example />
              </div>
            ) : (
              <>
                {!noTitle && (
                  <h4>Protego {isDarkTheme ? "CRM" : "CP"} Theme</h4>
                )}
                {children}
              </>
            )}
          </PromptProvider>
        </ThemeProvider>
        {__source && (
          <div className={`mt-2 ${classes.codeBlock}`}>
            <CodeBlock className={"language-jsx"}>{__source}</CodeBlock>
          </div>
        )}
      </MuiPickersUtilsProvider>
    </IntlProvider>
  );
});

ProtegoCP.propTypes = {
  example: PropTypes.object,
  withBrowser: PropTypes.bool,
};

export default ProtegoCP;
