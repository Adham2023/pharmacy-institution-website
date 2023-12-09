<script setup lang="ts">
definePageMeta({
  layout: 'home',
})
const courseStore = useCourseStore()
await courseStore.getCourses()
// const apiRequest = useApi()

// const { data } = await useAsyncData(
//   'courses',
//   () => apiRequest.get('/courses'),
// )

// courseStore.setCourses(data.value)
</script>

<template>
  <main>
    <HeroSectionCourse />
    <ListOfCoursesPageSection />
  </main>
</template>
