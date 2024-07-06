<script setup>
const props = defineProps({ action: String })

const trickName = defineModel('trickName')
const altNames = defineModel('altNames')
const inventor = defineModel('inventor')
const description = defineModel('description')
const history = defineModel('history')
const videos = defineModel('videos')
const relatedTricks = defineModel('relatedTricks')
const sources = defineModel('sources')
const tags = defineModel('tags')
const motionTags = defineModel('motionTags')

const handleSubmit = () => {
  if (props.action == 'Add') {
    console.log('add: ')
  }
  console.log(trickName.value)
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col max-w-96 mx-auto pb-14">
    <label for="trickName" class="mt-2 text-sm font-semibold">Trick Name:</label>
    <input
      type="text"
      id="trickName"
      placeholder="Trick Name"
      v-model="trickName"
      class="rounded-md shadow-sm p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
    />

    <label for="altNames" class="mt-2 text-sm font-semibold">Alternate Trick Names:</label>
    <input
      type="text"
      id="altNames"
      placeholder="Alternate Trick Name"
      v-model="altNames"
      class="rounded-md shadow-sm p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
    />

    <label for="inventor" class="mt-2 text-sm font-semibold">Inventor:</label>
    <input
      type="text"
      id="inventor"
      placeholder="Inventor"
      v-model="inventor"
      class="rounded-md shadow-sm p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
    />

    <label for="description" class="mt-2 text-sm font-semibold">Description:</label>
    <textarea
      id="description"
      placeholder="Description..."
      v-model="description"
      class="rounded-md shadow-sm p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
    ></textarea>

    <label for="history" class="mt-2 text-sm font-semibold">History:</label>
    <textarea
      id="history"
      placeholder="History..."
      v-model="history"
      class="rounded-md shadow-sm p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
    ></textarea>

    <label for="videos" class="mt-2 text-sm font-semibold">Videos:</label>
    <textarea
      id="videos"
      placeholder="Videos..."
      v-model="videos"
      class="rounded-md shadow-sm p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
    ></textarea>

    <label for="relatedTricks" class="mt-2 text-sm font-semibold">Related Tricks:</label>
    <input
      type="text"
      id="relatedTricks"
      placeholder="Related Tricks"
      v-model="relatedTricks"
      class="rounded-md shadow-sm p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
    />

    <label for="sources" class="mt-2 text-sm font-semibold">Sources:</label>
    <textarea
      id="sources"
      placeholder="Sources..."
      v-model="sources"
      class="rounded-md shadow-sm p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
    ></textarea>

    <label for="tags" class="mt-2 text-sm font-semibold">Tags:</label>
    <input
      type="text"
      id="tags"
      placeholder="Tags"
      v-model="tags"
      class="rounded-md shadow-sm p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
    />

    <label for="motionTags" class="mt-2 text-sm font-semibold">Motion Tags:</label>
    <input
      type="text"
      id="motionTags"
      placeholder="Motion Tags"
      v-model="motionTags"
      class="rounded-md shadow-sm p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
    />

    <button
      class="text-white bg-blue-900 mx-auto mt-4 shrink px-4 py-2 rounded-lg border-2 border-blue-900"
    >
      {{ props.action }} trick
    </button>
  </form>
</template>
