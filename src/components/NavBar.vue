<script setup>
import getUser from '@/composables/getUser'

const { user } = getUser()
</script>
<template>
  <header class="bg-gray-300 shadow-sm p-4">
    <nav>
      <RouterLink to="/" class="text-5xl">Skate.page</RouterLink>
      <span v-if="user">Hi there {{ user.email }}</span>
    </nav>
  </header>
</template>
