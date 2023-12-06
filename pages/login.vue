<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  },
})
// const { signIn } = useAuth()
</script>

<template>
  <div>
    <p>Sign-In Options:</p>
  </div>
</template>
