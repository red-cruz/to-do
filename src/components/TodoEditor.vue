<template>
  <div class="modal fade" id="edit-todo-modal" tabindex="-1" aria-hidden="true">
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
        <form
          ref="editTodoForm"
          class="needs-validation"
          novalidate
          @submit="handleSubmit($event)"
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
                placeholder="Leave a comment here"
                id="todo-description"
                required
              ></textarea>
              <label for="todo-description">Description</label>
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
import { onMounted, ref } from 'vue';
const editTodoForm = ref(null);

function handleSubmit(e) {
  e.preventDefault();
  e.stopPropagation();
  const form = e.target;
  form.classList.add('was-validated');
}
onMounted(() => {
  document
    .getElementById('edit-todo-modal')
    .addEventListener('hidden.bs.modal', function () {
      const form = editTodoForm.value;
      form.classList.remove('was-validated');
    });
});
</script>

<style lang="scss" scoped></style>
