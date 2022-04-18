import * as React from "react";
import { injectIntl, IntlProvider } from "react-intl";

function flatten(obj: any, prefix: string = ""): any {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (typeof value === "object") {
      return {
        ...acc,
        ...flatten(value, key),
      };
    } else
      return {
        ...acc,
        [`${prefix}${prefix.length > 0 ? "." : ""}${key}`]: value,
      };
  }, {});
}

const withLocalIntl = (entries: any) => <P extends {}>(
  Component: React.ComponentType<P>,
) => {
  return injectIntl(function WithLocalIntl({ intl, ...props }) {
    const localMessages = React.useMemo(() => {
      return flatten(entries[intl.locale]);
    }, [intl.locale]);
    const nestedMessages = {
      ...intl.messages,
      ...localMessages,
    };
    return (
      <IntlProvider locale={intl.locale} messages={nestedMessages}>
        {React.createElement(Component, props as P)}
      </IntlProvider>
    );
  });
};

export default withLocalIntl;
