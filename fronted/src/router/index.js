import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import alojamentos from '../views/alojamentos.vue'
import eventos from '../views/eventos.vue'
import perfil from '../views/perfil.vue'



import NotFound from '../views/NotFound.vue'  

const routes = [
  { path: '/', name: 'LandingPage', component: LandingPage },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/alojamentos', name: 'Alojamentos', component: alojamentos },
  { path: '/eventos', name: 'Eventos', component: eventos },
  { path: '/perfil', name: 'Perfil', component: perfil },

  {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound} 
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router