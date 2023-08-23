<script setup>
import { ref } from 'vue';
import { spotyFansApi } from '../../services/apiConfig'
import { useRouter } from 'vue-router';

const isActiveInput = ref(false)
const email = ref('')
const title = ref('')
const message = ref('')
const codeInput = ref()
let verificationCode
const router = useRouter()
const isAdmin = localStorage.getItem('isAdmin')

if (isAdmin) {
  router.push('/users')
}

const handleChangeInput = (event) => {
  const { name, value } = event.target

  if (name === 'email') {
    email.value = value
  } else {
    codeInput.value = value
  }
}

const checkVerificationCodeMatch = () => {
  if (codeInput.value == verificationCode) {
    localStorage.setItem('isAdmin', true)
    router.push('/users')
  } else {
    alert('Código de verificación incorrecto.')
    isActiveInput.value = false
  }
}

const handleShowInput = async () => {
  try {
    const response = await spotyFansApi.post('/dashboard-admin/verifyemail', { email: email.value })

    if (response.status === 200) {
      title.value = 'Código enviado'
      message.value = `Se ha enviado el código de verificación a ${email.value}.`
      isActiveInput.value = true
      const { code } = response.data
      verificationCode = code
    }
  } catch (error) {
    title.value = 'Error'
    message.value = error.response.data.error
  }
}

</script>


<template>
  <main class="main-container">
    <h2 class="login-title">Login</h2>
    <label>
        <input type="email" name="email" placeholder="email@example.com" class="input input-bordered w-full max-w-xs"
          @input="handleChangeInput" />
        <button class="btn" onclick="my_modal_1.showModal()" @click="handleShowInput" :disabled="isActiveInput"
          :class="{ 'btn-disabled': isActiveInput }">Send Code</button>
      </label>
      <label v-if="isActiveInput">
        <input type="text" name="code" placeholder="Code" class="input input-bordered w-full max-w-xs"
          @input="handleChangeInput" />
      <button class="btn" @click="checkVerificationCodeMatch">Verify Code</button>
    </label>
  </main>

  <dialog id="my_modal_1" class="modal message">
    <form method="dialog" class="modal-box">
      <h3 class="font-bold text-lg message-title">{{ title }}</h3>
      <p class="py-4">{{ message }}</p>
      <div class="modal-action close-button">
        <button class="btn">Close</button>
      </div>
    </form>
  </dialog>
</template>

<style scoped>


.main-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  border: 2px solid white;
  border-radius: 1rem;
  backdrop-filter: blur(6px);
  box-shadow: inset 0 2px 4px 0 rgb(255, 255, 255);
  background-color: #ffffff10;
}

.login-title {
  margin: 0 1rem;
  font-size: 2rem;
  font-weight: bold;
}

.input {
  margin: 1rem;
  padding: .5rem;
  color: white;
  border: 1px solid white;
  border-radius: 1rem;
  background-color: transparent;
  transition-property: all;
  transition-duration: .1s;
  transition-timing-function: ease-in-out;
}

.input:focus {
  outline: none;
  transform: scale(1.1);
  box-shadow: 0 13px 36px 0 #000;
}

.input::placeholder {
  color: #ffffff70;
}

.btn {
  border-radius: 5rem;
  background-color: transparent;
  border: none;
  transition-property: all;
  transition-duration: .15s;
  transition-timing-function: ease-in-out;
}

.btn:hover {
  box-shadow: inset 0 2px 4px 0 rgb(255, 255, 255);
  transform: scale(1.05);
}

.btn:focus {
  outline: none;
}

.btn-disabled {
  cursor: not-allowed;
  color: rgb(54, 54, 54);
  border: none;
}

.message {
  padding: 2rem;
  border-radius: .75rem;
  border: 2px solid white;
  border-radius: 1rem;
  backdrop-filter: blur(6px);
  box-shadow: inset 0 2px 4px 0 rgb(255, 255, 255);
  background-color: #ffffff10;
}

.message-title {
  margin-bottom: .5rem;
  font-size: 1.2rem;
  font-weight: bold;
}

.close-button {
  margin-top: .5rem;
  border: none;
}

</style>