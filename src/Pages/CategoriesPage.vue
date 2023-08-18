<script setup>
import CategoriesList from '../components/CategoriesList.vue'
import { verifyAdmin } from '../utils/verifyAdmin';
import Navbar from '../components/Navbar.vue'

if (!verifyAdmin()) router.push('/')
</script>

<template>
  <Navbar />
  <CategoriesList />
</template>