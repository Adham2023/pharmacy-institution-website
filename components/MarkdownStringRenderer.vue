<script setup>
import markdownParser from '@nuxt/content/transformers/markdown'
import { CustomH1 } from '#components'

const props = defineProps({
  markdownString: {
    type: String,
    required: true,
  },
})

const record = ref('')

watchEffect(async () => {
  await markdownParser.parse('custom.md', props.markdownString).then(md => record.value = md)
})

const components = {
  'custom-h1': CustomH1,
}
</script>

<template>
  <ContentRenderer :value="record">
    <ContentRendererMarkdown :value="record" :components="components" />
  </ContentRenderer>
</template>
