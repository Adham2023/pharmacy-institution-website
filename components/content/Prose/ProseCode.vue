<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const props = withDefaults(
  defineProps<{

    code?: string
    language?: string | null
    filename?: string | null
    highlights?: Array<number>
  }>(),
  { code: '', language: null, filename: null },
)

const { copy, copied } = useClipboard()

const languageMap: Record<
  string,
  { text: string; color: string; background: string }
> = {
  vue: {
    text: 'vue',
    background: '#42b883',
    color: 'white',
  },
  js: {
    text: 'js',
    background: '#f7df1e',
    color: 'white',
  },
  sh: {
    text: 'sh',
    background: '#f7df1e',
    color: 'white',
  },
}

const languageText = computed(() => props.language ? languageMap[props.language]?.text : null,

)
</script>

<template>
  <div class="align-center mx-auto container lg:w-4xl">
    <div flex="~ justify-between" b-b-1 border-zinc-500 bg-gray-700>
      <div v-if="filename" class="p-1 text-green">
        {{ filename }}
      </div>
      <div v-else class="p-1 text-transparent">
        .
      </div>
      <div flex="~">
        <span
          v-if="languageText"
          class="language-text rounded-[0.5rem] p-1 text-white"
        >
          {{ languageText }}
        </span>
        <div class="bottom-container">
          <div class="align-center copy-container rounded-[0.5rem] p-0.2rem text-white">
            <button @click="copy(code)">
              <div :class="copied ? 'i-carbon-checkmark' : 'i-carbon-copy'" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div :class="languageText">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid #4b4b4b;
  background: #1e1e1e;
  position: relative;
  /* margin-top: 1rem; */
  margin-bottom: 1rem;
  /* padding-top: 1em; */
  overflow: hidden;
  border-radius: 0.5rem;
}

.bottom-container {
  display: flex;
  justify-content: flex-end;
}

.filename-text {
  position: absolute;
  top: 0;
  left: 1em;
  padding: 0.25em 0.5em;
  color: white;
  font-size: 14px;
}

/* .language-text1 {
  position: absolute;
  top: 0;
  right: 1em;
  padding: 0.25em 0.5em;
  font-size: 14px;
  text-transform: uppercase;
  border-bottom-right-radius: 0.25em;
  border-bottom-left-radius: 0.25em;
} */

:slotted(pre) {
  margin-top: 0;
  margin-bottom: 0;
  display: flex;
  flex: 1 1 0%;
  overflow-x: auto;
  padding: 0.5rem;
  /* line-height: 1.625; */
  counter-reset: lines;
}

:slotted(pre code) {
  display: flex;
  width: 100%;

  /* border: 1px solid red; */
  flex-direction: column;
}

:slotted(pre code .line) {
  display: inline-table;
  min-height: 1rem;

}

:slotted(pre code .line::before) {
  counter-increment: lines;
  content: counter(lines);
  width: 1rem;
  margin-right: 1rem;
  display: inline-block;
  text-align: left;
  color: rgba(115, 138, 148, 0.4);
}

:slotted(.sh pre code .line::before) {
  display: none;
}

:slotted(pre code .highlight) {
  background-color: #363b46;
  left: 0;
  /* display: flex; */
  width: 100%;
  /* margin-right: -1em; */
  margin-left: -0.45em;
  padding-right: 1em;
  padding-left: 0.25em;
  border-left: 0.25em solid rgb(255, 75, 75);
}
</style>
