<!-- eslint-disable no-console -->
<script setup lang="ts">
// const { baseUrl } = useRuntimeConfig().public
const auth = useAuthStore()
const api = useApi()

const user = ref<IUser | null>(null)

onMounted(() => {
  user.value = auth.user
})

const fileInputRef = ref<HTMLInputElement>()
const fileToUpload = ref<File | null>(null)

function fileChanged(event: Event) {
  const input = event.target as HTMLInputElement
  if (input.files && input.files.length > 0) {
    console.log('files', input.files[0])
    fileToUpload.value = input.files[0]
  }
}
const saving = ref(false)
async function onSubmit() {
  try {
    saving.value = true
    if (fileToUpload.value && user.value) {
      const formData = new FormData()
      formData.append('file', fileToUpload.value)
      const response = await api.post('/upload', {
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      const response_2 = await api.put('/profiles/picture', {
        body: {
          profile_id: user.value.profile._id,
          name: response.name,
          url: response.url,
        },
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      if (auth.user)
        auth.user.profile = response_2

      // console.log('response', response)
      // console.log('response_2', response_2)
      fileToUpload.value = null
    }
    saving.value = false
  }
  catch (error) {
    saving.value = false
  }
}
</script>

<template>
  <div>
    <div bg="#0037A0" rounded-2xl py-1em text-center text-white>
      Rasmni o'zgartirish
    </div>
    <div p-x-2rem p-t-2em>
      <!-- <img v-if="user && user.profile.profile_picture.length > 0" :src="baseUrl + user.profile.profile_picture[0].url" alt="" srcset=""> -->
      <img v-if="user && user.profile.profile_picture.length > 0" w-60 :src="user.profile.profile_picture[0].url " alt="" srcset="">
      <div>
        <input ref="fileInputRef" type="file" hidden="hidden" @change="fileChanged">
        <button id="custom-button" flex="~ gap-1 items-center" mt-3 bg-gray-2 text-gray-7 btn hover:bg-gray-3 type="button" @click="fileInputRef?.click()">
          <div i-carbon-edit />
          Yangi rasm tanlash
        </button>
        <span id="custom-text">{{ fileToUpload?.name }}</span>
      </div>
      <div text-center>
        <UButton :disabled="saving || fileToUpload === null" :loading="saving" type="primary" bg="#0037A0" @click="onSubmit">
          Saqlash
        </UButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
#real-file {
  opacity: 0;
  position: absolute;
  z-index: -1;
}
</style>
