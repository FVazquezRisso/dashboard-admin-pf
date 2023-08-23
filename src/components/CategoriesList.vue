<script setup>
import { ref, onMounted } from 'vue';
import { spotyFansApi } from '../../services/apiConfig';
import CategoryCard from '../components/CategoryCard.vue'

const categories = ref([]);
const isCreating = ref(false)
const inputValue = ref('')

const fetchCategories = async () => {
  try {
    const response = await spotyFansApi.get('/category');
    if (response.status === 200) categories.value = response.data;
  } catch (error) {
    console.error(error.message);
  }
};

const handleInput = (event) => {
  inputValue.value = event.target.value
}

const handleClickCreate = () => {
  isCreating.value = true
}

const handleClickPost = async () => {
  try {
    const response = await spotyFansApi.post('/category', { name: inputValue.value })
    categories.value = [...categories.value, response.data]
    isCreating.value = false
  } catch (error) {
    console.error(error.message)
  }
}

onMounted(fetchCategories);
</script>

<template>
  <div class="container">
    <div class="properties-container">
      <p class="id">ID</p>
      <p class="name">Name</p>
      <p class="action">Action</p>
    </div>
    <div class="create-button-container">
      <button v-if="!isCreating" class="btn" @click="handleClickCreate">Create Category</button>
      <p v-if="isCreating" class="name-input">Name:</p>
      <input v-if="isCreating" class="input" type="text" placeholder="Category Name" @input="handleInput" autofocus>
      <button v-if="isCreating" class="btn-creating" @click="handleClickPost">Create</button>
    </div>
    <CategoryCard v-for="category in categories" :key="category.id" :id="category.id" :name="category.name"
      :is-active="category.isActive" />
  </div>
</template>

<style scoped>
.container::-webkit-scrollbar {
  display: none;
}

.container {
  max-height: 75vh;
  border: 2px solid white;
  border-radius: 1rem;
  overflow-y: auto;
  backdrop-filter: blur(6px);
  box-shadow: inset 0 2px 4px 0 rgb(255, 255, 255);
}

.properties-container {
  display: flex;
  width: 550px;
  margin: 1rem;
  border-bottom: 2px solid white;
  border-radius: .5rem;
}

.id {
  min-width: 8%;
  padding: 1rem 0;
  font-weight: bold;
}

.name {
  min-width: 62%;
  padding: 1rem 0;
  font-weight: bold;
}

.action {
  width: 27%;
  padding: 1rem 0;
  font-weight: bold;
}

.create-button-container {
  display: flex;
  width: 550px;
  align-items: center;
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

.input {
  width: 55%;
  padding: 0 1rem;
  background-color: transparent;
}

.input:focus {
  outline: none;
}

.btn-creating {
  margin: 0 auto;
  background-color: transparent;
  border-color: transparent;
}

.btn-creating:hover {
  color: rgb(81, 190, 81);
}

.btn-creating:focus {
  outline: none;
}

.name-input {
  margin: .75rem;
  font-weight: bold;
}
</style>