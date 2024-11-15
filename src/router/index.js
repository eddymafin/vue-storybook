import { createRouter, createWebHistory } from 'vue-router'
const adminRoutes = Object.entries(import.meta.glob('../views/admin/*.vue')).map(
  ([path, component]) => {
    const name = path.match(/\/admin\/(.+)\.vue$/)[1]
    return {
      path: `/admin/${name.toLowerCase()}`,
      name: `Admin${name}`,
      component,
    }
  },
)
const userRoutes = Object.entries(import.meta.glob('../views/user/*.vue')).map(
  ([path, component]) => {
    const name = path.match(/\/user\/(.+)\.vue$/)[1]
    return {
      path: `/user/${name.toLowerCase()}`,
      name: `user${name}`,
      component,
    }
  },
)
const editorRoutes = Object.entries(import.meta.glob('../views/editor/*.vue')).map(
  ([path, component]) => {
    const name = path.match(/\/editor\/(.+)\.vue$/)[1]
    return {
      path: `/editor/${name.toLowerCase()}`,
      name: `editor${name}`,
      component,
    }
  },
)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...adminRoutes, ...userRoutes, ...editorRoutes],
})
console.log(router)

export default router
