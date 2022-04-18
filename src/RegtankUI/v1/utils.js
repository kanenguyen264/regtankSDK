import { memoize } from "lodash";
import settings from './MuiTheme/settings';
import { get } from "lodash";

export const toRem = memoize(
  (number) => ((number * 1.0) / settings.htmlFontSize).toFixed(5) + "rem",
);
export const getFullName = (user) => {
  if (!user) {
    return "";
  }
  const firstName = get(user, "firstName") || "";
  const lastName = get(user, "lastName") || "";
  const middleName = get(user, "middleName") || "";
  return [firstName, middleName, lastName].join(" ");
};
export function capitalizeFirst(s: string): string {
  return s && s[0].toUpperCase() + s.slice(1).toLowerCase();
}