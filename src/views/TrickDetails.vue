<script setup>
import getDocument from '@/composables/getDocument'
import getUser from '@/composables/getUser'

const props = defineProps({ id: String })
const { user } = getUser()

const { error, document: trick } = getDocument('tricks', props.id)
</script>

<template>
  <div v-if="error" class="text-red-500 m-4">{{ error }}</div>

  <div v-if="trick">
    <h1 class="text-5xl">{{ trick.title }}</h1>
    <div v-if="user">
      <RouterLink :to="{ name: 'EditTrick' }">edit</RouterLink>
    </div>

    {{ trick.altNames }}
    {{ trick.inventor }}
    {{ trick.description }}
    {{ trick.history }}
    {{ trick.videos }}
    {{ trick.relatedTricks }}
    {{ trick.sources }}
    {{ trick.tags }}
    {{ trick.motionTags }}
  </div>
</template>
