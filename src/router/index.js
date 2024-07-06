import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import CreateTrick from '@/views/admin/CreateTrick.vue'
import { auth } from '@/firebase/config'

// route guards
const requireAuth = (to, from, next) => {
  let user = auth.currentUser

  if (!user) {
    next({ name: 'Login' })
  } else {
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/tricks/create',
      name: 'CreateTrick',
      component: CreateTrick,
      beforeEnter: requireAuth
    }
  ]
})

export default router
