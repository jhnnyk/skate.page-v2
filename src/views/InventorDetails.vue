<script setup>
import getCollection from '@/composables/getCollection'

const props = defineProps({ name: String })

const { documents: tricks } = getCollection('tricks', ['inventors', 'array-contains', props.name])
</script>

<template>
  <h1 class="text-5xl text-center">{{ name }}</h1>
  <ul v-for="trick in tricks" :key="trick.id">
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
