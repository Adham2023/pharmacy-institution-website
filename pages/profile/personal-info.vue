<!-- eslint-disable no-console -->
<script setup lang="ts">
import { type Input, date, email, enum_, minLength, objectAsync, string } from 'valibot'
import type { FormSubmitEvent } from '#ui/types'

const auth = useAuthStore()
enum gender {
  male = 'male',
  female = 'femal',
}

const schema = objectAsync({
  last_name: string([minLength(2, 'Familiyasi kiritilmagan')]),
  first_name: string([minLength(2, 'Ismi kiritilmagan')]),
  middle_name: string([minLength(2, 'Otasining ismi kiritilmagan')]),
  date_of_birth: date('Tug\'ilgan sanani kiritilmagan'),
  // address: string(),
  gender: enum_(gender),
})

const api = useApi()

type Schema = Input<typeof schema>

const state = reactive({
  last_name: '',
  first_name: '',
  middle_name: '',
  date_of_birth: '',
  // address: undefined,
  gender: gender.male,
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data)
  if (auth.user) {
    const response = await api.put('/profile/personal-info', {
      body: {
        profile_id: auth.user.profile._id,
        state,
      },
    })
    auth.user.profile = response
  }
}

onMounted(() => {
  state.last_name = auth.user!.profile.last_name
  state.first_name = auth.user!.profile.first_name
  state.middle_name = auth.user!.profile.middle_name
  state.date_of_birth = auth.user!.profile.date_of_birth
})
</script>

<template>
  <div>
    <div bg="#0037A0" rounded-2xl py-1em text-center text-white>
      Shaxsiy ma'lumotlari
    </div>
    <div p-x-2rem p-t-2em>
      <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Familiya" name="last_name">
          <UInput v-model="state.last_name" />
        </UFormGroup>

        <UFormGroup label="Ism" name="first_name">
          <UInput v-model="state.first_name" />
        </UFormGroup>

        <UFormGroup label="Otasining ismi" name="middle_name">
          <UInput v-model="state.middle_name" />
        </UFormGroup>

        <UFormGroup label="Tug'ilgan sanasi" name="date_of_birth">
          <input v-model="state.date_of_birth" type="date">
        </UFormGroup>

        <UFormGroup label="Manzil" name="gender">
          <USelect v-model="state.gender" option-attribute="name" :options="[{ name: 'Erkak', value: gender.male }, { name: 'Ayol', value: gender.female }]" />
        </UFormGroup>

        <div text-center>
          <UButton type="primary" color="blue">
            Submit
          </UButton>
        </div>
      </UForm>
    </div>
  </div>
</template>
