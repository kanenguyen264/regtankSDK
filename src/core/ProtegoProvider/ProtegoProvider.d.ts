import * as React from "react";
import { RouteComponentProps } from "react-router";
import APIService from "../APIService";
import AuthService from "../AuthService";

export interface PPAuthComponentDeclaration {
  path: string;
  component?: React.ComponentType;
  render?: (props: RouteComponentProps<any>) => React.ReactNode;
}

export interface PPAuthContext {
  SignIn: PPAuthComponentDeclaration;
  FirstTime: PPAuthComponentDeclaration;
  ForgotPassword: PPAuthComponentDeclaration;
  ChangePassword: PPAuthComponentDeclaration;
  RequestAccount: PPAuthComponentDeclaration;
  [key: string]: PPAuthComponentDeclaration;
}

export interface ProtegoProviderProps {
  /**
   * Inject required sharing service inside SDK
   */
  services: {
    AuthService: AuthService;
    APIService: APIService;
    [key: string]: any;
  };
  userTimeOut: any;
  Client: "CP" | "CRM";
  version: Object;
}

export const ProtegoContext: React.Context<ProtegoProviderProps>;

export default function ProtegoProvider(
  props: ProtegoProviderProps
): JSX.Element;
