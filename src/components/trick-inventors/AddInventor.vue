<script setup>
import useDocument from '@/composables/useDocument'

const props = defineProps({ trick: Object })
const { updateDocument } = useDocument('tricks', props.trick.id)

const showForm = defineModel('showForm', { default: false })
const newInventor = defineModel('newInventor')

const handleSubmit = async () => {
  await updateDocument({
    inventors: [...props.trick.inventors, newInventor.value]
  })
  newInventor.value = ''
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

  <form v-if="showForm">
    <input
      type="text"
      id="inventor"
      placeholder="Add inventor"
      v-model="newInventor"
      @keypress.enter.prevent="handleSubmit"
      class="rounded-md px-2 text-sm ml-1"
    />
    <button @click="showForm = false" class="text-xs pl-2">close [x]</button>
  </form>
</template>
