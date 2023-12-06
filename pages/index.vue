<script setup lang="ts">
import type { IUser } from '~/stores/useAuthStore'

definePageMeta({
  layout: 'home',
  // auth: false,
})

const courses = ref<any>()
const api = useApi()
const cookie = useCookie('Authorization')
const auth = useAuthStore()
if (cookie.value) {
  const user = await api.get<IUser>('/courses', {
    headers: {
      Authorization: `Bearer ${cookie.value}`,
    },
  })
  auth.user = user as IUser
}

if (cookie.value) {
  const csrs = await api.get<ICourse[]>('/courses', {
    headers: {
      Authorization: `Bearer ${cookie.value}`,
    },
  })
  courses.value = csrs
}
// })
</script>

<template>
  <main>
    <HeroSection />
    <pre>
      {{ courses }}
    </pre>
    <ListOfCoursesSection />
    <div h-5rem />
    <StatsSection />
    <div h-5rem />
    <WebinarsSection />
    <div h-5rem />
    <TeachersSection />
    <div h-5rem />
    <LinksSection />
    <div h-5rem />
    <HamkorSaytlar />
    <div h-5rem />
    <AboutCertifiate />
    <div h-5rem />
    <PurposeSection />
    <OnlineLibrary />
  </main>
</template>
