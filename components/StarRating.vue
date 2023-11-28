<script setup>
defineProps({
  rating: {
    type: Number,
    default: 0,
  },
  maxStars: {
    type: Number,
    default: 5,
  },
})
</script>

<template>
  <div flex="~">
    <!-- Create a star rating system here -->
    <span v-for="star in maxStars" :key="star" class="text-yellow-400">
      <div v-if="star <= rating" i-carbon-star-filled />
      <div v-else i-carbon-star />
    </span>
  </div>
</template>
