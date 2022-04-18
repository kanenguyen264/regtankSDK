import { isNil } from "lodash";
import { parse, stringify } from "query-string";


/**
 *
 * @param {string} s
 * @returns {string}
 */
export function capitalizeFirst(s: string): string {
  return s && s[0].toUpperCase() + s.slice(1).toLowerCase();
}
export function extractLetters(name: string): string {
  return name
    .toUpperCase()
    .split(" ")
    .filter((s) => s.indexOf(".") === -1)
    .map((s) => s[0])
    .slice(0, 2)
    .join("");
}

type ArgumentsType<T extends (...args: any[]) => any> = T extends (
  ...args: infer A
) => any
  ? A
  : never;
function nilFn<A extends any>(arg: A): A {
  return arg;
}
export const nullableCreator = (placeholder: any) => <
  Fn extends (...args: any[]) => any
>(
  fn: Fn = nilFn as Fn,
) => (...args: ArgumentsType<Fn>) => {
  if (isNil(args[0])) return placeholder;
  return fn(...args);
};

export const stringifyQuery = (params:any, addQueryPrefix = true) => {
  const parsed = stringify(params);
  if (parsed) {
    return `${addQueryPrefix ? "?" : ""}${parsed}`;
  }
  return "";
}

export const parseQuery = (str:string) => {
  return str ? parse(str) : {};
}
export const truncate = (str: string, n:number = 25) => {
  return (str.length > n) ? str.substr(0, n-1) + '\u2026' : str;
};
export const getFullName = (user) => {
  if (!user) {
    return "";
  }
  const firstName = get(user, "firstName") || "";
  const lastName = get(user, "lastName") || "";
  const middleName = get(user, "middleName") || "";
  return [firstName, middleName, lastName].join(" ");
};
