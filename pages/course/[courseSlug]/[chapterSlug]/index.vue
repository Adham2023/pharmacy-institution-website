<script setup>
definePageMeta({
  layout: 'course',
})
const route = useRoute()
const courseStore = useCourseStore()
courseStore.setCurrentChapter(route.params.chapterSlug)
</script>

<template>
  <div break-words pt-1em text-wrap>
    <div v-if="courseStore.chapter">
      <h2 text-center text-2xl font-bold>
        {{ courseStore.chapter.title }}
      </h2>
      <strong>Module haqida:</strong>
      <table>
        <caption class="text-red">
          Barcha mavzularni tugatganingizdan keyin test topshirishngiz mumkin!
        </caption>
        <thead>
          <tr>
            <th scope="col">
              Mavzular soni
            </th>
            <th scope="col">
              Testlar soni
            </th>
            <th scope="col">
              Max-Ball
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ courseStore.chapter.lessons.length }}</td>
            <td>{{ courseStore.chapter.questions.length }}</td>
            <td>{{ courseStore.chapter.questions.reduce((a, q) => a + q.points, 0) }}</td>
          </tr>
        </tbody>
      </table>
      <p><strong> Module Yakuniy testi:</strong>  {{ $route.params.chapterSlug }}</p>
      <div>
        Testlar
      </div>
    </div>
  </div>
</template>

<style scoped>
tbody {
  background-color: #e4f0f5;
}

caption {
  padding: 10px;
  caption-side: bottom;
}

table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid rgb(200, 200, 200);
  letter-spacing: 1px;
  font-family: sans-serif;
  font-size: 0.8rem;
}

td,
th {
  border: 1px solid rgb(190, 190, 190);
  padding: 5px 10px;
}

td {
  text-align: center;
}
</style>
