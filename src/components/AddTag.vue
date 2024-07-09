<script setup>
import useDocument from '@/composables/useDocument'

const props = defineProps({ trick: Object, tagType: String })
const { updateDocument } = useDocument('tricks', props.trick.id)

const showForm = defineModel('showForm', { default: false })
const newTag = defineModel('newTag')

const handleSubmit = async () => {
  if (props.tagType == 'general') {
    await updateDocument({
      tags: [...props.trick.tags, newTag.value]
    })
  } else {
    await updateDocument({
      motionTags: [...props.trick.motionTags, newTag.value]
    })
  }

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
        class="rounded-md px-2 text-sm ml-1"
      />
      <button @click="showForm = false" class="text-xs pl-2">close [x]</button>
    </form>
  </div>
</template>
