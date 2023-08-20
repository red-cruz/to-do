<template>
  <li href="#" class="list-group-item d-flex" aria-current="true">
    <div class="align-self-center me-2">
      <input
        class="form-check-input"
        type="checkbox"
        :checked="todo.isCompleted"
        @click="$emit('completed-task', todo.id)"
      />
    </div>
    <div class="d-flex justify-content-between w-100">
      <div :class="{ 'text-decoration-line-through': todo.isCompleted }">
        <h5 class="mb-1 text-break">{{ todo.title }}</h5>
        <p class="mb-1">{{ todo.task }}</p>
      </div>
      <div class="">
        <small>{{ todo.created_at }}</small>
        <div class="d-flex justify-content-end">
          <Icon
            @click="$emit('edit-todo', todo.id)"
            icon="iconamoon:edit"
            width="22"
            role="button"
          />
          <Icon
            @click="removeTodo($event, todo.id)"
            icon="iconamoon:trash"
            width="22"
            class="text-danger ms-1"
            role="button"
          />
        </div>
      </div>
    </div>
  </li>
</template>

<script setup>
import { defineProps, defineEmits, ref, onMounted } from 'vue';
import { Icon } from '@iconify/vue';
import removeTodo from '../assets/js/removeTodo';

defineProps({
  todo: {
    type: Object,
    required: true,
  },
});
defineEmits(['completed-task', 'edit-todo']);
</script>

<style lang="scss">
@import 'noty/src/noty.scss';
@import 'noty/src/themes/nest.scss';
</style>
