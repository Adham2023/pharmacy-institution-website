<script setup>
const courses = [
  {
    id: 1,
    image: '/images/hamshira2.png',
    title: 'Course Title 1',
    description: 'Some description for course 1',
    date: '15.09.2023',
    duration: 36,
    students: 336,
    likes: 1234,
    price: 1400000, // or the price in smallest currency unit like cents
    rating: 3,
  },
  {
    id: 2,
    image: '/images/hamshira2.png',
    title: 'Course Title 1 asdasdasd asdads asd asd',
    description: 'Some description for course 1',
    date: '15.09.2023',
    free: true,
    duration: 36,
    students: 336,
    likes: 1234,
    price: 1400000, // or the price in smallest currency unit like cents
    rating: 3,
  },
  {
    id: 3,
    image: '/images/hamshira2.png',
    title: 'Course Title 1',
    description: 'Some description for course 1',
    date: '15.09.2023',
    duration: 36,
    students: 336,
    likes: 1234,
    price: 1400000, // or the price in smallest currency unit like cents
    rating: 3,
  },
  {
    id: 4,
    image: '/images/hamshira2.png',
    title: 'Course Title 1',
    description: 'Some description for course 1',
    date: '15.09.2023',
    duration: 36,
    students: 336,
    likes: 1234,
    price: 1400000, // or the price in smallest currency unit like cents
    rating: 3,
  },
  {
    id: 5,
    image: '/images/hamshira2.png',
    title: 'Course Title 1',
    description: 'Some description for course 1',
    date: '15.09.2023',
    duration: 36,
    students: 336,
    likes: 1234,
    price: 1400000, // or the price in smallest currency unit like cents
    rating: 3,
  },
  {
    id: 6,
    image: '/images/hamshira2.png',
    title: 'Course Title 1',
    description: 'Some description for course 1',
    date: '15.09.2023',
    duration: 36,
    students: 336,
    likes: 1234,
    price: 1400000, // or the price in smallest currency unit like cents
    rating: 3,
  },
  {
    id: 7,
    image: '/images/hamshira2.png',
    title: 'Course Title 1',
    description: 'Some description for course 1',
    date: '15.09.2023',
    duration: 36,
    students: 336,
    likes: 1234,
    price: 1400000, // or the price in smallest currency unit like cents
    rating: 3,
  },
  // ... more courses
]

// A computed property to format the price if needed
//   const priceFormatted = (price) => {
//     // Format the price to the desired format
//     return `${price} so'm`;
//   };
</script>

<template>
  <section class="mx-auto p-6 container" mb-5rem>
    <div flex="~" mt-2em justify-between py-1em>
      <h2 text-2xl font-400 text="#0037A0">
        Kurslar ro'yxati
      </h2>
    </div>
    <div mb-1rem class="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2">
      <CoursePageCard
        v-for="course in courses"
        :key="course.id"
        :course="course"
      />
    </div>
    <button bg="#efefef" flex="~ gap-2" items-center rounded-md p-2 font-300 text="#0071DC">
      30 / 20  Barcha kurslarni ko`rish <div i-carbon-arrow-right />
    </button>
  </section>
</template>
