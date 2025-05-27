import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import { useAuthStore } from '@/stores/auth'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)

app.mount('#app')

const auth = useAuthStore()

setInterval(() => {
  const expiration = localStorage.getItem('tokenExpiration')
  if (expiration && Date.now() > Number(expiration)) {
    auth.logout()
    alert('Sessão expirada. Faz login novamente.')
    router.push('/login')
  }
}, 1000)
