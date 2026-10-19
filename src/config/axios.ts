import axios from 'axios'
import { BASE_API } from '@/constants/baseApi'

export const axiosInstance = axios.create({
  baseURL: BASE_API,
})
