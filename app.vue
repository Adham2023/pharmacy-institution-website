<script setup lang="ts">
import { appName } from '~/constants'

useHead({
  title: appName,
})

// const courses = ref<any>()
// const api = useApi()
// const cookie = useCookie('Authorization')
// const auth = useAuthStore()
// if (cookie.value) {
// const user = await api.get<IUser>('/auth/profile', {
//   headers: {
//     Authorization: `Bearer ${cookie.value}`,
//   },
// })
// auth.user = user as IUser
// const csrs = await api.get<ICourse[]>('/courses', {
//   headers: {
//     Authorization: `Bearer ${cookie.value}`,
//   },
// })
// courses.value = csrs
// }
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

html {
  scroll-behavior: smooth;
}
</style>
