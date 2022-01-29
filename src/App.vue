<template>
  <nav id="nav">
    <div class="container">
      <router-link to="/">Home</router-link>
      <router-link :to="{ name: 'PostList' }">Posts</router-link>
    </div>
  </nav>
  <main class="container">
    <router-view />
  </main>
</template>

<style lang="scss" scoped>
:global(#app) {
  background-color: #f3f3f3;
  min-height: 100vh;
}
nav {
  padding: 20px;
  .container {
    display: flex;
    gap: 10px;
  }
}
.container {
  width: clamp(400px, 70%, 1260px);
  margin: 0 auto;
}
</style>
