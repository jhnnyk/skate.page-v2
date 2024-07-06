<script setup>
import useLogout from '@/composables/useLogout'
import { useRouter } from 'vue-router'

const { logout } = useLogout()
const router = useRouter()

const handleLogout = async () => {
  await logout()
  console.log('user logged out')
  router.push({ name: 'Login' })
}
</script>

<template>
  <div class="border-2 border-blue-900 p-2">
    admin
    <RouterLink :to="{ name: 'CreateTrick' }" class="m-2 text-blue-900 hover:underline">
      Add trick
    </RouterLink>
    Edit this page
    <button @click="handleLogout" class="m-2 text-blue-900 hover:underline">Logout</button>
  </div>
</template>
