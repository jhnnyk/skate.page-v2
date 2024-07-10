<script setup>
import useCollection from '@/composables/useCollection'
import { useRouter } from 'vue-router'

const { error, addItemtoDB, isPending } = useCollection('tricks')
const router = useRouter()

const title = defineModel('title', { default: null })
const names = defineModel('names', { default: [] })
const inventor = defineModel('inventor', { default: null })
const description = defineModel('description', { default: null })
const history = defineModel('history', { default: null })
const videos = defineModel('videos', { default: null })
const relatedTricks = defineModel('relatedTricks', { default: [] })
const sources = defineModel('sources', { default: null })
const tags = defineModel('tags', { default: [] })
// const newTag = defineModel('newTag')
const motionTags = defineModel('motionTags', { default: [] })
// const newMotionTag = defineModel('newMotionTag')

// const handleAddTag = () => {
//   if (!tags.value.includes(newTag.value)) {
//     tags.value.push(newTag.value)
//     newTag.value = ''
//   }
// }

// const handleAddMotionTag = () => {
//   if (!motionTags.value.includes(newMotionTag.value)) {
//     motionTags.value.push(newMotionTag.value)
//     newMotionTag.value = ''
//   }
// }

const handleSubmit = async () => {
  const res = await addItemtoDB({
    title: title.value,
    names: names.value,
    inventor: inventor.value,
    description: description.value,
    history: history.value,
    videos: videos.value,
    relatedTricks: relatedTricks.value,
    sources: sources.value,
    tags: tags.value,
    motionTags: motionTags.value
  })
  if (!error.value) {
    router.push({ name: 'TrickDetails', params: { id: res.id } })
  }
}
</script>

<template>
  <h1 class="text-3xl text-center m-4">Add a new trick</h1>

  <form @submit.prevent="handleSubmit" class="flex flex-col max-w-96 mx-auto pb-14">
    <!-- trick title -->
    <label for="title" class="mt-2 text-sm font-semibold">Trick Name:</label>
    <input
      type="text"
      id="title"
      placeholder="Trick Name"
      v-model="title"
      class="rounded-md shadow-sm p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
    />

    <!-- alternate names for trick -->
    <!-- <label for="names" class="mt-2 text-sm font-semibold">Alternate Trick Names:</label>
    <input
      type="text"
      id="names"
      placeholder="Alternate Trick Name"
      v-model="names"
      class="rounded-md shadow-sm p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
    /> -->

    <!-- trick inventor -->
    <label for="inventor" class="mt-2 text-sm font-semibold">Inventor:</label>
    <input
      type="text"
      id="inventor"
      placeholder="Inventor"
      v-model="inventor"
      class="rounded-md shadow-sm p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
    />

    <!-- trick description -->
    <label for="description" class="mt-2 text-sm font-semibold">Description:</label>
    <textarea
      id="description"
      placeholder="Description..."
      v-model="description"
      class="rounded-md shadow-sm p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
    ></textarea>

    <!-- trick history -->
    <label for="history" class="mt-2 text-sm font-semibold">History:</label>
    <textarea
      id="history"
      placeholder="History..."
      v-model="history"
      class="rounded-md shadow-sm p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
    ></textarea>

    <!-- videos -->
    <label for="videos" class="mt-2 text-sm font-semibold">Videos:</label>
    <textarea
      id="videos"
      placeholder="Videos..."
      v-model="videos"
      class="rounded-md shadow-sm p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
    ></textarea>

    <!-- related tricks -->
    <!-- <label for="relatedTricks" class="mt-2 text-sm font-semibold">Related Tricks:</label>
    <input
      type="text"
      id="relatedTricks"
      placeholder="Related Tricks"
      v-model="relatedTricks"
      class="rounded-md shadow-sm p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
    /> -->

    <!-- trick sources -->
    <label for="sources" class="mt-2 text-sm font-semibold">Sources:</label>
    <textarea
      id="sources"
      placeholder="Sources..."
      v-model="sources"
      class="rounded-md shadow-sm p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
    ></textarea>

    <!-- tags -->
    <!-- <label for="newTag" class="mt-2 text-sm font-semibold">Tags: {{ tags }}</label>
    <input
      type="text"
      id="newTag"
      placeholder="Add Tag"
      v-model="newTag"
      @keypress.enter.prevent="handleAddTag"
      class="rounded-md shadow-sm p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
    /> -->

    <!-- motion tags -->
    <!-- <label for="motionTags" class="mt-2 text-sm font-semibold">Motion Tags: {{ motionTags }}</label>
    <input
      type="text"
      id="motionTags"
      placeholder="Motion Tags"
      v-model="newMotionTag"
      @keypress.enter.prevent="handleAddMotionTag"
      class="rounded-md shadow-sm p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
    /> -->

    <!-- error message -->
    <div v-if="error" class="text-red-600 m-4">{{ error }}</div>

    <!-- submit button -->
    <button
      v-if="!isPending"
      class="text-white bg-blue-900 mx-auto mt-4 shrink px-4 py-2 rounded-lg border-2 border-blue-900"
    >
      Add trick
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
</template>
