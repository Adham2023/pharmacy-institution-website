import type { H3Event } from 'h3'
import Client from '~/utils/api/client'

export function serverApi(event: H3Event) {
  const { baseUrl } = useRuntimeConfig().public

  // eslint-disable-next-line no-console
  console.log('apiUrl', baseUrl)

  const accessToken = getCookie(event, 'Authorization')

  // eslint-disable-next-line no-console
  console.log('accessToken', accessToken)

  const client = new Client(baseUrl as string, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    } as HeadersInit,
  })

  return client
}
