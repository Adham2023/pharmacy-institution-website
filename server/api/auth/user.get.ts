/* eslint-disable no-console */
import { createError, defineEventHandler } from 'h3'
import type { H3Event } from 'h3'
import { serverApi } from '../utils/serverApi'

// Remove the duplicate import statement
// import { serverApi } from '../utils/serverApi'

export default defineEventHandler(async (event: H3Event): Promise<any> => {
  const api = serverApi(event)

  try {
    // Do the actual request to the external API
    const user = await api.get<any>('/auth/profile')

    return user
  }
  catch (err) {
    console.log(err)
    return createError('An error occurred while fetching the data.')
  }
})
