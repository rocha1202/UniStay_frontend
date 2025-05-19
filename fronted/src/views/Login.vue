<template>
  <div class="auth-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Palavra-passe" required />
      <button type="submit">Entrar</button>
      <p>Ainda não tens conta? <router-link to="/register">Registar</router-link></p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

function handleLogin() {
  console.log('Login com:', email.value, password.value)
  // Aqui ligarás à tua API
}
</script>

<style scoped>
.auth-container {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: #f7f7f7;
  border-radius: 10px;
  text-align: center;
}
input {
  display: block;
  width: 100%;
  margin: 1rem 0;
  padding: 0.8rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}
button {
  width: 100%;
  padding: 0.8rem;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
