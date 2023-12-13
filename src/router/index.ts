import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/layout/Layout.vue'
import { routerVue } from './routerVue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // vite中需要加module: 'EsNext' 不然会有ts类型
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children: [...routerVue]
    },
    {
      path: '/404',
      name: 'Page404',
      component: () => import('../views/layout/ResultPage404.vue')
    }
    // {
    //   path: '/login',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
