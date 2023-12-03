<script setup lang="ts">
definePageMeta({
  layout: 'course',
})
const route = useRoute()
const courseStore = useCourseStore()
courseStore.setCurrentLesson((route.params as any).lessonSlug)
const contents = computed(() => {
  if (courseStore.lesson)
    return courseStore.lesson.contents.sort((cnt1: ILesson, cnt2: ILesson) => cnt1.order - cnt2.order)
  return []
})
</script>

<template>
  <div oncontextmenu="return false;" pt-1em>
    <div v-if="courseStore.lesson">
      <h2 text-center text-2xl font-bold>
        {{ courseStore.lesson.title }}
      </h2>
      <div v-for="(content, index) in contents" :key="index">
        <div v-if="content.format === 'text'" flex="~ col content-center items-start">
          <div class="flex content-start items-center gap-3" mb-3>
            <div class="btn" i-carbon-txt />
          </div>
          <MarkdownStringRenderer :markdown-string="content.text" />
        </div>
        <div v-if="content.format === 'video'" flex="~ col content-center items-start">
          <div class="flex content-start items-center gap-3" mb-3>
            <div class="btn" i-carbon-video />
          </div>
          <VideoWatcher :content-id="content._id" :video-url="`http://localhost:2000/${content.videoUrl[0].url}`" :lesson-id="courseStore.lesson._id" />
        </div>
        <div v-if="content.format === 'image'" flex="~ col content-center items-start">
          <div class="flex content-start items-center gap-3" mb-3>
            <div class="btn" i-carbon-image />
          </div>
          <img mx-auto :src="`http://localhost:2000/${content.imageUrl[0].url}`" alt="" srcset="">
        </div>
        <div v-if="content.format === 'pdf'" py-6>
          <div class="flex content-start items-center gap-3">
            <div class="btn" i-carbon-document-pdf />
          </div>
          <ClientOnly>
            <PdfViewer :pdf-url="`http://localhost:2000/${content.pdfUrl[0].url}`" />
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>
