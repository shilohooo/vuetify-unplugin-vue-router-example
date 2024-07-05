/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: (routes) => {
    console.log(routes)
    const indexRoute = routes.find(r => r.name === '/')
    if (indexRoute) {
      // 访问首页将重定向到 src/index/home
      indexRoute.redirect = { path: 'home' }
    }
    return routes
  }
})

export default router
