<template>
  <div class="list-group">
    <li
      href="#"
      class="list-group-item list-group-item-action d-flex"
      aria-current="true"
    >
      <div class="align-self-center me-2">
        <input
          class="form-check-input"
          type="checkbox"
          id="checkboxNoLabel"
          value=""
          aria-label="..."
        />
      </div>
      <div class="d-flex justify-content-between w-100">
        <div class="">
          <h5 class="mb-1 text-break">Todo Title</h5>
          <p class="mb-1">Todo more details</p>
        </div>
        <div class="">
          <small>f</small>
          <div class="d-flex justify-content-end">
            <Icon
              v-if="todo.isEditing"
              icon="iconamoon:check"
              width="22"
              class="text-success"
              role="button"
            />
            <Icon v-else icon="iconamoon:edit" width="22" role="button" />
            <Icon
              icon="iconamoon:trash"
              width="22"
              class="text-danger ms-1"
              role="button"
            />
          </div>
        </div>
      </div>
    </li>

    <a href="#" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group item heading</h5>
        <small class="text-body-secondary">3 days ago</small>
      </div>
      <p class="mb-1">Some placeholder content in a paragraph.</p>
      <small class="text-body-secondary">And some muted small print.</small>
    </a>
    <a href="#" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group item heading</h5>
        <small class="text-body-secondary">3 days ago</small>
      </div>
      <p class="mb-1">Some placeholder content in a paragraph.</p>
      <small class="text-body-secondary">And some muted small print.</small>
    </a>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
const todo = ref({});
</script>

<style lang="scss" scoped></style>
