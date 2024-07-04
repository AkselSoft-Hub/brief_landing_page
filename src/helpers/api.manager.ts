import axios, { AxiosHeaders, InternalAxiosRequestConfig } from 'axios'

import { PUBLIC_API_URLs } from '@/lib/constants/apis'
import { configuration } from '@/lib/constants/config'

export function fillHeaders(headers: AxiosHeaders) {
  headers['Authorization'] = `Bearer ${window.localStorage.getItem('access-token')}`

  return headers
}

const apiManager = axios.create({
  baseURL: configuration.API_URL,
})

apiManager.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const requestUrl = config.url ?? ''
    if (!PUBLIC_API_URLs.find((url: string) => url.includes(requestUrl))) {
      fillHeaders(config.headers)
    }
    return config
  },
  (err) => err,
)

apiManager.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    if (!err.response) {
      console.error('HTTP_ERROR', 'network error!')
      return err
    }
    console.error('HTTP_ERROR', err.response?.data?.message || err.message)
    return err
  },
)

export default apiManager
