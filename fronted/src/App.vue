<template>
  <div class="layout">
    <Navbar />
    <main class="content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

function checkTokenExpiration() {
  const token = localStorage.getItem('token')
  const expiration = localStorage.getItem('tokenExpiration')

  if (token && expiration && Date.now() >= Number(expiration)) {
    auth.logout()
    router.push('/login')
    alert('Sessão expirada. Por favor, entra novamente.') // ou usa modal
  }
}

onMounted(() => {
  setInterval(checkTokenExpiration, 5000) // verifica a cada 5 segundos
})

</script>;

<style>
html, body, #app {
  height: 100%;
  margin: 0;
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>
