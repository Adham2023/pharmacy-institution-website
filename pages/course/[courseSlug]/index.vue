<script setup>
definePageMeta({
  layout: 'course',
})
</script>

<template>
  <main pt-1em>
    <div>
      <strong>Kurs haqida</strong>: {{ $route.params.courseSlug }}
    </div>
    <div>
      <strong>Kurs Yakuniy Testi</strong>: {{ $route.params.courseSlug }}
    </div>
  </main>
</template>
