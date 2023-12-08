<!-- eslint-disable no-console -->
<script setup lang="ts">
import { type Input, date, email, enum_, minLength, objectAsync, string } from 'valibot'
import type { FormSubmitEvent } from '#ui/types'

const auth = useAuthStore()
enum gender {
  male = 'male',
  female = 'female',
}

const schema = objectAsync({
  last_name: string([minLength(2, 'Familiyasi kiritilmagan')]),
  first_name: string([minLength(2, 'Ismi kiritilmagan')]),
  middle_name: string([minLength(2, 'Otasining ismi kiritilmagan')]),
  date_of_birth: date('Tug\'ilgan sanani kiritilmagan'),
  // address: string(),
  gender: enum_(gender),
  pinfl: string([minLength(14, 'JSHSHIR kiritilmagan')]),
  serial: string([minLength(2, 'Passport seriyasi kiritilmagan')]),
  passport_number: string([minLength(2, 'Passport raqam kiritilmagan')]),
})

const api = useApi()

type Schema = Input<typeof schema>

const state = reactive<{
  last_name: string
  pinfl: string
  serial: string
  passport_number: string
  copies: { name: string, url: string }[]
  first_name: string
  middle_name: string
  date_of_birth: Date
  gender: gender
}>({
  last_name: '',
  first_name: '',
  middle_name: '',
  pinfl: '',
  serial: '',
  passport_number: '',
  copies: [],
  date_of_birth: new Date(),
  gender: gender.male,
})

const dateValue = computed({
  get: () => {
    return state.date_of_birth.toISOString().substring(0, 10)
  },
  set: (value) => {
    state.date_of_birth = new Date(value)
  },
})

const saving = ref(false)
async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  try {
    saving.value = true
    console.log(event.data)
    if (auth.user) {
      const response = await api.put('/profiles/personal-info', {
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
  state.last_name = auth.user!.profile.last_name
  state.first_name = auth.user!.profile.first_name
  state.middle_name = auth.user!.profile.middle_name
  state.pinfl = auth.user!.profile.passport_data.pinfl
  state.serial = auth.user!.profile.passport_data.serial
  state.passport_number = auth.user!.profile.passport_data.passport_number
  state.gender = auth.user!.profile.passport_data.gender
  state.date_of_birth = new Date(auth.user!.profile.passport_data.date_of_birth)
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

        <UFormGroup label="Tug'ilgan sanasi">
          <input v-model="dateValue" type="date">
        </UFormGroup>

        <UFormGroup label="Jinsi" name="gender">
          <USelect v-model="state.gender" option-attribute="name" :options="[{ name: 'Erkak', value: gender.male }, { name: 'Ayol', value: gender.female }]" />
        </UFormGroup>

        <UFormGroup label="JSHSHIR" name="pinfl">
          <UInput v-model="state.pinfl" />
        </UFormGroup>
        <UFormGroup label="Passport seriyasi" name="serial">
          <UInput v-model="state.serial" />
        </UFormGroup>
        <UFormGroup label="Passport raqami" name="passport_number">
          <UInput v-model="state.passport_number" />
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
