<script setup lang="ts">
// const { signIn, status } = useAuth()
const auth = useAuthStore()
const credentials = reactive({
  username: '',
  password: '',
})
</script>

<template>
  <!-- <div class="h-27rem w-27rem bg-white"> -->
  <div class="mx-auto mt-10 w-sm rounded-lg bg-white p-6 shadow-md xl:w-md">
    <h2 class="mb-6 text-center text-lg font-semibold">
      Tizimga kirish
    </h2>
    <div class="mb-6 space-y-4">
      <div class="flex items-center border-1 rounded-lg p-2">
        <i class="i-carbon-user text-gray-400" />
        <input v-model="credentials.username" class="w-full pl-2 outline-none" type="text" placeholder="Login">
      </div>
      <div class="flex items-center border-1 rounded-lg p-2">
        <i class="i-carbon-locked text-gray-400" />
        <input v-model="credentials.password" class="w-full pl-2 outline-none" type="password" placeholder="Parol">
      </div>
    </div>
    <button class="w-full rounded-lg bg-[#0037A0] py-2 text-white" @click="auth.Login(credentials)">
      Kirish a <div i-carbon-circle-dash>
        ...
      </div>
    </button>
    <div class="my-6 text-center">
      <span class="text-gray-400">Boshqa yo'l bilan kirish</span>
    </div>

    <div class="mb-6 flex justify-center gap-4">
      <button class="flex items-center border rounded-lg px-4 py-2">
        <img src="/images/oneId.png" alt="ONE ID" class="mr-2 h-6">
      </button>
      <button class="flex items-center border rounded-lg px-4 py-2">
        <div i-carbon-logo-google class="mr-2 h-6 text-red" />
        GOOGLE
      </button>
    </div>

    <div class="rounded-md bg-gray2 p-1 text-center">
      <a href="#" class="text-blue-600">Ro'yxatdan o'tish</a>
    </div>
  </div>
  <!-- </div> -->
</template>
