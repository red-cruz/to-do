<template>
  <div>
    <header style="height: 80px">
      <nav class="navbar fixed-top bg-body-tertiary">
        <div class="container-fluid">
          <!-- Brand -->
          <a class="navbar-brand" href="#">
            <b class="d-inline-block align-text-top">Todo-List</b>
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import ThemeToggle from '../partials/ThemeToggle.vue';
</script>

<style lang="scss" scoped></style>
