import * as React from "react";
import { PageHeadingContextProps } from "./PageHeadingProvider";

export interface PageHeadingProps extends PageHeadingContextProps {
  title: React.ReactNode;
  inlineBreadcrumb?: boolean;
  titleButton?: any;
  backButtonUrl?: string | boolean;
}

export default function PageHeading(props: PageHeadingProps): JSX.Element;
