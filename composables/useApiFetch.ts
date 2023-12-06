/* eslint-disable node/prefer-global/process */
import type { UseFetchOptions } from 'nuxt/app'

export function useApiFetch<T>(path: string, options: UseFetchOptions<T> = {}) {
  let headers: any = {}

  if (process.server) {
    headers = {
      ...useRequestHeaders(['cookies', 'referer']),
    }
  }
  // console.log('useRequestHeaders', useRequestHeaders(['cookie', 'referer']))

  return useFetch(`http://localhost:2000${path}`, {
    credentials: 'include',
    ...options,
    watch: false,
    headers: {
      ...options?.headers,
      ...headers,
    },
  })
}
