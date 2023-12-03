<script setup lang="ts">
import CHeader from '@/components/course/CHeader.vue'

const sectionsDetailTagRef = ref<HTMLDetailsElement[]>([])
const route = useRoute()
const router = useRouter()
const { course } = await useCourse((route.params as any).courseSlug as string)
function chapterClicked(chapter_index: number) {
  // console.log('chapterClicked', chapter_index, sectionsDetailTagRef.value)
  if (sectionsDetailTagRef.value.length > 0)
    sectionsDetailTagRef.value[chapter_index].open = !sectionsDetailTagRef.value[chapter_index].open
}

const breadcrumb = computed(() => {
  // console.log('course', course)
  if (!course) { return [] }
  else {
    const items = [{ title: course.title.length > 35 ? `${course.title.slice(0, 30)}...` : course.title, url: `/course/${course.slug}` }]
    const current_chapter_index = course.sections.findIndex((chapter: any) => chapter.slug.includes((route.params as any).chapterSlug))
    if (current_chapter_index > -1) {
      items.push({ title: course.sections[current_chapter_index].title.length > 35 ? `${course.sections[current_chapter_index].title.slice(0, 30)}...` : course.sections[current_chapter_index].title, url: `/course/${course.slug}/${course.sections[current_chapter_index].slug}` })
      const current_lesson_index = course.sections[current_chapter_index].lessons.findIndex((lesson: any) => lesson.slug.includes((route.params as any).lessonSlug))
      if (current_lesson_index > -1)
        items.push({ title: course.sections[current_chapter_index].lessons[current_lesson_index].title.length > 35 ? `${course.sections[current_chapter_index].lessons[current_lesson_index].title.slice(0, 35)}...` : course.sections[current_chapter_index].lessons[current_lesson_index].title, url: course.sections[current_chapter_index].lessons[current_lesson_index].slug })
      else
        items[1].url = ''
    }
    return items
  }
})

const mainPageDivRef = ref()
</script>

<template>
  <div v-if="course" flex="~ col" grid-col-start-1 grid-row-start-2>
    <CHeader :key="course.slug" :course="course" />
    <div flex="~ col" relative mx-auto p-6 pt-0 container>
      <div flex="~ gap-2 wrap" sticky top-0rem z-20 items-center b-b-1 border-b bg-white py-5>
        <!-- bread-crumb -->
        <button flex="~" items-center rounded-md bg-gray text-white @click="router.back()">
          <div i-carbon-arrow-left />
        </button>
        <NuxtLink to="/" flex="~ gap-2" items-center>
          <div i-carbon-home /> <span text-gray><div i-carbon-caret-right /></span>
        </NuxtLink>
        <NuxtLink v-for="(b_item, index) in breadcrumb" :key="index" text-sm :class="`text-${index < breadcrumb.length - 1 ? 'blue-400' : ''}`" :to="b_item.url" flex="~">
          {{ b_item.title }} <span v-if="index < breadcrumb.length - 1" mx-1 text-gray><div i-carbon-caret-right /></span>
        </NuxtLink>
      </div>
      <div class="grid-cols-[20rem_auto]" grid gap-3 overflow-y-auto>
        <div absolute grid-col-start-1 h-100vh w-20rem b-orange3 rounded-md pt-1em>
          <details v-for="(chapter, index) in course.sections" ref="sectionsDetailTagRef" :key="chapter.id" mb-1 rounded-md>
            <summary>
              <NuxtLink :class=" $route.path.includes(`/course/${course.slug}/${chapter.slug}`) ? 'text-orange-500' : ''" :to="`/course/${course.slug}/${chapter.slug}`" p-2 @click="chapterClicked(index)">
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
        <div ref="mainPageDivRef" grid-col-start-2 min-h-90vh overflow-x-hidden>
          <NuxtPage />
        </div>
      </div>
    </div>
  </div>
</template>
