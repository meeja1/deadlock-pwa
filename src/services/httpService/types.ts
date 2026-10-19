import type { AxiosError, AxiosRequestConfig } from 'axios'

export interface IHttpService {
  get: <T>(url: string, options: AxiosRequestConfig) => Promise<THttpMethodReturns<T, AxiosError>>
}

export type THttpMethodReturns<T, E = AxiosError> = [T, null] | [null, E]
