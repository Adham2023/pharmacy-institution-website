/* eslint-disable no-console */
export default defineNuxtPlugin(async () => {
  try {
    const cookie = useCookie('Authorization')
    if (cookie.value) {
      const api = useApi()
      const auth = useAuthStore()
      if (!auth.isLoggedIn) {
        const user = await api.get<IUser>('/auth/profile', {
          headers: {
            Authorization: `Bearer ${cookie.value}`,
          },
        })
        console.log('user', user)
        auth.user = user as IUser
      }
    }
  }
  catch (error) {
    console.error(error)
  }
})
