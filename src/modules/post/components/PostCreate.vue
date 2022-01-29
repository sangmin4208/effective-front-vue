<script lang="ts" setup>
import { reactive } from 'vue'
import usePosts from '../composables/usePosts'
import Post from '../types/post'

const { createPost } = usePosts()
const post = reactive<Post>({
  id: Date.now().toString(),
  views: 100,
  likes: 0,
  numbers: 100,
  desc: '꿀팁 :) 이거 잘 써보세요',
  author: 'Nacho',
  content: '',
  title: '',
  createAt: new Date(),
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
