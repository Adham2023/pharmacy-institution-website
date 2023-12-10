export default defineNuxtPlugin(async () => {
  const client = useApi()
  const store = useAuthStore()
  try {
    const user = await client.get('/auth/profile')
    if (user)
      store.setUser(user)
  }
  catch (err) {
    console.error('No user found')
  }
})
