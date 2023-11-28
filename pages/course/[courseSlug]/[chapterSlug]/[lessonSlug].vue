<script setup>
definePageMeta({
  layout: 'course',
})
</script>

<template>
  <div>
    <span>Course: {{ $route.params.courseSlug }}</span>
    <span>Chapter: {{ $route.params.chapterSlug }}</span>
    <span>Lesson: {{ $route.params.lessonSlug }}</span>
  </div>
</template>
