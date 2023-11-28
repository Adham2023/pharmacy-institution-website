<script setup>
defineProps({
  course: Object,
})
</script>

<template>
  <div :style="{ backgroundImage: `url('${course.poster}')` }" class="bg-cover bg-bottom" flex="~" h-30rem w-full items-center justify-center overflow-hidden px-1em>
    <div grid grid-cols-1 grid-rows-1 mx-auto container>
      <!-- <div flex="~" h-full items-center> -->
      <div rounded-tr="50px" flex="~ col" rounded="50px" grid-col-start-1 grid-row-start-1 my-auto self-center justify-between bg-white bg-opacity-70 p-3rem backdrop-blur-lg>
        <!-- <h3 text-center text-sm uppercase text="#0037A0">
          Oliy ta‘lim muassasalari
          professor-o‘qituvchilari uchun
          masofaviy kurslar
        </h3> -->
        <h1 flex="~ col" items-start text-3xl text-zinc-600 xl:text-5xl>
          {{ course.title }}
        </h1>
      </div>
    </div>
  </div>
</template>

<style>
.herobg_course {
    background-image: url('');
}
</style>
