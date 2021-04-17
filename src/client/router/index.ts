import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../views/home-page.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
