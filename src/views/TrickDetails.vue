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
    <!-- trick title -->
    <h1 class="text-5xl text-center mt-4">{{ trick.title }}</h1>
    <!-- admin -->
    <div v-if="user" class="text-center text-sm">
      <RouterLink :to="{ name: 'EditTrick' }" class="m-2 text-blue-900 hover:underline">
        edit
      </RouterLink>
    </div>

    <!-- trick meta info -->
    <div class="flex space-x-4 my-4">
      <div v-if="trick.altNames" class="grow p-2 rounded-md bg-gray-300">
        <h4 class="font-bold">Alternate Names</h4>
        {{ trick.altNames }}
      </div>

      <div v-if="trick.inventor" class="grow p-2 rounded-md bg-gray-300">
        <h4 class="font-bold">Inventor</h4>
        {{ trick.inventor }}
      </div>

      <div v-if="trick.tags || trick.motionTags" class="grow p-2 rounded-md bg-gray-300">
        <h4 class="font-bold">Tags</h4>
        {{ trick.tags }}
        <div v-if="trick.motionTags">
          {{ trick.motionTags }}
        </div>
      </div>
    </div>

    <!-- trick description -->
    <div v-if="trick.description" class="mx-auto my-4 px-20">
      <h3 class="text-2xl text-center">Description</h3>
      {{ trick.description }}
    </div>

    <!-- trick history -->
    <div v-if="trick.history" class="mx-auto my-4 px-20">
      <h3 class="text-2xl text-center">History</h3>
      {{ trick.history }}
    </div>

    <!-- trick videos -->
    <div v-if="trick.videos" class="mx-auto my-4 px-20">
      <h3 class="text-2xl text-center">Videos</h3>
      {{ trick.videos }}
    </div>

    <!-- related tricks -->
    <div v-if="trick.relatedTricks" class="bg-gray-300 my-4 rounded-md p-2">
      <h4 class="font-bold">Related Tricks</h4>
      {{ trick.relatedTricks }}
    </div>

    <!-- sources -->
    <div v-if="trick.sources" class="bg-gray-300 my-4 rounded-md p-2">
      <h4 class="font-bold">Sources</h4>
      {{ trick.sources }}
    </div>
  </div>
</template>
