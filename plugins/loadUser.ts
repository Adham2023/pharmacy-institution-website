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
        auth.user = user as IUser
      }
    }
  }
  catch (error) {
    console.error(error)
  }
})
