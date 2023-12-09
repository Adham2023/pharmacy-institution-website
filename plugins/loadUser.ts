export default defineNuxtPlugin(async () => {
  try {
    const auth = useAuthStore()
    if (!auth.isLoggedIn)
      auth.getUser()
  }
  catch (error) {
    console.error(error)
  }
})
