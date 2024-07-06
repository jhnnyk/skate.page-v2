<script setup>
import getCollection from '@/composables/getCollection'

const { documents: tricks } = getCollection('tricks')
</script>

<template>
  <h1 class="text-5xl text-center m-4">Trick Index</h1>
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
