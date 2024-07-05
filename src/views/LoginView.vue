<script setup>
import useLogin from '@/composables/useLogin'
import { useRouter } from 'vue-router'

const { error, login, isPending } = useLogin()
const router = useRouter()

const email = defineModel('email')
const password = defineModel('password')

const handleSubmit = async () => {
  await login(email.value, password.value)
  if (!error.value) {
    router.push({ name: 'Home' })
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <h1 class="text-4xl p-4">Login</h1>
    <input
      class="rounded-full border-solid border-2 border-blue-900 px-4 py-2 mr-2"
      type="email"
      name="email"
      autocomplete="email"
      placeholder="Email"
      v-model="email"
    />
    <input
      class="rounded-full border-solid border-2 border-blue-900 px-4 py-2 mr-2"
      type="password"
      name="current-password"
      placeholder="Password"
      v-model="password"
    />
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending" class="text-white bg-blue-900 px-4 py-2 rounded-full">Login</button>
    <button v-if="isPending" disabled class="text-white bg-gray-500 px-4 py-2 rounded-full">
      Loading...
    </button>
  </form>
</template>
