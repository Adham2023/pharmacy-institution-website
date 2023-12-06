<script setup>
// const { status, signIn, signOut } = useAuth()
const auth = useAuthStore()
</script>

<template>
  <div h-3rem w-full class="bg-[#0037A0] text-white">
    <div mx-auto flex="~" h-full items-center justify-between px-2 container>
      <ul flex="~ gap-1" text-sm>
        <li flex="~ gap-1" items-center>
          <div i-carbon-phone /> (+998) 33 099-00-01
        </li>
        |
        <li flex="~ gap-1" items-center>
          <div i-carbon-email /> info@pharmastudy.uz
        </li>
      </ul>
      <div>
        <!-- <div class="relative text-gray-600 focus-within:text-gray-400">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="submit" class="focus:shadow-outline p-2 focus:outline-none">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="h-6 w-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </span>
          <input type="search" name="q" class="rounded-full py-2 pl-10 pr-2 text-sm focus:text-gray-900 focus:outline-none" placeholder="Search..." autocomplete="off">
        </div> -->
        <button v-if="!auth.isLoggedIn" rounded-full bg-white px-5 text="#0037A0">
          Kirish
        </button>
        <div v-else>
          <!-- <button m-r-1 rounded-full bg-white p-1 px-5 text="#0037A0" @click="auth.logOut({ redirect: true, callbackUrl: '/' })">
            Chiqish
          </button> -->
          <NuxtLink rounded-full bg-white p-1 px-5 btn hover:bg-white class="text-[#0037A0]" to="/profile">
            Profil
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
