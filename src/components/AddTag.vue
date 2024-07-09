<script setup>
const showForm = defineModel('showForm', { default: false })
const newTag = defineModel('newTag')
</script>

<template>
  <div>
    <button v-if="!showForm" @click="showForm = true">add tags</button>
    <form v-if="showForm">
      <h4>Add a tag</h4>
      <input type="text" id="tag" placeholder="New tag" v-model="newTag" />
    </form>
  </div>
</template>
