import { createRouter, createWebHistory } from 'vue-router'
import Subsector from '@/views/Subsector.vue'
import Edit from '@/views/Edit.vue'
const routes = [
  {
    path: '/sndustrial',
    name: 'subsector',
    component: Subsector
  },
  {
    path: '/sndustrial/edit',
    name: 'edit',
    component: Edit
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
