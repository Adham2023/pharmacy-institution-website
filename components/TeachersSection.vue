<script setup>
import TeacherCard from '~/components/TeacherCard.vue'

const teachers = [
  {
    id: 1,
    image: 'Ellipse 8322.png',
    fullName: 'Palankasova Palonkas Palonkasovna',
    title: 'P.F.N, Dotsent',
    modulesLabel: 'Modullar',
    modulesCount: 299,
    ratingLabel: 'Reyting',
    ratingPercentage: 68,
    email: 'palonkas@pharma-study.uz',
    starRating: 5,
    // ... other teacher details
  },
  {
    id: 1,
    image: 'Ellipse 8322.png',
    fullName: 'Palankasova Palonkas Palonkasovna',
    title: 'P.F.N, Dotsent',
    modulesLabel: 'Modullar',
    modulesCount: 299,
    ratingLabel: 'Reyting',
    ratingPercentage: 68,
    email: 'palonkas@pharma-study.uz',
    starRating: 3,
    // ... other teacher details
  },
  {
    id: 1,
    image: 'Ellipse 8322.png',
    fullName: 'Palankasova Palonkas Palonkasovna',
    title: 'P.F.N, Dotsent',
    modulesLabel: 'Modullar',
    modulesCount: 299,
    ratingLabel: 'Reyting',
    ratingPercentage: 68,
    email: 'palonkas@pharma-study.uz',
    starRating: 4,
    // ... other teacher details
  },
  {
    id: 1,
    image: 'Ellipse 8322.png',
    fullName: 'Palankasova Palonkas Palonkasovna',
    title: 'P.F.N, Dotsent',
    modulesLabel: 'Modullar',
    modulesCount: 299,
    ratingLabel: 'Reyting',
    ratingPercentage: 68,
    email: 'palonkas@pharma-study.uz',
    starRating: 3,
    // ... other teacher details
  },
  // ... more teachers
]
</script>

<template>
  <div bg="#0037A0">
    <div flex="~ " mx-auto items-center justify-between px-6 py-1em container>
      <h2 mb-1em text-2xl font-400 text-white>
        O'qituvchilar ro'yxati
      </h2>
      <button bg="#F5F5F5" flex="~ gap-2" items-center rounded-md p-2 font-300 text="#0071DC">
        Barcha mentorlar <div i-carbon-arrow-right />
      </button>
    </div>
    <div flex="~ wrap" mx-auto justify-between p-6 container>
      <TeacherCard
        v-for="teacher in teachers"
        :key="teacher.id"
        :teacher="teacher"
      />
    </div>
  </div>
</template>
