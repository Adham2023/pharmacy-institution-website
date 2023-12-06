import type { H3Event } from 'h3'
import { appendResponseHeader } from 'h3'
import type { UseFetchOptions } from 'nuxt/app'

export async function fetchWithCookie(event: H3Event, url: string) {
  /* Get the response from the server endpoint */
  const res = await $fetch.raw(`${url}`, {
    baseURL: 'https://api.pharma-study.uz',
    method: 'GET',
  })
  /* Get the cookies from the response */
  const cookies = (res.headers.get('set-cookie') || '').split(',')
  /* Attach each cookie to our incoming Request */
  for (const cookie of cookies)
    appendResponseHeader(event, 'set-cookie', cookie)

  /* Return the data of the response */
  return res._data
}
