<script setup>
import getDocument from '@/composables/getDocument'
import useDocument from '@/composables/useDocument'
import getUser from '@/composables/getUser'
import AddTag from '@/components/AddTag.vue'
import AddName from '@/components/AddName.vue'

const props = defineProps({ id: String })
const { user } = getUser()
const { error, document: trick } = getDocument('tricks', props.id)
const { updateDocument } = useDocument('tricks', props.id)

const handleDeleteTag = async (tagName) => {
  const newTagList = trick.value.tags.filter((tag) => tag != tagName)
  await updateDocument({ tags: newTagList })
}

const handleDeleteMotionTag = async (tagName) => {
  const newMotionTagList = trick.value.motionTags.filter((tag) => tag != tagName)
  await updateDocument({ motionTags: newMotionTagList })
}

const handleDeleteName = async (name) => {
  const newNameList = trick.value.names.filter((n) => n.name != name)
  await updateDocument({ names: newNameList })
}
</script>

<template>
  <div v-if="error" class="text-red-500 m-4">{{ error }}</div>

  <div v-if="trick">
    <!-- trick title -->
    <h1 class="text-5xl text-center mt-4">{{ trick.title }}</h1>
    <!-- admin -->
    <div v-if="user" class="text-center text-sm">
      <RouterLink :to="{ name: 'EditTrick' }" class="m-2 text-blue-900 hover:underline">
        edit
      </RouterLink>
    </div>

    <!-- trick meta info -->
    <div class="flex space-x-4 my-4">
      <div class="grow p-2 rounded-md bg-slate-200">
        <!-- trick names -->
        <h4 class="font-bold">Names</h4>
        <ul v-for="name in trick.names" :key="name" class="list-disc ml-4">
          <li>
            <div class="flex">
              {{ name.name }}

              <img
                src="/src/assets/icons/eye-slash-fill.svg"
                alt="show in ToC"
                width="20"
                height="20"
                v-if="user && !name.showInToC"
                class="ml-1"
              />
              <button class="text-xs ml-1" @click="handleDeleteName(name.name)" v-if="user">
                <img
                  src="/src/assets/icons/trash3-fill.svg"
                  alt="delete"
                  width="14"
                  height="14"
                  v-if="user"
                  class="ml-1"
                />
              </button>
            </div>
          </li>
        </ul>
        <AddName v-if="user" :trick="trick" />
      </div>

      <!-- trick inventor -->
      <div v-if="trick.inventor" class="grow p-2 rounded-md bg-slate-200">
        <h4 class="font-bold">Inventor</h4>
        {{ trick.inventor }}
      </div>

      <!-- trick tags -->
      <div class="grow p-2 rounded-md bg-slate-200">
        <h4 class="font-bold">Tags</h4>
        <!-- general tags -->
        <div v-if="trick.tags" class="flex">
          <div
            v-for="tagName in trick.tags"
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
        <div v-if="trick.motionTags" class="flex border-t-2 border-slate-50 mt-2 pt-2">
          <div
            v-for="motionTagName in trick.motionTags"
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
    </div>

    <!-- trick description -->
    <div v-if="trick.description" class="mx-auto my-4 px-20">
      <h3 class="text-2xl text-center">Description</h3>
      {{ trick.description }}
    </div>

    <!-- trick videos -->
    <div v-if="trick.videos" class="mx-auto my-4 px-20">
      <h3 class="text-2xl text-center">Videos</h3>
      {{ trick.videos }}
    </div>

    <!-- trick history -->
    <div v-if="trick.history" class="mx-auto my-4 px-20">
      <h3 class="text-2xl text-center">History</h3>
      {{ trick.history }}
    </div>

    <!-- related tricks -->
    <div v-if="trick.relatedTricks" class="bg-slate-200 my-4 rounded-md p-2">
      <h4 class="font-bold">Related Tricks</h4>
      {{ trick.relatedTricks }}
    </div>

    <!-- sources -->
    <div v-if="trick.sources" class="bg-slate-200 my-4 rounded-md p-2">
      <h4 class="font-bold">Sources</h4>
      {{ trick.sources }}
    </div>
  </div>
</template>
