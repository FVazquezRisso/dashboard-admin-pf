<script setup>
import { ref, onMounted } from 'vue';
import { spotyFansApi } from '../../services/apiConfig';
import UserCard from '../components/UserCard.vue'

const users = ref([]);

const fetchUsers = async () => {
  try {
    const response = await spotyFansApi.get('/user');
    if (response.status === 200) users.value = response.data;
  } catch (error) {
    console.error(error.message);
  }
};

onMounted(fetchUsers);
</script>

<template>
  <div class="container">
      <div class="properties-container">
        <p class="id">ID</p>
        <p class="username">Username</p>
        <p class="email">Email</p>
        <p class="action">Action</p>
      </div>
      <UserCard v-for="user in users" :key="user.id" :id="user.id" :username="user.username" :email="user.email" :is-active="user.isActive" />
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

.username {
  min-width: 24%;
  padding: 1rem 0;
  font-weight: bold;
}

.email {
  min-width: 50%;
  padding: 1rem 0;
  font-weight: bold;
}

.action {
  width: 15%;
  padding: 1rem 0;
  font-weight: bold;
}
</style>