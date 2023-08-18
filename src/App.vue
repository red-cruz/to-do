<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavBar from './components/layouts/NavBar.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
</script>

<template>
  <header>
    <div class="wrapper">
      <NavBar />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
