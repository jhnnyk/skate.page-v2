<script setup>
import AdminTools from '@/components/AdminTools.vue'
import getUser from '@/composables/getUser'

const { user } = getUser()
</script>

<template>
  <header class="flex justify-between items-center text-slate-50 bg-sky-700 p-4">
    <RouterLink to="/" class="text-3xl">Skate.page</RouterLink>
    <nav>
      <RouterLink :to="{ name: 'TrickIndex' }" class="text-slate-50 hover:underline">
        Trick Index
      </RouterLink>
    </nav>
  </header>
  <AdminTools v-if="user" />
</template>
