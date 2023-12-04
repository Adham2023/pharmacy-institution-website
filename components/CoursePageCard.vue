<script setup>
defineProps({
  course: {
    type: Object,
    required: true,
  },
})

function formatCurrency(value) {
  // You can implement more complex logic here if needed
  if (value)
    return `${value.toLocaleString().replaceAll(',', ' ')} so'm`
  else return ''
}
</script>

<template>
  <NuxtLink :to="`/course/${course.slug}`" flex="~ col" max-w-full overflow-hidden rounded-lg bg-white shadow-lg md:max-w-xs>
    <img h-50 w-full object-cover :src="course.poster" alt="Course Image">
    <div flex="~ col">
      <div mb-2 px-4 text-sm font-300 text-gray-400>
        {{ course.date }}
      </div>
      <div px-4>
        <span v-if="course.free" bg="#FF0000" rounded-sm text-white>Bepul</span>
        <span v-else bg="" rounded-sm font-bold text-zinc-800>{{ formatCurrency(course.price) }}</span>
      </div>
      <div mb-2 px-4 uppercase>
        {{ course.title }}
      </div>

      <div mb-1 flex="~" text="#0066B9" items-center justify-between px-4 font-thin>
        <div class="flex items-center">
          <i i-carbon-time />
          <span class="ml-1 text-sm">{{ course.duration }} soat</span>
        </div>
        <div flex="~ gap-3">
          <div class="flex items-center">
            <img src="/images/student.svg" alt="">
            <span class="ml-1 text-sm">{{ course.students }}</span>
          </div>
          <div class="flex items-center">
            <i i-carbon-view />
            <span class="ml-1 text-sm">{{ course.likes }}</span>
          </div>
        </div>
      </div>
      <div px-4 class="mb-2 flex items-center">
        <span class="ml-auto flex">
          <star-rating :rating="course.rating" />
        </span>
      </div>
    </div>
    <!-- <button mt-auto w-full bg-green-500 py-3 text-center text-sm uppercase text-white>
      Kirish
    </button> -->
  </NuxtLink>
</template>

<style scoped>
/* Additional styling if needed */
</style>
