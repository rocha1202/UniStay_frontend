<template>
  <div class="auth-wrapper">
    <div class="auth-container">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Palavra-passe" required />
        <button type="submit">Entrar</button>
        <p>Ainda não tens conta? <router-link to="/register">Registar</router-link></p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const email = ref('')
const password = ref('')
const router = useRouter()

async function handleLogin() {
  try {
    const res = await axios.post('http://localhost:3000/auth/login', {
      email: email.value,
      password: password.value
    });


    // Check if the response contains a token
    if (res.data && res.data.token) {
      localStorage.setItem('token', res.data.token);
      alert('Login efetuado com sucesso!');


      const auth = useAuthStore();
      auth.login(res.data.token); // Use the token from the response


      router.push('/alojamentos');
    } else {
      alert('Erro: Token não recebido.');
    }
  } catch (err) {
    console.error('Erro no login:', err);
    alert('Credenciais inválidas.');
  }
}

</script>

<style scoped>
.auth-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 100px);
  padding: 1rem;
}

.auth-container {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background: #f7f7f7;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
