<script setup lang="ts">
const { status, data, signIn } = useAuth()
definePageMeta({
  layout: 'signin-layout',
})
</script>

<template>
  <div>
    SignIn
    {{ data }}
    <p>status: {{ status }}</p>
    <button @click="signIn()">
      signIn
    </button>
  </div>
</template>
