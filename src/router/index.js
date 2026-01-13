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
  ],
  scrollBehavior(to, from, savedPosition) {
    // 如果有保存的位置（如浏览器后退），使用保存的位置
    if (savedPosition) {
      return savedPosition
    } else {
      // 否则滚动到顶部
      return { top: 0, left: 0 }
    }
  }
})

export default router
