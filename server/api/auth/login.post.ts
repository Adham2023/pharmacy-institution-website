import type { H3Event } from 'h3'
import { serverApi } from '../utils/serverApi'

export default defineEventHandler(async (event: H3Event) => {
  const api = serverApi(event)
  const { password, username } = await readBody(event)

  try {
    // Do the actual request to the external API
    const res = await api.raw('/auth/login', 'POST', {
      body: {
        password,
        username,
      },
    })

    const cookies = (res?.headers.get('set-cookie') || '').split(',')

    for (const cookie of cookies)
      appendHeader(event, 'set-cookie', cookie)

    return { message: 'success' }
  }
  catch (err) {
    throw createError('An error occurred while fetching the data.')
  }
})
