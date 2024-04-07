import { createRouter, createWebHistory } from 'vue-router'
import Subsector from '@/views/Subsector.vue'
import EditSubsector from '@/views/EditSubsector.vue'
const routes = [
  {
    path: '/subsector',
    name: 'subsector',
    component: Subsector
  },
  {
    path: '/subsector/edit',
    name: 'edit',
    component: EditSubsector
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
