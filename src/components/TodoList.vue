<template>
  <div class="list-group">
    <li
      v-for="item in [1, 2, 3]"
      href="#"
      class="list-group-item d-flex"
      aria-current="true"
    >
      <div class="align-self-center me-2">
        <input class="form-check-input" type="checkbox" />
      </div>
      <div class="d-flex justify-content-between w-100">
        <div class="">
          <h5 class="mb-1 text-break">Todo #{{ item }}</h5>
          <p class="mb-1">Todo more details</p>
        </div>
        <div class="">
          <small>Aug 8, 2023</small>
          <div class="d-flex justify-content-end">
            <Icon
              data-bs-toggle="modal"
              data-bs-target="#edit-todo-modal"
              icon="iconamoon:edit"
              width="22"
              role="button"
            />
            <Icon
              @click="removeTodo($event)"
              icon="iconamoon:trash"
              width="22"
              class="text-danger ms-1"
              role="button"
            />
          </div>
        </div>
      </div>
    </li>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import removeTodo from '../assets/js/removeTodo';
</script>

<style lang="scss">
@import 'noty/src/noty.scss';
@import 'noty/src/themes/nest.scss';
</style>
