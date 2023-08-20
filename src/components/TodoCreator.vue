<template>
  <div
    class="modal fade"
    id="create-todo-modal"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">Create to-do</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form
          ref="createTodoForm"
          novalidate
          @submit.prevent="onSubmit($event.target)"
        >
          <div class="modal-body">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="todo-title"
                name="todo-title"
                placeholder=""
              />
              <label for="todo-title">Title (optional)</label>
            </div>
            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Task"
                id="todo-task"
                name="todo-task"
                required
              ></textarea>
              <label for="todo-task">Task</label>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Create</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';
import submitForm from '../assets/js/submitForm';
const emit = defineEmits(['create-todo']);

const onSubmit = submitForm.bind(null, ({ title, task }) => {
  emit('create-todo', { title, task });
});
</script>

<style lang="scss" scoped></style>
