export default defineNuxtPlugin(() => {
  const router = useRouter()
  router.options.scrollBehavior = (to: { hash: any }) => {
    if (to.hash) {
      nextTick(() => {
        return {
          el: to.hash,
          top: 130,
          behavior: 'smooth',
        }
      })
    }
  }
})
