<template>
  <div class="not-found-container">
    <h1>404 - Página não encontrada</h1>
    <p>A página que você está há procura não existe.</p>
    <router-link to="/">Voltar para a página inicial</router-link>
  </div>
</template>



<script>
export default {
  name: 'NotFound'
}
</script>



<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #444;
}



h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #e63946;
}



p {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
}



a {
  font-weight: bold;
  color: #1d3557;
  text-decoration: underline;
  cursor: pointer;
}



a:hover {
  color: #457b9d;
}
</style>

