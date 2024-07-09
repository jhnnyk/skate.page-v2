<script setup>
import useDocument from '@/composables/useDocument'

const props = defineProps({ trick: Object })
const { updateDocument } = useDocument('tricks', props.trick.id)

const showForm = defineModel('showForm', { default: false })
const newTag = defineModel('newTag')

const handleSubmit = async () => {
  await updateDocument({
    tags: [...props.trick.tags, newTag.value]
  })
  newTag.value = ''
}
</script>

<template>
  <div>
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
        id="tag"
        placeholder="New tag"
        v-model="newTag"
        @keypress.enter.prevent="handleSubmit"
      />
      <button @click="showForm = false" class="text-xs pl-2">close</button>
    </form>
  </div>
</template>
