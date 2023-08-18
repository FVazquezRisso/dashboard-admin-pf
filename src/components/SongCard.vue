<script setup>
import { spotyFansApi } from '../../services/apiConfig';
import { ref } from 'vue';

const props = defineProps({
  id: Number,
  name: String,
  genre: String,
  isActive: Boolean
})

const isActiveValue = ref(props.isActive)

const setActive = async () => {
  try {
    const response = await spotyFansApi.put(`/music/setActive/${props.id}`)

    if (response.status === 200) {
      console.log(response.data)
      isActiveValue.value = !isActiveValue.value
    }

  } catch (error) {
    console.error(error.message)
  }
}

</script>

<template>
  <div class="container" :class="{ 'container-disabled': !isActiveValue }">
    <p class="id">{{ id }}</p>
    <p class="name">{{ name }}</p>
    <p class="genre">{{ genre }}</p>
    <button v-if="isActiveValue" class="btn delete-btn" @click="setActive">Delete</button>
    <button v-else class="btn active-btn" @click="setActive">Active</button>
  </div>
</template>


<style scoped>
.container {
  display: flex;
  width: 550px;
  margin: 1rem;
  border: 2px solid white;
  border-radius: .5rem;
}

.container-disabled {
  background-color: rgb(49, 49, 49);
  color: rgb(104, 104, 104);
}

.id {
  min-width: 8%;
  padding: 1rem 0;
  border-right: 2px solid white;
}

.name {
  min-width: 50%;
  padding: 1rem 0;
  border-right: 2px solid white;
}

.genre {
  min-width: 24%;
  padding: 1rem 0;
  border-right: 2px solid white;
}

.delete-btn {
  width: 15%;
  margin: .25rem;
  font-size: .9rem;
  background-color: transparent;
  border-color: transparent;
}

.delete-btn:hover {
  color: rgb(253, 57, 57);
}

.delete-btn:focus {
  outline: none;
}

.active-btn {
  width: 15%;
  margin: .25rem;
  font-size: .9rem;
  background-color: transparent;
  border-color: transparent;
  color: white;
}

.active-btn:hover {
  color: rgb(78, 78, 255);
}

.active-btn:focus {
  outline: none;
}
</style>