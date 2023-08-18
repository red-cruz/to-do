<script setup>
import NavBar from './components/NavBar.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import MainView from './views/MainView.vue';
document.title = 'Todo App';
</script>

<template>
  <NavBar />
  <div class="container-md">
    <MainView />
  </div>
</template>

<style scoped></style>
