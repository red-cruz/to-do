<template>
  <div
    class="modal fade"
    data-bs-backdrop="static"
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
          class="needs-validation"
          novalidate
          @submit.prevent="onSubmit($event.target)"
        >
          <div class="modal-body">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="todo-title"
                placeholder=""
              />
              <label for="todo-title">Title (optional)</label>
            </div>
            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Task"
                id="todo-task"
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
import { onMounted, ref, defineEmits } from 'vue';
import closeModal from '../assets/js/closeModal';
const createTodoForm = ref(null);
const emit = defineEmits(['create-todo']);

onMounted(() => {});
/**
 * @param {HTMLFormElement} form
 */
function onSubmit(form) {
  const title = form.querySelector('#todo-title');
  const task = form.querySelector('#todo-task');
  form.classList.add('was-validated');
  if (!form.checkValidity()) return;
  emit('create-todo', form, {
    title: title.value,
    task: task.value,
  });
  form.reset();
  closeModal(form);
}
</script>

<style lang="scss" scoped></style>
