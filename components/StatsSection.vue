<script setup>
</script>

<template>
  <section class="stats-bg py-12" flex="~" relative items-center overflow-hidden>
    <div absolute h-20rem w-30rem b-1 b-gray-5 rounded-full alt="" top="50%" left="6%" translate="-50%" />
    <div absolute h-16rem w-30rem b-1 b-gray-5 rounded-full alt="" top="50%" left="3%" translate="-50%" />
    <div absolute h-12rem w-30rem b-1 b-gray-5 rounded-full alt="" top="50%" left="0%" translate="-50%" />
    <div class="mx-auto px-4 container" top="10" z-20>
      <div class="flex flex-wrap justify-center gap-8">
        <StatisticCard
          icon="/images/Student.png"
          value="84,518"
          label="MUVAFFAQIYATLI TINGLOVCHILAR"
        />
        <StatisticCard
          icon="/images/Module.png"
          value="84,518"
          label="MODULLAR"
        />
        <StatisticCard
          icon="/images/Comp.png"
          value="84,518"
          label="KURSLAR"
        />
      </div>
    </div>
  </section>
</template>

<style>
.stats-bg {
    background-image: url('/images/stats-section-bg.png');
}
</style>
