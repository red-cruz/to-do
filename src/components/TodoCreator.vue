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
                ref="title"
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
                ref="task"
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
import { defineEmits, ref } from 'vue';
import closeModal from '../assets/js/closeModal';
const emit = defineEmits(['create-todo']);
const title = ref(null);
const task = ref(null);

function onSubmit(form) {
  form.classList.add('was-validated');

  if (!form.checkValidity()) return;

  emit('create-todo', {
    title: title.value.value,
    task: task.value.value,
  });

  form.reset();
  closeModal(form);
}
</script>

<style lang="scss" scoped></style>
