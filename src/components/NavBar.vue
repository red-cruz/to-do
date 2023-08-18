<template>
  <header style="height: 80px">
    <nav class="navbar fixed-top bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <b class="d-inline-block align-text-top">Todo-List</b>
        </a>
        <div>
          <Icon
            icon="gridicons:create"
            data-bs-toggle="modal"
            data-bs-target="#create-todo-modal"
            role="button"
            class="me-2 text-primary"
            width="23"
          />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import ThemeToggle from './ThemeToggle.vue';
</script>

<style lang="scss" scoped></style>
