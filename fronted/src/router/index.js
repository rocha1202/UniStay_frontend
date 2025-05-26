import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import alojamentos from '../views/alojamentos.vue'
import eventos from '@/views/eventos.vue'

const routes = [
  { path: '/', name: 'LandingPage', component: LandingPage },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  {path: '/alojamentos', name: 'Alojamentos', component: alojamentos },
  {path: '/eventos', name: 'Eventos', component: eventos },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
