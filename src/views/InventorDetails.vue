<script setup>
import getCollection from '@/composables/getCollection'

const props = defineProps({ name: String })

const { documents: tricks } = getCollection('tricks', ['inventors', 'array-contains', props.name])
</script>

<template>
  <h1 class="text-5xl text-center my-4">{{ name }}</h1>
  <p class="text-center pt-4">Tricks invented:</p>
  <ul v-for="trick in tricks" :key="trick.id" class="text-center">
    <li>
      <RouterLink
        :to="{ name: 'TrickDetails', params: { id: trick.id } }"
        class="text-sky-700 hover:underline"
      >
        {{ trick.title }}
      </RouterLink>
    </li>
  </ul>
</template>
