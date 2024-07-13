<script setup>
import AddName from '@/components/trick-names/AddName.vue'
import getUser from '@/composables/getUser'
import useDocument from '@/composables/useDocument'

const props = defineProps({ trick: Object })
const { user } = getUser()
const { updateDocument } = useDocument('tricks', props.trick.id)

const handleDeleteName = async (name) => {
  const newNameList = props.trick.names.filter((n) => n.name != name)
  await updateDocument({ names: newNameList })
}
</script>

<template>
  <div class="grow p-2 rounded-md bg-slate-200">
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
</template>
