import enMessages from "../locales/en_US.json";
import base from "@protego/sdk/locales/en_US.json";

const EnLang = {
  messages: {
    ...base,
    ...enMessages
  },
  locale: "en-US"
};
export default EnLang;
