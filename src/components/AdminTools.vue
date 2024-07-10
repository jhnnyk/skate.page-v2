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
  <div class="flex justify-end">
    <div class="shrink text-slate-50 text-sm pl-5 pr-2 bg-sky-700 rounded-bl-lg">
      admin:
      <RouterLink :to="{ name: 'CreateTrick' }" class="m-2 text-slate-50 hover:underline">
        Add trick
      </RouterLink>
      <button @click="handleLogout" class="m-2 text-slate-50 hover:underline">Logout</button>
    </div>
  </div>
</template>
