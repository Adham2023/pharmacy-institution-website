<script setup lang="ts">
import type { IUser } from '~/stores/useAuthStore'

definePageMeta({
  layout: 'home',
  // auth: false,
})

const auth = useAuthStore()
if (!auth.isLoggedIn)
  await auth.getUser()

// })
</script>

<template>
  <main>
    <HeroSection />

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
