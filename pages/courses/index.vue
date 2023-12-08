<script setup lang="ts">
definePageMeta({
  layout: 'home',
})
const courseStore = useCourseStore()
const apiRequest = useApi()
const cookie = useCookie('Authorization')
if (cookie.value) {
  const { data } = await useAsyncData(
    'courses',
    () => apiRequest.get('/courses', {
      headers: {
        Authorization: `Bearer ${cookie.value}`,
      },
    }),
  )

  courseStore.setCourses(data.value)
}
</script>

<template>
  <main>
    <HeroSectionCourse />
    <ListOfCoursesPageSection />
  </main>
</template>
