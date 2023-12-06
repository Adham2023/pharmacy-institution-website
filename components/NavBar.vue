<script setup>
// const auth = useAuthStore()
</script>

<template>
  <div w-full b-b-1 b-b-zinc-300 dark:b-b-zinc-700 class="z-20 h-4rem w-100% bg-white bg-opacity-70 px-1em backdrop-blur-lg dark:text-white" p="~ y-5">
    <div flex="~ gap-5rem" mx-auto h-full items-center justify-between px-2 container>
      <Logo />
      <!-- <pre v-if="auth.user">
        {{ auth.user._id }} / {{ auth.user.username }}
      </pre> -->
      <ul flex="~ gap-1rem" font-500>
        <li>
          <NuxtLink active-class="text-green-700" class="" to="/courses">
            Kurslar
          </NuxtLink>
        </li>
        <li>
          <NuxtLink active-class="text-red-200" to="/mentors">
            Mentorlar
          </NuxtLink>
        </li>
        <li>
          <NuxtLink active-class="text-red-200" to="/webinars">
            Webinar & Maqolalar
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
