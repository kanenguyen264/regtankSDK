import { AxiosRequestConfig, AxiosResponse } from "axios";

export class APIErrorMfaRequired extends Error {
  mfaToken: string;
}
export class APIErrorAccountLocked extends Error {}

export class APIErrorMfaSetup extends Error {
  optCode: string;
}

declare class APIService {
  constructor(instanceConfig: AxiosRequestConfig);

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R>;

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R>;

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R>;

  refresh<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R>;

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R>;
}

export default APIService;
