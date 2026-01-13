import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: '首页' }
    },
    {
      path: '/:category/:subItem',
      name: 'content',
      meta: { title: '内容' }
    }
  ]
})

export default router
