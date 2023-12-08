<script setup lang="ts">
import CHeader from '@/components/course/CHeader.vue'

const sectionsDetailTagRef = ref<HTMLDetailsElement[]>([])
const route = useRoute()
const router = useRouter()
const courseStore = useCourseStore()
const cookie = useCookie('Authorization')

const api = useApi()
// onMounted(async () => {
// if (cookie.value) {
const course = await api.get<ICourse>(`/courses/${(route.params as any).courseSlug as string}`, {
  headers: {
    Authorization: `Bearer ${cookie.value}`,
  },

})
courseStore.setCourse(course as ICourse)
// }
// })
function chapterClicked(chapter_index: number) {
  // console.log('chapterClicked', chapter_index, sectionsDetailTagRef.value)
  if (sectionsDetailTagRef.value.length > 0)
    sectionsDetailTagRef.value[chapter_index].open = !sectionsDetailTagRef.value[chapter_index].open
}

watch(route, (old_val, new_val) => {
  // eslint-disable-next-line no-console
  console.log('old, new val', old_val, new_val)
  // courseStore.setCurrentChapter(route.params.chapterSlug)
}, { deep: true })

const breadcrumb = computed(() => {
  // console.log('course', courseStore.course_)
  if (!courseStore.course_) { return [] }
  else {
    const items = [{ title: courseStore.course_.title.length > 35 ? `${courseStore.course_.title.slice(0, 30)}...` : courseStore.course_.title, url: `/course/${courseStore.course_.slug}` }]
    const current_chapter_index = courseStore.course_.sections.findIndex((chapter: any) => chapter.slug.includes((route.params as any).chapterSlug))
    if (current_chapter_index > -1) {
      items.push({ title: courseStore.course_.sections[current_chapter_index].title.length > 35 ? `${courseStore.course_.sections[current_chapter_index].title.slice(0, 30)}...` : courseStore.course_.sections[current_chapter_index].title, url: `/course/${courseStore.course_.slug}/${courseStore.course_.sections[current_chapter_index].slug}` })
      const current_lesson_index = courseStore.course_.sections[current_chapter_index].lessons.findIndex((lesson: any) => lesson.slug.includes((route.params as any).lessonSlug))
      if (current_lesson_index > -1)
        items.push({ title: courseStore.course_.sections[current_chapter_index].lessons[current_lesson_index].title.length > 35 ? `${courseStore.course_.sections[current_chapter_index].lessons[current_lesson_index].title.slice(0, 35)}...` : courseStore.course_.sections[current_chapter_index].lessons[current_lesson_index].title, url: courseStore.course_.sections[current_chapter_index].lessons[current_lesson_index].slug })
      else
        items[1].url = ''
    }
    return items
  }
})

const mainPageDivRef = ref()

onMounted(async () => {
  // await courseU.getOneCourse((route.params as any).courseSlug as string)
})
</script>

<template>
  <div v-if="courseStore.course_" flex="~ col" grid-col-start-1 grid-row-start-2>
    <CHeader :key="courseStore.course_.slug" :course="courseStore.course_" />
    <div flex="~ col" relative mx-auto p-6 pt-0 container>
      <div flex="~ gap-2 wrap" sticky top-0rem z-20 items-center b-b-1 border-b bg-white py-2>
        <!-- bread-crumb -->
        <button flex="~" items-center rounded-md bg-gray text-white @click="router.back()">
          <div i-carbon-arrow-left />
        </button>
        <NuxtLink to="/courses" flex="~ gap-2" items-center>
          <div i-carbon-home /> <span text-gray>
            <div i-carbon-caret-right />
          </span>
        </NuxtLink>
        <NuxtLink
          v-for="(b_item, index) in breadcrumb" :key="index" text-sm
          :class="`text-${index < breadcrumb.length - 1 ? 'blue-400' : ''}`" :to="b_item.url" flex="~"
        >
          {{ b_item.title }} <span v-if="index < breadcrumb.length - 1" mx-1 text-gray>
            <div i-carbon-caret-right />
          </span>
        </NuxtLink>
      </div>
      <div class="grid-cols-[20rem_auto]" grid gap-3 overflow-y-auto>
        <div absolute grid-col-start-1 h-100vh w-20rem b-orange3 rounded-md pt-2.5em>
          <details
            v-for="(chapter, index) in courseStore.course_.sections" ref="sectionsDetailTagRef" :key="chapter.id"
            mb-1 rounded-md
          >
            <summary>
              <NuxtLink
                :class="$route.path.includes(`/course/${courseStore.course_.slug}/${chapter.slug}`) ? 'text-orange-500' : ''"
                :to="{ path: `/course/${courseStore.course_.slug}/${chapter.slug}`, hash: '#chapter-title' }" p-2
                @click="chapterClicked(index)"
              >
                {{ chapter.title }}
              </NuxtLink>
            </summary>
            <ul ml-1em b-l-1 border-l b-gray b-dotted bg-white pl-4>
              <li v-for="lesson in chapter.lessons" :key="lesson.id" b-b-1 border-b b-gray b-dotted p-y-3>
                <NuxtLink
                  active-class="text-blue-400 " rounded-md p-1
                  :to="{ path: `/course/${courseStore.course_.slug}/${chapter.slug}/${lesson.slug}`, hash: '#lesson-title' }"
                >
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
