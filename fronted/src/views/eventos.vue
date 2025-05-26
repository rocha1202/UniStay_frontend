<template>
    <div class="page">
        <h2>🎉 Procurar Eventos</h2>

        <form class="filters" @submit.prevent="pesquisar">
            <select v-model="filtros.tipo">
                <option disabled value="">Tipo de evento</option>
                <option value="académico">Académico</option>
                <option value="cultural">Cultural</option>
                <option value="lúdico">Lúdico</option>
            </select>

            <input v-model="filtros.data" type="date" placeholder="Data" />
            <button type="submit">Pesquisar</button>
            <button type="button" @click="limparFiltros" class="limpar">Limpar</button>
        </form>

        <div v-if="eventos.length === 0" class="sem-resultados">
            <p>⚠️ Nenhum evento encontrado com os critérios indicados.</p>
        </div>

        <div class="card-grid" v-else>
            <div class="card" v-for="(item, index) in eventos" :key="index">
                <h3>{{ item.titulo }}</h3>
                <p>{{ item.descricao }}</p>
                <p>{{ item.tipo }}</p>
                <p>{{ formatarData(item.data) }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const eventos = ref([])
const filtros = ref({
    tipo: '',
    data: ''
})

async function pesquisar() {
    try {
        const res = await axios.get('http://localhost:3000/eventos', {
            params: filtros.value
        })
        eventos.value = res.data
    } catch (err) {
        console.error('Erro ao pesquisar eventos:', err)
    }
}

function limparFiltros() {
    filtros.value = {
        tipo: '',
        data: ''
    }
    pesquisar()
}

onMounted(() => {
    pesquisar()
})
function formatarData(dataISO) {
  const data = new Date(dataISO)
  return data.toLocaleDateString('pt-PT', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}

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

.limpar {
    background-color: #aaa;
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

.sem-resultados {
    background-color: #fef3c7;
    padding: 1rem;
    border-radius: 8px;
    margin-top: 1rem;
    color: #92400e;
}
</style>
