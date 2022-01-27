<script setup lang="ts">
import { PropType, defineProps } from 'vue'
import Post from '../types/post'

defineProps({
  post: {
    type: Object as PropType<Post>,
    required: true,
  },
})
</script>

<template>Item = {{ post }}</template>
<style></style>
