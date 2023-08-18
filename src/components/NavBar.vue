<template>
  <header style="height: 80px">
    <nav class="navbar fixed-top bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <b class="d-inline-block align-text-top">Todo-List</b>
        </a>
        <ThemeToggle />
      </div>
    </nav>
  </header>
</template>

<script setup>
import ThemeToggle from './ThemeToggle.vue';
</script>

<style lang="scss" scoped></style>
