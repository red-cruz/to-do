<template>
  <div
    class="modal fade"
    id="edit-todo-modal"
    data-bs-backdrop="static"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">Edit todo</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form novalidate @submit.prevent="onSubmit(todo, $event.target)">
          <div class="modal-body">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="todo-title"
                name="todo-title"
                placeholder=""
                ref="title"
                :value="todo?.title"
              />
              <label for="todo-title">Title (optional)</label>
            </div>
            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Task"
                id="todo-task"
                name="todo-task"
                ref="task"
                :value="todo?.task"
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
            <button type="submit" class="btn btn-success">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps, ref } from 'vue';
import closeModal from '../assets/js/closeModal';
defineProps({
  todo: {
    type: Object,
  },
});
const emit = defineEmits(['submit-edit-todo']);
const title = ref(null);
const task = ref(null);

const onSubmit = (todo, form) => {
  form.classList.add('was-validated');

  if (!form.checkValidity()) return;
  emit('submit-edit-todo', {
    id: todo.id,
    created_at: new Date().toLocaleDateString(),
    title: title.value.value,
    task: task.value.value,
  });
  form.reset();
  closeModal(form);
};
</script>

<style lang="scss" scoped></style>
