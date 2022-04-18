import React from "react";
import { isNil, isEmpty } from "lodash";
export interface NullableProps<C extends React.ElementType> {
  component?: C | null;
  valueProp?: string;
  children: React.ReactNode | string | number | null;
  placeholder?: React.ReactNode;
  [key: string]: any;
}

function Nullable<C extends React.ElementType>(
  props: NullableProps<C>,
): JSX.Element {
  const {
    component: Component = null,
    valueProp = "children",
    children,
    placeholder = "-",
    ...others
  } = props;
  if (
    isNil(children) ||
    (typeof children === "object" && isEmpty(children)) ||
    (typeof children === "string" && children.length === 0)
  )
    return placeholder as JSX.Element;
  if (Component === null) return children as JSX.Element;
  const passedProps = {
    [valueProp]: children,
    ...others,
  };
  // @ts-ignore
  return React.createElement(Component, passedProps);
}

export default Nullable;
