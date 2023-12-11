<script setup>
defineProps({
  teacher: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div relative pt-30>
    <div class="absolute left-1/2 top-[30%] h-35 w-35 transform overflow-hidden border-2 border-red rounded-full shadow-md -translate-x-1/2 -translate-y-1/2">
      <img class="h-full w-full object-cover" :src="teacher.image" alt="Teacher">
    </div>
    <div class="max-w-full overflow-hidden rounded-bl-[120px] rounded-br-[90px] rounded-tl-[100px] rounded-tr-[100px] bg-white pt-15 shadow-lg md:max-w-xs">
      <div class="pb-4">
        <div class="mb-1" pl-15>
          {{ teacher.fullName }}
        </div>
        <div class="mb-1 text-gray-500" pl-15>
          {{ teacher.title }}
        </div>
        <div flex="~" justify-between pl-15 pr-10>
          <div class="mb-1 text-sm text-gray-500">
            {{ teacher.modulesLabel }}: {{ teacher.modulesCount }}
          </div>
          <div class="mb-2 text-sm text-gray-500">
            {{ teacher.ratingLabel }}: {{ teacher.ratingPercentage }}%
          </div>
        </div>
        <div bg="#0066B9" flex="~ col gap-2" py-2 pl-15>
          <div class="text-white">
            {{ teacher.email }}
          </div>
          <StarRating :rating="teacher.starRating" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Additional custom styles for fine tuning, if needed */
</style>
