import { generatePath as baseGeneratePath } from "react-router";
import { stringify } from "qs";

export function generatePath(
  pattern: string,
  params?: { [paramName: string]: string | number | boolean | undefined },
  query?: {
    [paramName: string]: string | number | boolean | undefined;
  },
): string {
  return (
    baseGeneratePath(pattern, params) +
    (query ? stringify(query, { addQueryPrefix: true }) : "")
  );
}
