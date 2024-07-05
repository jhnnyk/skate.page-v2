<script setup>
import AdminTools from '@/components/AdminTools.vue'
import getUser from '@/composables/getUser'

const { user } = getUser()
</script>

<template>
  <header class="bg-gray-300 shadow-sm p-4">
    <RouterLink to="/" class="text-5xl">Skate.page</RouterLink>
    <nav>Trick Index</nav>
  </header>
  <AdminTools v-if="user" />
</template>
