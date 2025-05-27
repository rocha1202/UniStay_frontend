<template>
  <div class="auth-wrapper">
    <div class="auth-container">
      <h2>Registo</h2>
      <form @submit.prevent="handleRegister">
        <input v-model="nome" type="text" placeholder="Nome" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Palavra-passe" required />
        <select v-model="tipo" required>
          <option disabled value="">Escolhe o teu perfil</option>
          <option value="estudante">Estudante</option>
          <option value="facilitador">Facilitador</option>
        </select>
        <button type="submit">Criar Conta</button>
        <p>Já tens conta? <router-link to="/login">Login</router-link></p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const nome = ref('')
const email = ref('')
const password = ref('')
const tipo = ref('')

async function handleRegister() {
    console.log('Dados do registo:', {
      nome: nome.value,
      email: email.value,
      password: password.value,
      tipo: tipo.value
    })
    const res = await axios.post('http://localhost:3000/auth/register', {

      nome: nome.value,
      email: email.value,
      password: password.value,
      tipo: tipo.value
    })

    alert('Conta criada com sucesso!')
    router.push('/login') // redireciona para login após registo

}
</script>

<style scoped>
.auth-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 100px);
  /* ajusta conforme altura de Navbar/Footer */
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

input,
select {
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
