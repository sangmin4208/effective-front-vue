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

<template>
  <div class="container">
    <h1 class="title">
      {{ post.title }}
      <span class="number">
        {{ post.numbers }}
      </span>
    </h1>
    <p class="desc">{{ post.desc }}</p>
    <div class="icon-wrapper">
      <span class="wrapper">
        <i class="fas fa-eye"></i>
        {{ post.views }}
      </span>
      <span class="wrapper">
        <i class="fas fa-heart"></i>
        100
      </span>
    </div>
    <div class="author-wrapper">
      <p class="author-label">written by</p>
      <p class="author">{{ post.author }}</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  $title-color: #555;
  position: relative;
  transition: 0.2s ease;
  border-radius: 10px;
  overflow: hidden;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    > .title {
      color: darken($color: $title-color, $amount: 12);
    }
  }
  color: #777;
  padding: 2em;
  gap: 2ch;
  margin-bottom: 1rem;
  background: #fff;
  display: grid;
  align-items: center;
  grid-template-areas:
    'title title title icon-wrapper'
    'content content content author-wrapper';
  height: 100%;
  .title {
    font-weight: bold;
    grid-area: title;
    color: $title-color;
    font-size: 2.2rem;
    .number {
      grid-area: number;
      opacity: 0.3;
      font-style: italic;
      font-size: 2rem;
      font-weight: 100;
      margin-right: 0.5em;
      &::before {
        content: '#';
      }
    }
  }

  .desc {
    color: #777;
    grid-area: content;
    padding-left: 10px;
    font-size: 1.1rem;
  }
  .author-wrapper {
    justify-self: end;
    grid-area: author-wrapper;
    display: flex;
    gap: 1ch;
    align-items: end;
    .author-label {
      text-transform: uppercase;
      color: #777;
      font-size: 0.7em;
      font-weight: bold;
    }
    .author {
      font-weight: bold;
    }
  }
  .icon-wrapper {
    grid-area: icon-wrapper;
    justify-self: end;
    align-items: center;
    display: flex;
    gap: 1ch;
    .wrapper {
      display: flex;
      align-items: center;
      gap: 0.5ch;
    }
    .fa-heart {
      color: lighten($color: #f00, $amount: 15%);
    }
  }
}
</style>
