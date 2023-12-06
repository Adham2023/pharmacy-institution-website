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

export interface IUser {
  _id: string
  username: string
  role: UserRole
  profile: UserProfile
  modules: string[]
  actions: string[]
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<IUser | null>(null)

  const isLoggedIn = computed(() => !!user.value)

  async function logOut() {
    try {
      await $fetch('/api/auth/logout', { method: 'POST' })
      user.value = null
      navigateTo('/')
    }
    catch (error) {

    }
  }

  async function Login(credentials: { username: string, password: string }) {
    try {
      await $fetch<{ data: IUser, message: string }>('/api/auth/login', { method: 'POST', body: credentials })
      await getUser()
    }
    catch (error) {

    }
  }

  async function getUser() {
    try {
      const data = await $fetch<IUser>('/api/auth/user', {
        headers: useRequestHeaders(['cookies']),
      })
      user.value = data
    }
    catch (error) {

    }
  }

  async function getAllCourses() {
    const courses = await $fetch<ICourse[]>('/api/course/all', {
    })
    return courses
  }

  return { user, Login, getUser, isLoggedIn, logOut, getAllCourses }
})
