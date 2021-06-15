import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/resources/views/home/index.vue'

import viewController from '@/controllers/viewController';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: viewController.load('about')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
