<script setup>
import getCollection from '@/composables/getCollection'
import { ref, watch } from 'vue'

const { documents: tricks } = getCollection('tricks')
const inventorList = ref([])

watch(tricks, async () => {
  tricks.value.forEach((trick) => {
    trick.inventors.forEach((inventor) => {
      if (!inventorList.value.includes(inventor)) {
        inventorList.value.push(inventor)
      }
    })
  })
})
</script>

<template>
  <h1 class="text-5xl text-center">Inventors</h1>
  <ul v-for="inventor in inventorList" :key="inventor">
    <li>
      <RouterLink
        :to="{ name: 'InventorDetails', params: { name: inventor } }"
        class="text-sky-700 hover:underline"
        >{{ inventor }}</RouterLink
      >
    </li>
  </ul>
</template>
