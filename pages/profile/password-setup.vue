<!-- eslint-disable no-console -->
<script setup lang="ts">
import { type Input, email, minLength, objectAsync, string } from 'valibot'
import type { FormSubmitEvent } from '#ui/types'

const auth = useAuthStore()

const schema = objectAsync({
  password: string([minLength(2, 'Eng kamida 8ta harf yoki belgidan iborat b\'olishi shart')]),
  new_password: string([minLength(8, 'Eng kamida 8ta harf yoki belgidan iborat b\'olishi shart')]),
  confirm_new_password: string([minLength(8, 'Eng kamida 8ta harf yoki belgidan iborat b\'olishi shart')]),
})

type Schema = Input<typeof schema>

const state = reactive({
  password: '',
  new_password: '',
  confirm_new_password: '',
})

const api = useApi()

const saving = ref(false)
const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data

  if (state.confirm_new_password !== state.new_password) {
    toast.add({
      title: 'Yangi parol tasdiqlanmagan!',
      timeout: 3500,
    })
    return
  }

  try {
    saving.value = true
    console.log(event.data)
    if (auth.user) {
      await api.put('/users/password', {
        body: {
          user_id: auth.user._id,
          ...state,
        },
      })
      toast.add({
        title: 'Profilga qaytadan kiring!',
        timeout: 3500,
      })
      auth.logOut()
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
      Parolni o'zgartish
    </div>
    <div p-x-2rem>
      <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Hozrigi parol" name="password">
          <UInput v-model="state.password" type="password" />
        </UFormGroup>

        <UFormGroup label="Yangi parol" name="new_password">
          <UInput v-model="state.new_password" type="password" />
        </UFormGroup>

        <UFormGroup label="Yangi parolni tasdiqlang" name="confirm_new_password">
          <UInput v-model="state.confirm_new_password" type="password" />
        </UFormGroup>

        <div text-center>
          <UButton :loading="saving" type="primary" bg="#0037A0">
            Submit {{ saving ? '...' : '' }}
          </UButton>
        </div>
      </UForm>
    </div>
  </div>
</template>
