/* eslint-disable no-console */
export default defineNuxtRouteMiddleware((to) => {
  console.log(to.path)
  if (to.path === '/profile') {
    console.log('in to /profile')
    return navigateTo('/profile/personal-info')
  }
})
