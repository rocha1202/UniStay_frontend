<template>
  <section class="hero">
    <h1>Bem-vindo à UniStay</h1>
    <p>Encontra alojamentos e eventos para estudantes em poucos cliques!</p>
    <button>Explorar Ofertas</button>
  </section>

  <section class="top-section">
    <h2>🎉 Top 3 Eventos</h2>
    <div class="card-grid">
      <div class="card" v-for="(evento, i) in topEventos" :key="i">
        <h3>{{ evento.titulo }}</h3>
        <p>{{ evento.data }} — {{ evento.local }}</p>
        <p>{{ evento.descricao }}</p>
      </div>
    </div>
  </section>

  <section class="top-section">
    <h2>🏠 Top 3 Alojamentos</h2>
    <div class="card-grid">
      <div class="card" v-for="(aloj, i) in topAlojamentos" :key="i">
        <h3>{{ aloj.titulo }}</h3>
        <p>{{ aloj.localizacao }}</p>
        <p>€{{ aloj.preco }}/mês — {{ aloj.tipo }}</p>
        <p>⭐ {{ aloj.classificacao }}/5</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const topEventos = [
  {
    titulo: 'Festa de Boas-vindas',
    data: '21 de Setembro',
    local: 'Auditório Principal',
    descricao: 'Uma festa para dar as boas-vindas aos novos alunos.'
  },
  {
    titulo: 'Feira de Clubes Académicos',
    data: '25 de Setembro',
    local: 'Pavilhão A',
    descricao: 'Conhece os clubes e associações académicas.'
  },
  {
    titulo: 'Sessão de Integração Internacional',
    data: '30 de Setembro',
    local: 'Sala 101',
    descricao: 'Sessão especial para estudantes internacionais.'
  }
]

const topAlojamentos = [
  {
    titulo: 'Quarto individual - Cedofeita',
    localizacao: 'Porto, Cedofeita',
    preco: 300,
    tipo: 'Quarto privado',
    classificacao: 4.8
  },
  {
    titulo: 'T2 partilhado - Matosinhos',
    localizacao: 'Matosinhos',
    preco: 250,
    tipo: 'Apartamento partilhado',
    classificacao: 4.5
  },
  {
    titulo: 'Estúdio moderno - Campanhã',
    localizacao: 'Porto, Campanhã',
    preco: 400,
    tipo: 'Estúdio completo',
    classificacao: 4.9
  }
]
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: #f5f5f5;
}
.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
button {
  background-color: #2c3e50;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.top-section {
  padding: 2rem;
  background: #ffffff;
}
.top-section h2 {
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.card-grid {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  background: #f0f0f0;
  padding: 1rem;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
</style>
