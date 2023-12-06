export default defineNuxtPlugin(async () => {
  try {
    const auth = useAuthStore()
    if (!auth.isLoggedIn)
      await auth.getUser()
  }
  catch (error) {
    console.error(error)
  }
})
