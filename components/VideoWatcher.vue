<script setup lang="ts">
interface Props {
  videoUrl: string
  lessonId: string
  contentId: string
}

const props = defineProps<Props>()
const lessonVideoRef = ref<HTMLVideoElement>()
const watchedTime = ref(0)
const lastTimeUpdate = ref(0)
const furthestPlayedTime = ref(0)

// const request = useApiRequest()

// interface VideoWatchData {
//   content_id: string
//   student_id: string
//   progress_count: number
//   lesson_id: string // Assuming ModuleContent is a subdocument or referenced schema
// }

function timeUpdate() {
  if (lessonVideoRef.value) {
    const currentTime = lessonVideoRef.value.currentTime

    // Increment watched time only if the current time is beyond the furthest watched point
    if (currentTime > furthestPlayedTime.value)
      watchedTime.value += currentTime - lastTimeUpdate.value

    // Update last time update and furthest played time
    lastTimeUpdate.value = currentTime
    if (currentTime > furthestPlayedTime.value)
      furthestPlayedTime.value = currentTime
  }
}

const watchedPercentage = ref(0)

const currentWatchedTimePercentage = computed(() => {
  if (lessonVideoRef.value)
    return Math.floor((watchedTime.value / (Number.isNaN(lessonVideoRef.value.duration) ? 1 : lessonVideoRef.value.duration)) * 100)
  return 0
})

function watchEnded() {
  if (lessonVideoRef.value) {
    const totalDuration: number = lessonVideoRef.value.duration
    watchedPercentage.value = (watchedTime.value / totalDuration) * 100
    // Send data to server
    sendVideoWatchData()
  }
}

async function sendVideoWatchData(): Promise<void> {

}
function seeking() {
  // If a seek is detected, reset to the last played time
  if (lessonVideoRef.value) {
    if (lessonVideoRef.value.currentTime > furthestPlayedTime.value) {
      // console.log('Seeking beyond watched content. Resetting position.')
      lessonVideoRef.value.currentTime = furthestPlayedTime.value
    }
  }
}

onMounted(() => {
  if (lessonVideoRef.value) {
    lessonVideoRef.value.addEventListener('timeupdate', timeUpdate)
    lessonVideoRef.value.addEventListener('ended', watchEnded)
    lessonVideoRef.value.addEventListener('seeking', seeking)
  }
})

onBeforeUnmount(() => {
  if (lessonVideoRef.value)
    lessonVideoRef.value.pause()
  sendVideoWatchData()
})
</script>

<template>
  <div>
    <div v-if="lessonVideoRef" flex="~ gap-3 items-center" mb-3 rounded-md :bg="currentWatchedTimePercentage < 80 ? 'yellow-300' : 'green-300'" p-1 text-sm>
      <div v-if="currentWatchedTimePercentage < 80" i-carbon-warning-alt />
      <div v-else i-carbon-checkbox-checked />
      Video material {{ currentWatchedTimePercentage }} % qismi ko'rilgan, eng kamida 80% ko'rilishi shart!
    </div>
    <video ref="lessonVideoRef" controlsList="nodownload" :src="props.videoUrl" controls rounded-xl :autoplay="false" />
  </div>
</template>
