import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { jwtDecode } from 'jwt-decode'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('token') || null)

  const isLoggedIn = computed(() => !!token.value)

  const isTokenValid = computed(() => {
    if (!token.value) return false
    try {
      const decoded = jwtDecode(token.value)
      return decoded.exp * 1000 > Date.now()
    } catch (err) {
      return false
    }
  })

  function login(newToken) {
    token.value = newToken
    localStorage.setItem('token', newToken)
  }

  function logout() {
    token.value = null
    localStorage.removeItem('token')
  }

  return {
    token,
    isLoggedIn,
    isTokenValid,
    login,
    logout
  }
})
