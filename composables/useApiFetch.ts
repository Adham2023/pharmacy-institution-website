/* eslint-disable node/prefer-global/process */
import type { UseFetchOptions } from 'nuxt/app'

export function useApiFetch<T>(path: string, options: UseFetchOptions<T> = {}) {
  let headers: any = {}

  if (process.server) {
    headers = {
      ...useRequestHeaders(),
    }
  }

  return useFetch(`https://api.pharma-study.uz${path}`, {
    credentials: 'include',
    ...options,
    watch: false,
    headers: {
      ...headers,
      ...options?.headers,
    },
  })
}
