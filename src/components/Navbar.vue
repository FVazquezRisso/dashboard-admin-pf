<script setup>
</script>

<template>
  <div class="container">
    <router-link class="link" exact-active-class="active-link" to="/users">Users</router-link>
    <router-link class="link" exact-active-class="active-link" to="/songs">Songs</router-link>
    <router-link class="link" exact-active-class="active-link" to="/categories">Categories</router-link>
    <a class="link" href="https://pf-spooty-fans-two.vercel.app">Exit</a>
  </div>
</template>

<style scoped>
.container {
  margin: auto auto 1rem auto;
  padding: 1rem;
  width: fit-content;
  display: flex;
  justify-content: center;
  gap: 1rem;
  border: 2px solid white;
  border-radius: 1rem;
  backdrop-filter: blur(6px);
  box-shadow: inset 0 2px 4px 0 rgb(255, 255, 255);
}

.link {
  color: white;
  text-decoration: none;
}

.link:hover {
  color: rgb(78, 78, 255);
}

.active-link {
  color: rgb(78, 78, 255);
}

.active-link:hover {
  cursor: not-allowed;
}
</style>