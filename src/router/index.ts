import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/gestor',
      name: 'gestor',
      component: () => import('../views/gestor/GestorLayout.vue')
    }
  ]
})

export default router
