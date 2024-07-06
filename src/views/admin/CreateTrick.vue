<script setup>
import useCollection from '@/composables/useCollection'

const { error, addItemtoDB, isPending } = useCollection('tricks')

const trickName = defineModel('trickName', { default: null })
const altNames = defineModel('altNames', { default: null })
const inventor = defineModel('inventor', { default: null })
const description = defineModel('description', { default: null })
const history = defineModel('history', { default: null })
const videos = defineModel('videos', { default: null })
const relatedTricks = defineModel('relatedTricks', { default: null })
const sources = defineModel('sources', { default: null })
const tags = defineModel('tags', { default: [] })
const newTag = defineModel('newTag')
const motionTags = defineModel('motionTags', { default: null })

const handleAddTag = () => {
  tags.value.push(newTag.value)
  newTag.value = ''
}

const handleSubmit = async () => {
  const res = await addItemtoDB({
    trickName: trickName.value,
    altNames: altNames.value,
    inventor: inventor.value,
    description: description.value,
    history: history.value,
    videos: videos.value,
    relatedTricks: relatedTricks.value,
    sources: sources.value,
    tags: tags.value,
    motionTags: motionTags.value
  })
}
</script>

<template>
  <h1 class="text-3xl text-center m-4">Add a new trick</h1>

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

    <label for="newTag" class="mt-2 text-sm font-semibold">Tags: {{ tags }}</label>
    <input
      type="text"
      id="newTag"
      placeholder="Add Tag"
      v-model="newTag"
      @keypress.enter.prevent="handleAddTag"
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
      v-if="!isPending"
      class="text-white bg-blue-900 mx-auto mt-4 shrink px-4 py-2 rounded-lg border-2 border-blue-900"
    >
      Add trick
    </button>
    <button
      v-if="isPending"
      class="text-white bg-gray-500 mt-4 mx-auto shrink px-4 py-2 rounded-lg border-2 border-gray-500"
      disabled
    >
      Loading...
    </button>
  </form>
</template>
