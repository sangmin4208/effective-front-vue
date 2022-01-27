<script setup lang="ts">
import getPosts from '../composables/getPosts'
import PostListItem from './PostListItem.vue'
const { posts, isFinished } = getPosts()
</script>
<template>
  <h1>PostList</h1>
  <div v-if="isFinished && posts">
    <div v-for="post in posts" :key="post.postNumber">
      <PostListItem :post="post"></PostListItem>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
