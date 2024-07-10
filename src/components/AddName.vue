<script setup>
import useDocument from '@/composables/useDocument'

const props = defineProps({ trick: Object })
const showForm = defineModel('showForm', { default: false })
const name = defineModel('name')
const showInToC = defineModel('showInToC', { default: true })
const { updateDocument } = useDocument('tricks', props.trick.id)

const handleSubmit = async () => {
  const newName = {
    name: name.value,
    showInToC: showInToC.value
  }
  await updateDocument({
    names: [...props.trick.names, newName]
  })
  name.value = ''
  showInToC.value = false
}
</script>

<template>
  <button
    v-if="!showForm"
    @click="showForm = true"
    class="text-slate-50 bg-sky-700 px-2 pb-0.5 rounded-full"
  >
    +
  </button>

  <form @submit.prevent="handleSubmit" v-if="showForm">
    <input
      type="text"
      id="name"
      placeholder="Add name"
      v-model="name"
      class="rounded-md px-2 text-sm ml-1"
      @keypress.enter.prevent
    />
    <label for="showInToC" class="ml-3">
      <input type="checkbox" id="showInToC" v-model="showInToC" />
      <span class="text-sm ml-1">show in ToC?</span>
    </label>
    <button class="text-sm text-slate-50 bg-sky-700 rounded-lg px-2 ml-2">Add</button>
    <button @click="showForm = false" class="text-xs pl-2">close [x]</button>
  </form>
</template>
