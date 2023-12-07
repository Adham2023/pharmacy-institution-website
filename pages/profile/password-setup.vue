<!-- eslint-disable no-console -->
<script setup lang="ts">
import { type Input, email, minLength, objectAsync, string } from 'valibot'
import type { FormSubmitEvent } from '#ui/types'

const schema = objectAsync({
  email: string([email('email kiritilmagan')]),
  password: string([minLength(8, 'Eng kamida 8ta harf yoki belgidan iborat b\'olishi shart')]),
})

type Schema = Input<typeof schema>

const state = reactive({
  email: undefined,
  password: undefined,
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data)
}
</script>

<template>
  <div>
    <div bg="#0037A0" rounded-2xl py-1em text-center text-white>
      Parolni o'zgartish
    </div>
    <div p-x-2rem>
      <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" type="password" />
        </UFormGroup>

        <UButton type="submit">
          Submit
        </UButton>
      </UForm>
    </div>
  </div>
</template>
