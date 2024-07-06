<script setup>
import getDocument from '@/composables/getDocument'

const props = defineProps({ id: String })

const { error, document: trick } = getDocument('tricks', props.id)
</script>

<template>
  <div v-if="error" class="text-red-500 m-4">{{ error }}</div>

  <div v-if="trick">
    {{ trick.title }}
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
