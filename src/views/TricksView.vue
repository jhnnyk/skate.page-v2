<script setup>
import getCollection from '@/composables/getCollection'

const { documents: tricks } = getCollection('tricks')
</script>

<template>
  <h1 class="text-5xl text-center m-4">All Tricks</h1>
  <p class="text-center m-2">Tricks listed by their main title in alphabetical order.</p>
  <div v-if="tricks">
    <ul v-for="trick in tricks" :key="trick.id">
      <li>
        <RouterLink
          :to="{ name: 'TrickDetails', params: { id: trick.id } }"
          class="text-blue-900 hover:underline"
        >
          {{ trick.title }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
