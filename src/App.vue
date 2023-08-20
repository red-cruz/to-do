<script setup>
import NavBar from './components/NavBar.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import TodosView from './views/TodosView.vue';
import { onMounted } from 'vue';

onMounted(() => {
  const modals = document.querySelectorAll('.modal');
  modals.forEach((modal) => {
    modal.addEventListener('hidden.bs.modal', () => {
      modal.querySelector('form')?.classList.remove('was-validated');
    });
  });
});
</script>

<template>
  <NavBar />
  <div class="container-md">
    <TodosView />
  </div>
</template>

<style scoped></style>
