<script setup>
import { ref } from 'vue';

const isCreating = ref(false)
</script>

<template>
  <div class="create-button-container">
    <button class="btn">Create Category</button>
  </div>
</template>

<style scoped>
.create-button-container {
  display: flex;
  width: 550px;
  margin: 1rem;
  padding: .25rem;
  border: 2px solid white;
  border-radius: 1rem;
}

.btn {
  width: 100%;
  margin: 0 auto;
  background-color: transparent;
  border-color: transparent;
}

.btn:hover {
  color: rgb(81, 190, 81);
}

.btn:focus {
  outline: none;
}
</style>