<script setup lang="ts">
const courseStore = useCourseStore()
</script>

<template>
  <section class="mx-auto p-6 container" mb-5rem>
    <div flex="~" mt-2em justify-between py-1em>
      <h2 text-2xl font-400 text="#0037A0">
        Kurslar ro'yxati
      </h2>
    </div>
    <div v-if="courseStore.courses_list && courseStore.courses_list.length > 0" mb-1rem class="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2">
      <CoursePageCard
        v-for="course in courseStore.courses_list"
        :key="course._id"
        :course="course"
      />
    </div>
    <button bg="#efefef" flex="~ gap-2" items-center rounded-md p-2 font-300 text="#0071DC">
      2 / 21  Barcha kurslarni ko`rish <div i-carbon-arrow-right />
    </button>
  </section>
</template>
