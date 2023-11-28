<script setup>
defineProps({
  lesson: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="w-full overflow-hidden rounded bg-white shadow-lg md:w-xs">
    <img class="" :src="lesson.image" alt="Lesson Image">
    <div class="px-6 py-4">
      <div class="mb-2">
        {{ lesson.title }}
      </div>
      <div class="text-gray-400">
        <p>{{ lesson.author }}</p>

        <div flex="~" items-center justify-between>
          <div><span text-gray-600>ID:</span> <span>{{ lesson.id }}</span></div>
          <button class="mb-1 w-6rem inline-flex items-center justify-between rounded rounded-full bg-red-500 p-1 px-2 text-white hover:bg-red-700">
            <span text-sm>Video</span>
            <div i-carbon-video />
          </button>
        </div>
        <div flex="~" items-center justify-between>
          <div><span text-gray-600>PAROL:</span> <span>{{ lesson.password }}</span></div>
          <button class="w-6rem inline-flex items-center justify-between rounded rounded-full bg-blue-500 p-1 px-2 text-white hover:bg-blue-700">
            <span text-sm>Ulanish</span>
            <div i-carbon-virtual-desktop />
          </button>
        </div>
      </div>
    </div>
    <div flex="~" justify-center py-4 font-semibold>
      <div i-carbon-calendar />
      <span class="text-sm">{{ lesson.date }}</span>
    </div>
  </div>
</template>

  <style scoped>
  /* Additional styling if needed */
  </style>
