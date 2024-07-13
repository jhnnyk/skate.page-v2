<script setup>
import getUser from '@/composables/getUser'
import AddInventor from '@/components/trick-inventors/AddInventor.vue'
import useDocument from '@/composables/useDocument'

const props = defineProps({ trick: Object })
const { user } = getUser()
const { updateDocument } = useDocument('tricks', props.trick.id)

const handleDeleteInventor = async (inventorName) => {
  const newInventorList = props.trick.inventors.filter((i) => i != inventorName)
  await updateDocument({ inventors: newInventorList })
}
</script>

<template>
  <div class="grow p-2 rounded-md bg-slate-200">
    <h4 class="font-bold">Inventor(s)</h4>
    <ul v-for="inventor in trick.inventors" :key="inventor" class="list-disc ml-4">
      <li>
        <RouterLink
          :to="{ name: 'InventorDetails', params: { name: inventor } }"
          class="text-sky-700 hover:underline"
          >{{ inventor }}</RouterLink
        >
        <button v-if="user" @click="handleDeleteInventor(inventor)">
          <img
            src="/src/assets/icons/trash3-fill.svg"
            alt="delete"
            width="12"
            height="12"
            class="ml-1"
          />
        </button>
      </li>
    </ul>
    <AddInventor v-if="user" :trick="trick" />
  </div>
</template>
