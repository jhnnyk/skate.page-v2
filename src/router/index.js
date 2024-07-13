import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import CreateTrick from '@/views/admin/CreateTrick.vue'
import TrickDetails from '@/views/TrickDetails.vue'
import EditTrick from '@/views/admin/EditTrick.vue'
import TrickIndex from '@/views/TrickIndex.vue'
import InventorsIndex from '@/views/InventorsIndex.vue'
import InventorDetails from '@/views/InventorDetails.vue'
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
    },
    {
      path: '/tricks/:id',
      name: 'TrickDetails',
      component: TrickDetails,
      props: true
    },
    {
      path: '/tricks/:id/edit',
      name: 'EditTrick',
      component: EditTrick,
      props: true
    },
    {
      path: '/tricks',
      name: 'TrickIndex',
      component: TrickIndex
    },
    {
      path: '/inventors',
      name: 'InventorsIndex',
      component: InventorsIndex
    },
    {
      path: '/inventor/:name',
      name: 'InventorDetails',
      component: InventorDetails,
      props: true
    }
  ]
})

export default router
