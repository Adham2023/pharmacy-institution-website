// import { H3Event } from 'h3'
import Client from '~/utils/api/client'

// server composable for calling the external API through Nitro Server
export function useApi() {
  const { apiUrl } = useRuntimeConfig().public

  const accessToken = useCookie('Authorization')
  // console.log('accessToken', accessToken.value)
  const client = new Client(apiUrl as string, {
    headers: {
      Authorization: `Bearer ${accessToken.value}`,
    } as HeadersInit,
  })

  return client
}
