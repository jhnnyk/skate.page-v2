<script setup>
import getCollection from '@/composables/getCollection'
import { ref, watch } from 'vue'

const { documents: tricks } = getCollection('tricks')

const allNames = ref([])

watch(tricks, async () => {
  // reset the array of trick names
  allNames.value = []

  // get all trick names
  tricks.value.forEach((trick) => {
    trick.names.forEach((n) => {
      if (n.showInToC) {
        allNames.value.push({ name: n.name, id: trick.id })
      }
    })
  })

  // sort trick names
  allNames.value.sort((a, b) => {
    const nameA = a.name.toUpperCase() // ignore upper and lowercase
    const nameB = b.name.toUpperCase() // ignore upper and lowercase
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }

    // names must be equal
    return 0
  })
})
</script>

<template>
  <h1 class="text-5xl text-center m-4">Trick Index</h1>
  <p class="text-center m-2">Tricks listed by all their possible names in alphabetical order.</p>

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
