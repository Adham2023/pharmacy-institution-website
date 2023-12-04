<script setup lang="ts">
definePageMeta({
  layout: 'home',
})
</script>

<template>
  <main>
    <HeroSectionCourse />
    <ClientOnly>
      <ListOfCoursesPageSection />
    </ClientOnly>
  </main>
</template>
