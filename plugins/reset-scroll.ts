export default defineNuxtPlugin(() => {
  const router = useRouter()
  router.afterEach(() => {
    // eslint-disable-next-line node/prefer-global/process
    if (process.client)
      window.scrollTo(0, 0)
  })
})
