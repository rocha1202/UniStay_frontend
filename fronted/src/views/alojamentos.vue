<template>
  <div class="page">
    <h2>🏠 Procurar Alojamentos</h2>

    <form class="filters" @submit.prevent="pesquisar">
      <input v-model="filtros.zona" type="text" placeholder="Zona" />
      <input v-model.number="filtros.preco_min" type="number" placeholder="Preço mínimo (€)" min="0" />
      <input v-model.number="filtros.preco_max" type="number" placeholder="Preço máximo (€)" min="0" />
      <input v-model.number="filtros.camas" type="number" placeholder="Nº mínimo de camas" min="1" />

      <select v-model="filtros.tipo_quarto">
        <option disabled value="">Tipo de quarto</option>
        <option value="privado">Privado</option>
        <option value="partilhado">Partilhado</option>
        <option value="estudio">Estúdio</option>
        <option value="apartamento">Apartamento</option>
      </select>

      <input v-model="filtros.disponivel_em" type="date" placeholder="Disponível em" />

      <button type="submit">Pesquisar</button>
      <button type="button" @click="limparFiltros" class="limpar">Limpar</button>
    </form>

    <div v-if="alojamentos.length === 0" class="sem-resultados">
      <p>⚠️ Nenhum alojamento encontrado com os critérios indicados.</p>
    </div>

    <div class="card-grid" v-else>
      <div class="card" v-for="(item, index) in alojamentos" :key="index">
        <h3>{{ item.titulo }}</h3>
        <p>{{ item.zona }}</p>
        <p>€{{ item.preco }}/mês — {{ item.tipo_quarto }}</p>
        <p>⭐ {{ item.classificacao }}/5</p>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted} from 'vue'
import axios from 'axios'

const alojamentos = ref([])
const filtros = ref({
  zona: '',
  preco_min: '',
  preco_max: '',
  camas: '',
  tipo_quarto: '',
  disponivel_em: ''
})

async function pesquisar() {
  try {
    const res = await axios.get('http://localhost:3000/alojamentos/pesquisa', {
      params: filtros.value
    })
    alojamentos.value = res.data
  } catch (err) {
    console.error('Erro ao pesquisar alojamentos:', err)
  }
}

function limparFiltros() {
  filtros.value = {
    zona: '',
    preco_min: '',
    preco_max: '',
    camas: '',
    tipo_quarto: '',
    disponivel_em: ''
  }
  pesquisar()
}

onMounted(() => {
  pesquisar()
})


</script>

<style scoped>
.page {
  padding: 2rem;
}
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}
.filters input,
.filters select {
  padding: 0.5rem;
  flex: 1 1 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.filters button {
  background-color: #2c3e50;
  color: white;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}
.card-grid {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.card {
  background: #f0f0f0;
  padding: 1rem;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
