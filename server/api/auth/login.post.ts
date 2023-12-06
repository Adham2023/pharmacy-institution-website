import { H3Event } from 'h3'
import { serverApi } from '../utils/serverApi'

export default defineEventHandler(async (event) => {
  const api = serverApi(event)

  const { password, username } = await readBody(event)

  try {
    const res = await api.raw('/auth/login', 'POST', {
      body: {
        username,
        password,
      },
    })

    const cookies = (res?.headers.get('Set-Cookie') || (res?.headers.get('set-cookie') || '')).split(',')
    for (const cookie of cookies)
      appendHeader(event, 'set-cookie', cookie)

    return { message: 'success' }
  }
  catch (error) {
    throw createError('An error occurred while fetching data')
  }
})
