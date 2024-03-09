import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesPage from '../pages/MemoriesPage.vue';

const routes = [
  {
    path: '/',
    name: "Home",
    redirect: '/memories'
  },
  {
    path: '/memories',
    name: 'MemoriesPage',
    component: MemoriesPage,
  },
  {
    path: '/memories/:id',
    name: 'MemoryDetails',
    component: () => import('../pages/MemoryDetails.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

