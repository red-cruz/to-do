<template>
  <div
    class="modal fade"
    id="add-todo-modal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">Create todo</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="todo-title"
              placeholder=""
            />
            <label for="todo-title">Title</label>
          </div>
          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="todo-description"
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
          <button type="button" class="btn btn-primary">Create</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
