import { createRouter, createWebHistory } from 'vue-router'
import Industrial from "@/views/Industrial"
import Office from "@/views/Office"
import Retail from "@/views/Retail"
import Residential from "@/views/Residential"

const routes = [
  {
    path: '/',
    name: 'industrial',
    component: Industrial
  },
  {
    path: '/office',
    name: 'office',
    component: Office
  },
  {
    path: '/retail',
    name: 'retail',
    component: Retail
  },
  {
    path: '/residential',
    name: 'residential',
    component: Residential
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
