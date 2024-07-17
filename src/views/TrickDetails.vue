<script setup>
import getDocument from '@/composables/getDocument'
import getUser from '@/composables/getUser'

import TrickNames from '@/components/trick-names/TrickNames.vue'
import TrickInventors from '@/components/trick-inventors/TrickInventors.vue'
import TrickTags from '@/components/trick-tags/TrickTags.vue'

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
      <RouterLink :to="{ name: 'EditTrick' }" class="m-2 text-sky-700 hover:underline">
        edit
      </RouterLink>
    </div>

    <!-- trick meta info -->
    <div class="flex space-x-4 my-4">
      <TrickNames :trick="trick" />

      <TrickInventors :trick="trick" />

      <TrickTags :trick="trick" />
    </div>

    <!-- trick description -->
    <div v-if="trick.description" class="mx-auto my-4 px-20">
      <h3 class="text-2xl text-center">Description</h3>
      <span v-html="trick.description"></span>
    </div>

    <!-- trick videos -->
    <div v-if="trick.videos" class="mx-auto my-4 px-20">
      <h3 class="text-2xl text-center">Videos</h3>
      <span v-html="trick.videos"></span>
    </div>

    <!-- trick history -->
    <div v-if="trick.history" class="mx-auto my-4 px-20">
      <h3 class="text-2xl text-center">History</h3>
      <span v-html="trick.history"></span>
    </div>

    <!-- related tricks -->
    <div v-if="trick.relatedTricks" class="bg-slate-200 my-4 rounded-md p-2">
      <h4 class="font-bold">Related Tricks</h4>
      {{ trick.relatedTricks }}
    </div>

    <!-- sources -->
    <div v-if="trick.sources" class="bg-slate-200 my-4 rounded-md p-2">
      <h4 class="font-bold">Sources</h4>
      <span v-html="trick.sources"></span>
    </div>
  </div>
</template>
