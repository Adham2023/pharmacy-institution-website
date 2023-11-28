<script setup>
defineProps({
  course: {
    type: Object,
    required: true,
  },
})

function formatCurrency(value) {
  // You can implement more complex logic here if needed
  return `${value.toLocaleString().replaceAll(',', ' ')} so'm`
}
</script>

<template>
  <div max-w-full overflow-hidden rounded-lg bg-white shadow-lg md:max-w-xs>
    <img h-50 w-full object-cover :src="course.image" alt="Course Image">
    <div px-4 py-4>
      <div mb-2 text-sm font-300 text-gray-400>
        {{ course.date }}
      </div>
      <div mb-2 uppercase>
        {{ course.title }}
      </div>
      <div class="mb-2 flex items-center">
        <span v-if="course.free" bg="#FF0000" rounded-sm px-2 text-white>Bepul</span>
        <span v-else bg="#0066B9" rounded-sm px-2 text-white>{{ formatCurrency(course.price) }}</span>
        <span class="ml-auto flex">
          <star-rating :rating="course.rating" />
        </span>
      </div>
      <div flex="~" items-center justify-between text="#0066B9" font-thin>
        <div class="flex items-center">
          <!-- duration icon -->
          <i i-carbon-time />
          <span class="ml-1 text-sm">{{ course.duration }} soat</span>
        </div>
        <div flex="~ gap-3">
          <div class="flex items-center">
            <img src="student.svg" alt="">
            <span class="ml-1 text-sm">{{ course.students }}</span>
          </div>
          <div class="flex items-center">
            <i i-carbon-view />
            <span class="ml-1 text-sm">{{ course.likes }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  <style scoped>
  /* Additional styling if needed */
  </style>
