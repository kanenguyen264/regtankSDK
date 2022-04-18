import React from "react";
import { FormattedMessage, injectIntl } from "react-intl";

const InjectMassage = (props: any) => <FormattedMessage {...props} />;
const IntlMessages = injectIntl(InjectMassage, {
  // @ts-ignore
  withRef: false,
});

export default IntlMessages;
