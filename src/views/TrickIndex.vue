<script setup>
import getCollection from '@/composables/getCollection'
import { ref, watch } from 'vue'

const { documents: tricks } = getCollection('tricks')

const allNames = ref([])

watch(tricks, async () => {
  tricks.value.forEach((trick) => {
    trick.names.forEach((n) => {
      if (n.showInToC) {
        allNames.value.push({ name: n.name, id: trick.id })
      }
    })
  })
})
</script>

<template>
  <h1 class="text-5xl text-center m-4">Trick Index</h1>
  <div v-if="tricks">
    <ul v-for="trickName in allNames" :key="trickName">
      <li>
        <RouterLink
          :to="{ name: 'TrickDetails', params: { id: trickName.id } }"
          class="text-blue-900 hover:underline"
        >
          {{ trickName.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
