<script setup lang="ts">
definePageMeta({
  layout: 'home',
  // auth: false,
})

const courses = ref<any>()

onMounted(async () => {
  const auth = useAuthStore()

  const csrs = await auth.getAllCourses()
  courses.value = csrs
})
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
