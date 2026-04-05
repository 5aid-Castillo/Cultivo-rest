<script setup lang="ts">
import Footer from './components/layout/Footer.vue';
import Navbar from './components/layout/Navbar.vue';
import { RouterView } from 'vue-router'

/* import Maintenance from './components/Maintenance.vue'; */
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />


</template>
