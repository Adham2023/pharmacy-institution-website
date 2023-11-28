<script setup>
defineProps({
  icon: String,
  value: [String, Number],
  label: String,
})
</script>

<template>
  <div flex="~ col" items-center justify-center p-4 text-white>
    <img :src="icon" alt="Icon" h-4em class="mb-2">
    <div class="text-5xl font-bold">
      {{ value }}
    </div>
    <div class="text-base">
      {{ label }}
    </div>
  </div>
</template>
