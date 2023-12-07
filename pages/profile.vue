<script setup>
definePageMeta({
  layout: 'home',
  middleware: ['redirect-to-personal-info'],
})

const auth = useAuthStore()
</script>

<template>
  <main class="grid-cols-[25rem_auto]" grid mx-auto gap-1em py-5rem container>
    <div bg="#0037A0" rounded-2xl p-1px>
      <div rounded-2xl bg-white p-1em text-center>
        <!-- <div overflow-hidden bg-red-400> -->
        <img :src="auth.user.profile.profile_picture[0].url" alt="" srcset="" mx-auto h-60 h-full w-40 w-full rounded-3xl object-cover>
        <!-- </div> -->
        <!-- Profile image and name -->
        <div flex="~ col items-center">
          <span w="1/2">
            {{ `${auth.user.profile.first_name} ${auth.user.profile.last_name} ${auth.user.profile.middle_name}` }}
          </span>
          <a text-blue :href="`mailto:${auth.user.profile.email}`">...{{ auth.user.profile.email.slice(-20) }}</a>
        </div>
      </div>

      <div px-2em py-1em>
        <ul text-sm text-white>
          <li>
            <NuxtLink active-class="text-green-400" to="/profile/personal-info" flex="~ gap-2 items-center" b-b="#0075FF" hover:bg="#0045C9" b-b-1 rounded-md py-2>
              <div i-carbon-user /> Shaxsiy ma'lumotlar
            </NuxtLink>
          </li>
          <li>
            <NuxtLink active-class="text-green-400" to="/profile/contacts" flex="~ gap-2 items-center" b-b="#0075FF" hover:bg="#0045C9" b-b-1 rounded-md py-2>
              <div i-carbon-phone /> Bog'lanish
            </NuxtLink>
          </li>
          <li>
            <NuxtLink active-class="text-green-400" to="/profile/change-profile-picture" flex="~ gap-2 items-center" b-b="#0075FF" hover:bg="#0045C9" b-b-1 rounded-md py-2>
              <div i-carbon-image /> Rasmni o'zgartirish
            </NuxtLink>
          </li>
          <li>
            <NuxtLink active-class="text-green-400" to="/profile/password-setup" flex="~ gap-2 items-center" b-b="#0075FF" hover:bg="#0045C9" b-b-1 rounded-md py-2>
              <div i-carbon-password /> Parolni o'zgartirish
            </NuxtLink>
          </li>
          <li>
            <NuxtLink active-class="text-green-400" to="/profile/documents" flex="~ gap-2 items-center" b-b="#0075FF" hover:bg="#0045C9" b-b-1 rounded-md py-2>
              <div i-carbon-document /> Hujjatlar
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div overflow-y-auto>
      <NuxtPage />
    </div>
  </main>
</template>
