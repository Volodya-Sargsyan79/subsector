import { createRouter, createWebHistory } from 'vue-router'
import Subsector from '@/views/Subsector.vue'
import EditSubsector from '@/views/EditSubsector.vue'
import AddNewGrade from '@/views/AddNewGrade.vue'
const routes = [
  {
    path: '/subsector',
    name: 'subsector',
    component: Subsector
  },
  {
    path: '/subsector/add-new-grade',
    name: 'add-new-grade',
    component: AddNewGrade
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
