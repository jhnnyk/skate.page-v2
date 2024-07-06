<script setup>
import AdminTools from '@/components/AdminTools.vue'
import getUser from '@/composables/getUser'

const { user } = getUser()
</script>

<template>
  <header class="flex justify-between items-center bg-gray-300 p-4">
    <RouterLink to="/" class="text-3xl">Skate.page</RouterLink>
    <nav>
      <RouterLink :to="{ name: 'TrickIndex' }" class="text-blue-900 hover:underline">
        Trick Index
      </RouterLink>
    </nav>
  </header>
  <AdminTools v-if="user" />
</template>
