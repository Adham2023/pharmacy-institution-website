<script setup>
import { VuePDF, usePDF } from '@tato30/vue-pdf'
import { ref } from 'vue'

const props = defineProps(['pdfUrl'])
const document_is_loading = ref(true)
const { pdf, pages } = usePDF(props.pdfUrl)

const pdfRef = ref(null)
const watermarkText = ref('pharma-study.uz')
const watermarkOptions = ref({
  columns: 4,
  rows: 4,
  color: 'rgba(211, 210, 211, 0.8)',
  rotation: 45,
  fontSize: 18,
})

const trigger_key = ref(Math.random())

const current_visible = ref(1)

const scale = ref(1)

function next_page() {
  current_visible.value = (current_visible.value + 1) % (pages.value + 1) === 0 ? 1 : (current_visible.value + 1) % (pages.value + 1)
  reload()
}
function prev_page() {
  if (current_visible.value === 1)
    current_visible.value = pages.value
  else
    current_visible.value = (current_visible.value - 1) % (pages.value + 1)
  reload()
}

function reload() {
//   document_is_loading.value = true
  pdfRef.value.reload()
  scale.value = 1
}

onMounted(() => {
  setTimeout(() => {
    reload()
    document_is_loading.value = false
  }, 3000)
  window.addEventListener('resize', () => {
    setTimeout(() => {
      trigger_key.value = Math.random()
      scale.value = 0.5
      reload()
    }, 10)
  })
})

function onLoaded() {
//   document_is_loading.value = false
}
</script>

<template>
  <div>
    <div>
      <!-- <input v-model="watermarkText">
      <input v-model="watermarkOptions.color">
      <input v-model="watermarkOptions.columns">
      <input v-model="watermarkOptions.rows">
      <input v-model="watermarkOptions.rotation">
      <input v-model="watermarkOptions.fontSize"> -->
      <button class="w-full flex items-center justify-end gap-3" @click="reload">
        <div flex="~ gap-3 items-center" mb-3 b-1 rounded-md p-2 text-sm>
          <div i-carbon-document-download />
          <span v-if="document_is_loading">Yuklanmoqda...</span>
          <span v-if="!document_is_loading">Qayta yuklash</span>
        </div>
      </button>
    </div>

    <Transition name="fade" mode="out-in">
      <!-- <div v-for="page in pages" :key="page" class="w-[75%] overflow-hidden text-center"> -->
      <div :key="current_visible + trigger_key">
        <VuePDF ref="pdfRef" :key="current_visible + trigger_key + Math.random()" :scale="scale" fit-parent :pdf="pdf" :page="current_visible" :watermark-text="watermarkText" :watermark-options="watermarkOptions" @loaded="onLoaded" />
      </div>
      <!-- </div> -->
    </Transition>

    <div class="item-center mt-1em flex justify-center gap-1" w-full>
      <button rounded-full btn @click="prev_page">
        <div i-carbon-arrow-left />
      </button>
      {{ current_visible }} / {{ pages }}
      <button rounded-full btn @click="next_page">
        <div i-carbon-arrow-right />
      </button>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
