import { AxiosResponse } from "axios";
import { SupportTicketDto } from "../types";

export type ServiceResponse<T> = Promise<AxiosResponse<T>>;
export default interface AuthService {
  login(
    username: string,
    password: string
  ): ServiceResponse<{
    accessToken: string;
    refreshToken: string;
  }>;
  firstTimeVerify(
    verifyCode: string
  ): ServiceResponse<{
    otpAuthUri: string;
  }>;
  firstTimeActivate(
    verifyCode: string,
    password: string,
    mfaCode?: string
  ): ServiceResponse<any>;
  loginMfa(
    mfaToken: string,
    mfaCode: string
  ): ServiceResponse<{ access_token: string; refresh_token: string }>;
  refreshToken(
    refresh_token: string
  ): ServiceResponse<{ access_token: string; refresh_token: string }>;
  forgotPassword(email: string): ServiceResponse<{ statusCode: string }>;
  resetPasswordVerify(code: string): ServiceResponse<any>;
  resetPassword(
    code: string,
    password: string
  ): ServiceResponse<{ statusCode: string }>;
  sendSupportForm(body: SupportTicketDto): ServiceResponse<any>;
  renewFirstTimeCode(code: string): ServiceResponse<any>;
  getMfaInfoForSetup(code: string): ServiceResponse<any>;
  setupMfa(
    mfaCode: string,
    mfaKey: string,
    verifyCode: string
  ): ServiceResponse<any>;
}
