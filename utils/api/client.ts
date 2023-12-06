import type { FetchOptions } from 'ofetch'

export default class Client {
  options?: FetchOptions
  baseUrl: string

  constructor(baseUrl: string, options?: FetchOptions) {
    this.options = options
    this.baseUrl = baseUrl
  }

  async raw<T>(url: string, method: 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'get' | 'head' | 'patch' | 'post' | 'put' | 'delete' | 'connect' | 'options' | 'trace' | undefined, options?: FetchOptions) {
    try {
      const data = await $fetch.raw<T>(`${this.baseUrl}${url}`, {
        ...options,
        ...this.options,
        method,
        credentials: 'include',

      })
      return data
    }
    catch (error) {
      return Promise.reject(error)
    }
  }

  async post<T>(url: string, options?: FetchOptions) {
    try {
      const data = await $fetch<T>(`${this.baseUrl}${url}`, {
        ...options,
        ...this.options,
        method: 'POST',
        credentials: 'include',

      })
      return data
    }
    catch (error) {
      return Promise.reject(error)
    }
  }

  async put<T>(url: string, options?: FetchOptions) {
    try {
      const data = await $fetch<T>(`${this.baseUrl}${url}`, {
        ...options,
        ...this.options,
        method: 'PUT',
        credentials: 'include',

      })
      return data
    }
    catch (error) {
      return Promise.reject(error)
    }
  }

  async get<T>(url: string, options?: FetchOptions) {
    try {
      const data = await $fetch<T>(`${this.baseUrl}${url}`, {
        ...options,
        ...this.options,
        credentials: 'include',
        method: 'GET',
      })

      // console.log('data', data)
      return data
    }
    catch (error) {
      return error
    }
  }

  async delete<T>(url: string, options?: FetchOptions) {
    try {
      const data = await $fetch<T>(`${this.baseUrl}${url}`, {
        ...options,
        ...this.options,
        method: 'DELETE',
        credentials: 'include',

      })
      return data
    }
    catch (error) {
      return Promise.reject(error)
    }
  }
}