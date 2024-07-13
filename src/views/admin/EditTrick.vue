<script setup>
import getDocument from '@/composables/getDocument'
import useDocument from '@/composables/useDocument'
import { useRouter } from 'vue-router'

const props = defineProps({ id: String })
const router = useRouter()

const { error, document: trick } = getDocument('tricks', props.id)
const { error: editError, isPending, updateDocument } = useDocument('tricks', props.id)

const handleSubmit = async () => {
  await updateDocument(trick.value)
  if (!editError.value) {
    router.push({ name: 'TrickDetails', params: { id: props.id } })
  }
}
</script>

<template>
  <div v-if="error" class="text-red-500 m-4">{{ error }}</div>
  <div v-if="trick">
    <h1 class="text-3xl text-center m-4">Edit {{ trick.title }}</h1>

    <form @submit.prevent="handleSubmit" class="flex flex-col max-w-96 mx-auto pb-14">
      <!-- trick title -->
      <label for="title" class="mt-2 text-sm font-semibold">Trick Name:</label>
      <input
        type="text"
        id="title"
        placeholder="Trick Name"
        v-model="trick.title"
        class="rounded-md shadow-sm p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
      />

      <!-- trick inventor -->
      <!-- <label for="inventor" class="mt-2 text-sm font-semibold">Inventor:</label>
      <input
        type="text"
        id="inventor"
        placeholder="Inventor"
        v-model="trick.inventor"
        class="rounded-md shadow-sm p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
      /> -->

      <!-- trick description -->
      <label for="description" class="mt-2 text-sm font-semibold">Description:</label>
      <textarea
        id="description"
        placeholder="Description..."
        v-model="trick.description"
        class="rounded-md shadow-sm p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
      ></textarea>

      <!-- trick history -->
      <label for="history" class="mt-2 text-sm font-semibold">History:</label>
      <textarea
        id="history"
        placeholder="History..."
        v-model="trick.history"
        class="rounded-md shadow-sm p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
      ></textarea>

      <!-- videos -->
      <label for="videos" class="mt-2 text-sm font-semibold">Videos:</label>
      <textarea
        id="videos"
        placeholder="Videos..."
        v-model="trick.videos"
        class="rounded-md shadow-sm p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
      ></textarea>

      <!-- related tricks -->
      <!-- <label for="relatedTricks" class="mt-2 text-sm font-semibold">Related Tricks:</label>
      <input
        type="text"
        id="relatedTricks"
        placeholder="Related Tricks"
        v-model="trick.relatedTricks"
        class="rounded-md shadow-sm p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
      /> -->

      <!-- trick sources -->
      <label for="sources" class="mt-2 text-sm font-semibold">Sources:</label>
      <textarea
        id="sources"
        placeholder="Sources..."
        v-model="trick.sources"
        class="rounded-md shadow-sm p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
      ></textarea>

      <!-- error message -->
      <div v-if="editError" class="text-red-600 m-4">{{ editError }}</div>

      <!-- submit button -->
      <button
        v-if="!isPending"
        class="text-white bg-blue-900 mx-auto mt-4 shrink px-4 py-2 rounded-lg border-2 border-blue-900"
      >
        Update trick
      </button>

      <!-- loading button -->
      <button
        v-if="isPending"
        class="text-white bg-gray-500 mt-4 mx-auto shrink px-4 py-2 rounded-lg border-2 border-gray-500"
        disabled
      >
        Loading...
      </button>
    </form>
  </div>
</template>
