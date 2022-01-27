<script lang="ts" setup>
import { reactive } from 'vue'
import usePosts from '../composables/usePosts'
import Post from '../types/post'

const { createPost } = usePosts()
const post = reactive<Post>({
  id: Date.now().toString(),
  postViews: 100,
  postNumber: 100,
  nickname: 'Nacho',
  content: '',
  title: '',
  dateTime: new Date(),
})
const handleSubmit = () => {
  createPost(post)
  post.id = Date.now().toString()
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <button>Post</button>
  </form>
</template>

<style></style>
