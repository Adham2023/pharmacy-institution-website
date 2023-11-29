<script setup>
import CHeader from '@/components/course/CHeader.vue'

const sectionsDetailTagRef = ref([])
const route = useRoute()
const { data: course } = await useFetch(`http://localhost:2000/courses/${route.params.courseSlug}`, {
})

// function isMatchedRouteForChapter(pth: string) {
//   const regex = /course\/[^\/]+\/[^\/]+/
//   return regex.test(pth)
// }

function chapterClicked(chapter_index) {
  // eslint-disable-next-line no-console
  console.log('chapterClicked', chapter_index, sectionsDetailTagRef.value)
  if (sectionsDetailTagRef.value.length > 0)
    sectionsDetailTagRef.value[chapter_index].open = !sectionsDetailTagRef.value[chapter_index].open
}

const breadcrumb = computed(() => {
  // eslint-disable-next-line no-console
  console.log('yangi_kurs', course.value.title)
  if (!course.value) { return [] }
  else {
    const items = [{ title: course.value.title.length > 35 ? `${course.value.title.slice(0, 30)}...` : course.value.title, url: `/course/${course.value.slug}` }]
    const current_chapter_index = course.value.sections.findIndex(chapter => chapter.slug.includes(route.params.chapterSlug))
    if (current_chapter_index > -1) {
      items.push({ title: course.value.sections[current_chapter_index].title.length > 35 ? `${course.value.sections[current_chapter_index].title.slice(0, 30)}...` : course.value.sections[current_chapter_index].title, url: `/course/${course.value.slug}/${course.value.sections[current_chapter_index].slug}` })
      const current_lesson_index = course.value.sections[current_chapter_index].lessons.findIndex(lesson => lesson.slug.includes(route.params.lessonSlug))
      if (current_lesson_index > -1)
        items.push({ title: course.value.sections[current_chapter_index].lessons[current_lesson_index].title.length > 35 ? `${course.value.sections[current_chapter_index].lessons[current_lesson_index].title.slice(0, 35)}...` : course.value.sections[current_chapter_index].lessons[current_lesson_index].title, url: course.value.sections[current_chapter_index].lessons[current_lesson_index].slug })
      else
        items[1].url = ''
    }
    return items
  }
})
</script>

<template>
  <main flex="~ col" static min-h-full>
    <div grid grid-cols-1 grid-rows="[3rem,auto]">
      <ToolBar grid-col-start-1 grid-row-start-1 />
      <div v-if="course" flex="~ col" grid-col-start-1 grid-row-start-2>
        <CHeader :key="course.slug" :course="course" />
        <div flex="~ col" mx-auto p-6 pt-0 container>
          <div flex="~ gap-2 wrap" sticky top-4rem z-20 items-center b-b-1 border-b bg-white py-5>
            <!-- bread-crumb -->
            <NuxtLink to="/courses" flex="~ gap-2" items-center>
              <div i-carbon-home /> <span text-gray>></span>
            </NuxtLink>
            <NuxtLink v-for="(b_item, index) in breadcrumb" :key="index" text-sm :class="`text-${index < breadcrumb.length - 1 ? 'blue-400' : ''}`" :to="b_item.url">
              {{ b_item.title }} <span v-if="index < breadcrumb.length - 1" mx-1 text-gray>></span>
            </NuxtLink>
          </div>
          <div grid class="grid-cols-[20rem_auto]" gap-3>
            <div grid-col-start-1 max-h-90vh min-h-50vh overflow-y-auto b-orange3 rounded-md bg-white pt-1em>
              <details v-for="(chapter, index) in course.sections" ref="sectionsDetailTagRef" :key="chapter.id" sticky top-0 mb-1 rounded-md>
                <summary>
                  <NuxtLink :class=" $route.path.includes(`/course/${course.slug}/${chapter.slug}`) ? 'text-blue-400' : ''" :to="`/course/${course.slug}/${chapter.slug}`" p-2 @click="chapterClicked(index)">
                    {{ chapter.title }}
                  </NuxtLink>
                </summary>
                <ul ml-1em b-l-1 border-l b-gray b-dotted bg-white pl-4>
                  <li v-for="lesson in chapter.lessons" :key="lesson.id" b-b-1 border-b b-gray b-dotted p-y-3>
                    <NuxtLink active-class="text-blue-400 " rounded-md p-1 :to="`/course/${course.slug}/${chapter.slug}/${lesson.slug}`">
                      {{ lesson.title.slice(0, 35) }} {{ lesson.title.length > 35 ? '...' : '' }}
                    </NuxtLink>
                  </li>
                </ul>
              </details>
            </div>
            <div grid-col-start-2 max-h-90vh overflow-y-auto>
              <slot />
            </div>
          </div>
        </div>
      </div>
      <NavBar grid-col-start-1 grid-row-start-2 />
    </div>
    <Footer mt-auto />
  </main>
</template>

<style>
details > summary {
  background-color: rgb(243, 244, 255);
  cursor: pointer;
  padding: .5rem 1rem;
  border-radius: 10px;
}
</style>
