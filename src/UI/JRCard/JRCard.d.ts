import * as React from "react";
import {
  OverridableComponent,
  OverridableTypeMap,
  OverrideProps,
} from "@material-ui/core/OverridableComponent";

export interface JRCardTypeMap<P = {}, D extends React.ElementType = "div"> {
  props: P & {
    /**
     * Thu nhỏ lề của Card
     */
    dense?: boolean;
    headerLine?: boolean;
    disableShadow?: boolean;
    classes?: {
      root?: string;
      headerLine?: string;
    };
    header?: string | React.ReactNode;
    headerSize?: number;
    fullBody?: boolean;
  };
  defaultComponent: D;
  classKey: JRCardClassKey;
}

export interface ExtendJRCardTypeMap<M extends OverridableTypeMap> {
  props: M["props"] & Omit<JRCardTypeMap["props"], "classes">;
  defaultComponent: M["defaultComponent"];
  classKey: M["classKey"];
}

export type ExtendJRCard<M extends OverridableTypeMap> = ((
  props: { href: string } & OverrideProps<ExtendJRCardTypeMap<M>, "div">
) => JSX.Element) &
  OverridableComponent<ExtendJRCardTypeMap<M>>;

declare const JRCard: ExtendJRCard<JRCardTypeMap>;

export type JRCardProps<
  D extends React.ElementType = JRCardTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<JRCardTypeMap<P, D>, D>;

export type JRCardClassKey = "root" | "headerLine";

export default JRCard;
