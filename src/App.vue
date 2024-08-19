<script setup>
import Nav from './layout/Nav.vue';
import { RouterView } from 'vue-router';
import Footer from './layout/Footer.vue';
</script>

<template>
  <Nav />
  <RouterView />
  <Footer />
</template>
