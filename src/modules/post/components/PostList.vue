<script setup lang="ts">
import getPosts from '../composables/getPosts'
import PostListItem from './PostListItem.vue'
const { posts, isFinished } = getPosts()
</script>
<template>
  <div v-if="isFinished && posts">
    <div v-for="post in posts" :key="post.id">
      <router-link :to="{ name: 'PostDetail', params: { id: post.id } }">
        <PostListItem :post="post"></PostListItem>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
