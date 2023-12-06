import { createError, defineEventHandler } from 'h3'
import type { H3Event } from 'h3'
import { useRequestHeaders } from 'nuxt/app'
import { serverApi } from '../utils/serverApi'

// Remove the duplicate import statement
// import { serverApi } from '../utils/serverApi'

export default defineEventHandler(async (event: H3Event): Promise<any> => {
  const api = serverApi(event)

  try {
    // Do the actual request to the external API
    const courses = await api.get<any>('/courses', {
      retry: 11,
    })
    return courses
  }
  catch (err) {
    // console.error(err)
    return createError('An error occurred while fetching the data.')
  }
})
