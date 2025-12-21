import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFound from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('@/views/productView.vue'),
    },
    {
      path: '/product-1',
      name: 'product-1',
      component: () => import('@/views/ProductView-1.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/CartView.vue'),
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/UserView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: NotFound,
    }
  ],
})

export default router
