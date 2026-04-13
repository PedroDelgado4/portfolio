import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: () => import('../views/InicioView.vue')
    },
    {
      path: '/educacion',
      name: 'educacion',
      component: () => import('../views/EducacionView.vue')
    },
    {
      path: '/experiencia',
      name: 'experiencia',
      component: () => import('../views/ExperienciaView.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/PortfolioView.vue')
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactoView.vue')
    }
  ],
})

export default router