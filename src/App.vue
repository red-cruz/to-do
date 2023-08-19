<script setup>
import NavBar from './components/NavBar.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import TodosView from './views/TodosView.vue';
</script>

<template>
  <NavBar />
  <div class="container-md">
    <TodosView />
  </div>
</template>

<style scoped></style>
