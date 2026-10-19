import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../layouts/BaseLayout.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
