import type { AxiosError, AxiosRequestConfig } from 'axios'
import type { IHttpService, THttpMethodReturns } from './types'
import { axiosInstance } from '@/config/axios'

export class HttpService implements IHttpService {
  constructor(
    private readonly httpInstance = axiosInstance,
  ) { }

  public async get<T>(url: string, options?: AxiosRequestConfig): Promise<THttpMethodReturns<T, AxiosError>> {
    try {
      const { data } = await this.httpInstance.get<T>(url, options)
      return [data, null]
    }
    catch (e: unknown) {
      return [null, e as AxiosError]
    }
  }
}

export const httpService = new HttpService()
