<!-- eslint-disable no-console -->
<script setup lang="ts">
import { type Input, email, minLength, objectAsync, string } from 'valibot'
import type { FormSubmitEvent } from '#ui/types'
import { ProfileDocumentTypeEnum } from '#imports'

const auth = useAuthStore()

// enum ProfileDocumentTypeEnum {
//   passport = 'passport',
//   ID = 'ID',
//   diploma = 'diploma',
// }

const schema = objectAsync({
  doc_type: string([minLength(0, 'Eng kamida 8ta harf yoki belgidan iborat b\'olishi shart')]),
  document_serial: string([minLength(0, 'Eng kamida 8ta harf yoki belgidan iborat b\'olishi shart')]),
  document_number: string([minLength(0, 'Eng kamida 8ta harf yoki belgidan iborat b\'olishi shart')]),
})

type Schema = Input<typeof schema>

const isOpen = ref(false)

const state = reactive<{
  doc_type: ProfileDocumentTypeEnum
  document_serial: string
  document_number: string
}>({
  doc_type: ProfileDocumentTypeEnum.diploma,
  document_serial: '',
  document_number: '',
})

const api = useApi()

const saving = ref(false)
const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    saving.value = true
    console.log(event.data)
    if (auth.user) {
      const response = await api.put('/profiles/add-document', {
        body: {
          profile_id: auth.user.profile._id,
          ...state,
        },
      })
      toast.add({
        title: 'Yangi hujjat qo\'shildi',
        timeout: 3500,
      })
      auth.user.profile = response
      state.doc_type = ProfileDocumentTypeEnum.diploma
      state.document_number = ''
      state.document_serial = ''
    }
    isOpen.value = false
    saving.value = false
  }
  catch (error) {
    saving.value = false
  }
}

// const fileInputRef = ref<HTMLInputElement>()
// const fileToUpload = ref<File | null>(null)

// function fileChanged(event: Event) {
//   const input = event.target as HTMLInputElement
//   if (input.files && input.files.length > 0) {
//     console.log('files', input.files[0])
//     fileToUpload.value = input.files[0]
//   }
// }
</script>

<template>
  <div>
    <div bg="#0037A0" rounded-2xl py-1em text-center text-white>
      Qo'shimcha hujjatlar ma'lumotlari
    </div>
    <div p-x-2rem pt-1em>
      <UButton bg="gray-4" hover:bg="gray-7" label="Yangi" icon="i-heroicons-plus" text-black @click="isOpen = true" />
      <table w-full>
        <caption>
          Qo'shimcha hujjatlar to'plami:
        </caption>
        <thead>
          <tr>
            <th scope="col">
              №
            </th>
            <th scope="col">
              Turi
            </th>
            <th scope="col">
              Seriayasi
            </th>
            <th scope="col">
              Raqami
            </th>
            <th scope="col">
              Fayli
            </th>
            <th scope="col" w-30>
              <!-- O'chirish/ O'zagartirish -->
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(doc, index) in auth.user?.profile.additional_documents" :key="index">
            <td>
              {{ index + 1 }}
            </td>
            <td>
              {{ doc.doc_type }}
            </td>
            <td>
              {{ doc.document_serial }}
            </td>
            <td>
              {{ doc.document_number }}
            </td>
            <td>
              {{ doc.files }}
            </td>
            <td flex="~ gap-3" w-30>
              <UButton icon="i-heroicons-trash" bg="gray-5" />
              <UButton icon="i-heroicons-pencil" bg="gray-5" />
            </td>
          </tr>
        </tbody>
      </table>

      <UModal v-model="isOpen" prevent-close>
        <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                Yangi hujjat
              </h3>
              <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
            </div>
          </template>

          <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
            <UFormGroup label="Hujjat turi" name="doc_type">
              <USelect v-model="state.doc_type" option-attribute="name" :options="[{ name: 'ID', value: ProfileDocumentTypeEnum.ID }, { name: 'Passport', value: ProfileDocumentTypeEnum.diploma }, { name: 'Diplom', value: ProfileDocumentTypeEnum.passport }]" />
            </UFormGroup>

            <UFormGroup label="Hujjat seriyasi" name="document_serial">
              <UInput v-model="state.document_serial" />
            </UFormGroup>

            <UFormGroup label="Hujjat raqami" name="document_number">
              <UInput v-model="state.document_number" />
            </UFormGroup>

            <!-- <UFormGroup label="Yangi parolni tasdiqlang" name="confirm_new_password">
              <input ref="fileInputRef" type="file" :multiple="true" :maxlength="3" :max="3" hidden="hidden" @change="fileChanged">
              <button id="custom-button" flex="~ gap-1 items-center" mt-3 bg-gray-2 text-gray-7 btn hover:bg-gray-3 type="button" @click="fileInputRef?.click()">
                <div i-carbon-edit />
                Hujjat faylini tanlash
              </button>
              <span id="custom-text">{{ fileToUpload?.name }}</span>
            </UFormGroup> -->

            <div text-center>
              <UButton :loading="saving" type="primary" bg="#0037A0">
                Submit {{ saving ? '...' : '' }}
              </UButton>
            </div>
          </UForm>
        </UCard>
      </UModal>
    </div>
  </div>
</template>

<style scoped>
thead,
tfoot {
  background-color: #d8d8d8;
}

tbody {
  background-color: #e4f0f5;

}

caption {
  padding: 10px;
  caption-side: bottom;
}

table {
  border-radius: 10px;
  overflow: hidden;
  margin-top: 1em;
  border-collapse: collapse;
  border: 1px solid rgb(200, 200, 200);
  letter-spacing: 1px;
  font-family: sans-serif;
  font-size: 0.8rem;
}

td,
th {
  border: 1px solid rgb(190, 190, 190);
  padding: 5px 10px;
}

td {
  text-align: center;
}

#real-file {
  opacity: 0;
  position: absolute;
  z-index: -1;
}
</style>
