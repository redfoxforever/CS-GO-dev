import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    alias: '/home',
    component: HomeView
  },
  {
    path: '/players',
    name: 'players',
    component: () => import('@/views/Players.vue')
  },
  {
    path: '/active players',
    name: 'active players',
    component: () => import('@/views/Active-Players.vue')
  },
  {
    path: '/competitions',
    name: 'competitions',
    component: () => import('@/views/Competitions.vue')
  },
  {
    path: '/teams',
    name: 'teams',
    component: () => import('@/views/Teams.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(function(to, from, next) {
  window.scrollTo(0, 0);
  next()
})

export default router
