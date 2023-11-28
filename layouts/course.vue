<script setup lang="ts">
import CHeader from '@/components/course/CHeader.vue'

const chaptersDetailTagRef = ref<HTMLDetailsElement[]>([])

const course = ref({
  id: 1,
  title: 'Pedagogning kreativ kompetentligini ',
  slug: 'pedagogning_kreativ_kompetentligini',
  poster: 'https://images.unsplash.com/photo-1451226428352-cf66bf8a0317?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  chapters: [{
    id: 1,
    title: 'Pedagogning kreativ kompetentligini nimalar baralishi kerak?',
    slug: 'chapter_1',
    lessons: [{
      id: 1,
      title: 'Lesson 1',
      slug: 'lesson_1',
    }, {
      id: 2,
      title: 'Lesson 2 asdasd asd asd asd as d asdasdasdasdasdasd',
      slug: 'lesson_2',
    }, {
      id: 3,
      title: 'Lesson 3',
      slug: 'lesson_3',
    }],
  }, {
    id: 2,
    title: 'Chapter 2',
    slug: 'chapter_2',
    lessons: [{
      id: 1,
      title: 'Lesson 1',
      slug: 'lesson_1',
    }, {
      id: 2,
      title: 'Lesson 2',
      slug: 'lesson_2',
    }, {
      id: 3,
      title: 'Lesson 3',
      slug: 'lesson_3',
    }, {
      id: 4,
      title: 'Lesson 4',
      slug: 'lesson_4',
    }],
  }],
})

// function isMatchedRouteForChapter(pth: string) {
//   const regex = /course\/[^\/]+\/[^\/]+/
//   return regex.test(pth)
// }

function chapterClicked(chapter_index: number) {
  // eslint-disable-next-line no-console
  console.log('chapterClicked', chapter_index, chaptersDetailTagRef.value)
  if (chaptersDetailTagRef.value.length > 0)
    chaptersDetailTagRef.value[chapter_index].open = !chaptersDetailTagRef.value[chapter_index].open
}

const route = useRoute()

const breadcrumb = computed(() => {
  const items = [{ title: course.value.title, url: `/course/${course.value.slug}` }]
  const current_chapter_index = course.value.chapters.findIndex((chapter: any) => chapter.slug.includes((route.params as any).chapterSlug))
  if (current_chapter_index > -1) {
    items.push({ title: course.value.chapters[current_chapter_index].title, url: `/course/${course.value.slug}/${course.value.chapters[current_chapter_index].slug}` })
    const current_lesson_index = course.value.chapters[current_chapter_index].lessons.findIndex((lesson: any) => lesson.slug.includes((route.params as any).lessonSlug))
    if (current_lesson_index > -1)
      items.push({ title: course.value.chapters[current_chapter_index].lessons[current_lesson_index].title, url: course.value.chapters[current_chapter_index].lessons[current_lesson_index].slug })
    else
      items[1].url = ''
  }
  return items
})
</script>

<template>
  <main flex="~ col" static min-h-full>
    <div grid grid-cols-1 grid-rows="[3rem,auto]">
      <ToolBar grid-col-start-1 grid-row-start-1 />
      <div flex="~ col" grid-col-start-1 grid-row-start-2>
        <CHeader :course="course" />
        <div flex="~ col" mx-auto p-6 container>
          <div flex="~ gap-2 wrap" items-center b-b-1 border-b>
            <!-- bread-crumb -->
            <NuxtLink to="/" flex="~ gap-2" items-center>
              <div i-carbon-home /> >
            </NuxtLink>
            <NuxtLink v-for="(b_item, index) in breadcrumb" :key="index" text-sm :class="`text-${index < breadcrumb.length - 1 ? 'blue-400' : ''}`" :to="b_item.url">
              {{ b_item.title }} <span v-if="index < breadcrumb.length - 1" mx-1>></span>
            </NuxtLink>
          </div>
          <div grid class="grid-cols-[20rem_auto]" gap-3>
            <div grid-col-start-1 max-h-90vh min-h-50vh overflow-y-auto b-orange3 rounded-md pt-1em>
              <details v-for="(chapter, index) in course.chapters" ref="chaptersDetailTagRef" :key="chapter.id" mb-1 rounded-md>
                <summary>
                  <NuxtLink :class=" $route.path.includes(`/course/${course.slug}/${chapter.slug}`) ? 'text-blue-400' : ''" :to="`/course/${course.slug}/${chapter.slug}`" p-2 @click="chapterClicked(index)">
                    {{ chapter.title }}
                  </NuxtLink>
                </summary>
                <ul ml-1em b-l-1 border-l b-gray b-dotted pl-4>
                  <li v-for="lesson in chapter.lessons" :key="lesson.id" b-b-1 border-b b-gray b-dotted>
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
