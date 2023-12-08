<!-- eslint-disable no-console -->
<script setup lang="ts">
import { type Input, email, minLength, objectAsync, string } from 'valibot'
import type { FormSubmitEvent } from '#ui/types'

const auth = useAuthStore()

const schema = objectAsync({
  email: string([email('Email kiritilmagan')]),
  phone_number: string([minLength(9, 'Telefon raqam kiritilmagan')]),
})

type Schema = Input<typeof schema>

const state = reactive({
  email: '',
  phone_number: '',
  // address: undefined,
})

const saving = ref(false)
const api = useApi()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  try {
    saving.value = true
    console.log(event.data)
    if (auth.user) {
      const response = await api.put('/profiles/contacts', {
        body: {
          profile_id: auth.user.profile._id,
          ...state,
        },
      })
      auth.user.profile = response
    }
    saving.value = false
  }
  catch (error) {
    saving.value = false
  }
}

onMounted(() => {
  state.email = auth.user!.profile.email
  state.phone_number = auth.user!.profile.phone_number
})
</script>

<template>
  <div>
    <div bg="#0037A0" rounded-2xl py-1em text-center text-white>
      Bog'lanish
    </div>
    <div p-x-2rem p-t-2em>
      <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup label="Telefon raqam" name="phone_number">
          <UInput v-model="state.phone_number" />
        </UFormGroup>

        <div text-center>
          <UButton :loading="saving" type="primary" color="#0037A0">
            Saqlash {{ saving ? '...' : '' }}
          </UButton>
        </div>
      </UForm>
    </div>
  </div>
</template>
