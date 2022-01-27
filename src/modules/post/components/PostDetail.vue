<script setup lang="ts">
import { defineProps } from 'vue'
import getPost from '../composables/getPost'
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})
const { post, isFinished } = getPost(props.id)
</script>

<template>
  <div v-if="post && isFinished">
    {{ post }}
  </div>
</template>

<style></style>
