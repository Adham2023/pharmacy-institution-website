/* eslint-disable no-console */
import type { H3Event } from 'h3'
import Client from '~/utils/api/client'

export function serverApi(event: H3Event) {
  const { baseUrl } = useRuntimeConfig().public

  // console.log('apiUrl', baseUrl)

  const accessToken = getCookie(event, 'Authorization')

  console.log('accessToken', accessToken)

  const client = new Client(baseUrl as string, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    } as HeadersInit,
  })

  return client
}
