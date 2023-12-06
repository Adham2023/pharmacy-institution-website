/* eslint-disable no-console */
import { defineStore } from 'pinia'

interface UserAction {
  uri: string
  permission: boolean
  _id: string
}

interface UserPage {
  uri: string
  permission: boolean
  actions: UserAction[]
  _id: string
}

interface UserRole {
  _id: string
  title_uz: string
  title_en: string
  title_ru: string
  pages: UserPage[]
}

interface UserProfilePassport {
  date_of_birth: string
  gender: string
  pinfl: string
  serial: string
  passport_number: string
  copies: { name: string, url: string }[]
  _id: string
}

interface UserProfile {
  _id: string
  email: string
  first_name: string
  is_student: false
  last_name: string
  middle_name: string
  position: string
  contacts: []
  phone_number: string
  passport_data: UserProfilePassport
  additional_documents: { name: string, url: string }[]
  is_deleted: true
  purchasedCourses: ICourse[]
}

interface User {
  _id: string
  username: string
  role: UserRole
  profile: UserProfile
  modules: string[]
  actions: string[]
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)

  const isLoggedIn = computed(() => !!user.value)

  async function logOut() {
    await useApiFetch('/auth/logout', { method: 'POST' })
    user.value = null
    navigateTo('/')
  }

  async function Login(credentials: { username: string, password: string }) {
    console.log('login')
    await useApiFetch<{ data: User, message: string }>('/auth/login', { method: 'POST', body: credentials })
    // if (data.value)
    await getUser()
    //   user.value = data.value.data
  }

  async function getUser() {
    const { data } = await useApiFetch<User>('/auth/profile', { method: 'GET' })
    user.value = data.value
    // console.error(error)
  }

  return { user, Login, getUser, isLoggedIn, logOut }
})
