<script setup>
import useDocument from '@/composables/useDocument'
import AddTag from '@/components/trick-tags/AddTag.vue'
import getUser from '@/composables/getUser'
import { computed } from 'vue'

const { user } = getUser()
const props = defineProps({ trick: Object })
const { updateDocument } = useDocument('tricks', props.trick.id)

const handleDeleteTag = async (tagName) => {
  const newTagList = props.trick.tags.filter((tag) => tag != tagName)
  await updateDocument({ tags: newTagList })
}

const handleDeleteMotionTag = async (tagName) => {
  const newMotionTagList = props.trick.motionTags.filter((tag) => tag != tagName)
  await updateDocument({ motionTags: newMotionTagList })
}

const sortedTags = computed(() => {
  return [...props.trick.tags].sort()
})

const sortedMotionTags = computed(() => {
  return [...props.trick.motionTags].sort()
})
</script>

<template>
  <div class="grow p-2 rounded-md bg-slate-200">
    <h4 class="font-bold">Tags</h4>
    <!-- general tags -->
    <div class="flex">
      <div
        v-for="tagName in sortedTags"
        :key="tagName"
        class="text-slate-50 text-sm bg-sky-700 shrink m-1 px-2 rounded-md"
      >
        {{ tagName }}
        <button v-if="user" @click="handleDeleteTag(tagName)">
          <img
            src="/src/assets/icons/trash3-fill.svg"
            alt="delete"
            width="12"
            height="12"
            class="ml-1"
          />
        </button>
      </div>
      <AddTag v-if="user" :trick="trick" tagType="general" />
    </div>

    <!-- motion tags -->
    <div class="flex border-t-2 border-slate-50 mt-2 pt-2">
      <div
        v-for="motionTagName in sortedMotionTags"
        :key="motionTagName"
        class="text-slate-50 text-sm bg-sky-700 shrink m-1 px-2 rounded-md"
      >
        {{ motionTagName }}
        <button v-if="user" class="text-xs" @click="handleDeleteMotionTag(motionTagName)">
          <img
            src="/src/assets/icons/trash3-fill.svg"
            alt="delete"
            width="12"
            height="12"
            class="ml-1"
          />
        </button>
      </div>
      <AddTag v-if="user" :trick="trick" tagType="motionTag" />
    </div>
  </div>
</template>
