<script setup>
const lessons = [
  {
    id: 1,
    image: '/images/aa.jpg',
    title: 'PEDAGOGNING KREATIV KOMPETENTLIGINI...',
    author: 'Palankasov P.Pa',
    id: '123456',
    password: '15AD87',
    date: '15.09.2023 10:00:00',
  },
  {
    id: 2,
    image: '/images/aa.jpg',
    title: 'PEDAGOGNING KREATIV KOMPETENTLIGINI...',
    author: 'Palankasov P.Pa',
    id: '123456',
    password: '15AD87',
    date: '15.09.2023 10:00:00',
  },
  {
    id: 3,
    image: '/images/aa.jpg',
    title: 'PEDAGOGNING KREATIV KOMPETENTLIGINI...',
    author: 'Palankasov P.Pa',
    id: '123456',
    password: '15AD87',
    date: '15.09.2023 10:00:00',
  },
  {
    id: 4,
    image: '/images/aa.jpg',
    title: 'PEDAGOGNING KREATIV KOMPETENTLIGINI...',
    author: 'Palankasov P.Pa',
    id: '123456',
    password: '15AD87',
    date: '15.09.2023 10:00:00',
  },

]
</script>

<template>
  <div class="mx-auto p-6 container">
    <div flex="~" items-center justify-between py-1em>
      <h2 mb-1em text-2xl font-400 text="#0037A0">
        Webinarlar
      </h2>
      <button bg="#F5F5F5" flex="~ gap-2" items-center rounded-md p-2 font-300 text="#0071DC">
        Barcha webinarlar <div i-carbon-arrow-right />
      </button>
    </div>
    <div flex="~ gap-3 wrap" justify-between>
      <WebinarCard
        v-for="lesson in lessons"
        :key="lesson.id"
        :lesson="lesson"
      />
    </div>
  </div>
</template>
