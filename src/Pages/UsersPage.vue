<script setup>
import UsersList from '../components/UsersList.vue'
import { verifyAdmin } from '../utils/verifyAdmin';
import Navbar from '../components/Navbar.vue'
import { useRouter } from 'vue-router';

const router = useRouter()
if (!verifyAdmin()) router.push('/')
</script>

<template>
  <Navbar />
  <UsersList />
</template>