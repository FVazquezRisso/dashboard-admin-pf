<script setup>
import { ref, onMounted } from 'vue';
import { spotyFansApi } from '../../services/apiConfig';
import SongCard from '../components/SongCard.vue'

const songs = ref([]);

const fetchSongs = async () => {
  try {
    const response = await spotyFansApi.get('/music/all?isAdmin=true');
    if (response.status === 200) songs.value = response.data;
  } catch (error) {
    console.error(error.message);
  }
};

onMounted(fetchSongs);
</script>

<template>
  <div class="container">
    <div class="properties-container">
      <p class="id">ID</p>
      <p class="name">Name</p>
      <p class="genre">Genre</p>
      <p class="action">Action</p>
    </div>
    <SongCard v-for="song in songs" :key="song.id" :id="song.id" :name="song.name" :genre="song.genre"
      :is-active="song.isActive" />
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
  min-width: 50%;
  padding: 1rem 0;
  font-weight: bold;
}

.genre {
  min-width: 24%;
  padding: 1rem 0;
  font-weight: bold;
}

.action {
  width: 15%;
  padding: 1rem 0;
  font-weight: bold;
}
</style>