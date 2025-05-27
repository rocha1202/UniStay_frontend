<template>
  <nav class="navbar">
    <div class="logo">UniStay</div>
    <ul class="nav-links">
      <li><router-link to="/">Início</router-link></li>
      <li><router-link to="/alojamentos">Alojamentos</router-link></li>
      <li><router-link to="/eventos">Eventos</router-link></li>

      <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
      <li v-else><router-link to="/perfil">Minha Conta</router-link></li>
    </ul>
  </nav>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'

const auth = useAuthStore()
const { isLoggedIn } = storeToRefs(auth)
</script>


<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50;
  color: white;
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
}
.nav-links a {
  color: white;
  text-decoration: none;
}
.logo {
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
