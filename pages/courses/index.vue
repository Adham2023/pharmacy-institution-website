<script setup lang="ts">
definePageMeta({
  layout: 'home',
})
const courseStore = useCourseStore()
const apiRequest = useApi()

const { data, pending, refresh } = await useAsyncData(
  'courses',
  () => apiRequest.get('/courses'),
)

courseStore.setCourses(data.value)
</script>

<template>
  <main>
    <!-- {{ data }}

    {{ error }}/ -->

    <HeroSectionCourse />
    <button @click="refresh()">
      refresh  {{ pending }}
    </button>
    <ListOfCoursesPageSection />
  </main>
</template>
