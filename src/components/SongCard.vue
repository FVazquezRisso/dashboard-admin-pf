<script setup>
import { spotyFansApi } from "../../services/apiConfig";
import { ref } from "vue";

const props = defineProps({
  id: Number,
  name: String,
  genre: String,
  isActive: Boolean,
});

const isActiveValue = ref(props.isActive);
const refName = ref(props.name);
const isModifyingName = ref(false);
let newName = props.name

const setActive = async () => {
  try {
    const response = await spotyFansApi.put(`/music/setActive/${props.id}`);

    if (response.status === 200) {
      console.log(response.data);
      isActiveValue.value = !isActiveValue.value;
    }
  } catch (error) {
    console.error(error.message);
  }
};

const setModifying = () => {
  isModifyingName.value = true;
};

const handleChangeName = async () => {
  try {
    const response = await spotyFansApi.put(`/music/${props.id}`, {
      newName: refName.value,
    });

    console.log(response.data);
    newName = refName.value
    isModifyingName.value = false;
  } catch (error) {
    console.error(error.message);
    refName.value = newName;
    isModifyingName.value = false;
  }
};

const handleCancelChangeName = () => {
  refName.value = newName;
  isModifyingName.value = false;
}
</script>

<template>
  <div v-if="!isModifyingName" class="container" :class="{ 'container-disabled': !isActiveValue }">
    <p class="id">{{ id }}</p>
    <p class="name" @click="setModifying">{{ refName }}</p>
    <p class="genre">{{ genre }}</p>
    <button v-if="isActiveValue" class="btn delete-btn" @click="setActive">
      Delete
    </button>
    <button v-else class="btn active-btn" @click="setActive">Active</button>
  </div>
  <div v-if="isModifyingName" class="modify-name-container">
    <p class="name-input">New name:</p>
    <input class="input" type="text" v-model="refName" autofocus />
    <button class="delete-btn" @click="handleCancelChangeName">Cancel</button>
    <button class="change-btn" @click="handleChangeName">Change</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  width: 550px;
  margin: 1rem;
  border: 2px solid white;
  border-radius: 1rem;
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
  cursor: pointer;
}

.genre {
  min-width: 24%;
  padding: 1rem 0;
  border-right: 2px solid white;
}

.delete-btn {
  width: 15%;
  margin: 0.25rem;
  font-size: 0.9rem;
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
  margin: 0.25rem;
  font-size: 0.9rem;
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

.modify-name-container {
  display: flex;
  align-items: center;
  width: 550px;
  margin: 1rem;
  border: 2px solid white;
  border-radius: 1rem;
  padding: .3rem;
}

.change-btn {
  width: 15%;
  margin: 0.25rem;
  font-size: 0.9rem;
  background-color: transparent;
  border-color: transparent;
}

.change-btn:hover {
  color: rgb(81, 190, 81);
}

.change-btn:focus {
  outline: none;
}

.input {
  width: 40%;
  background-color: transparent;
}

.input:focus {
  outline: none;
}

.name-input {
  width: 20%;
  margin: .75rem;
  font-weight: bold;
}
</style>