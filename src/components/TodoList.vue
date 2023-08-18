<template>
  <div class="list-group">
    <li
      v-for="item in [1, 2, 3]"
      href="#"
      class="list-group-item list-group-item-action d-flex"
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
              @click="removeTodo()"
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
import Swal from 'sweetalert2';

function removeTodo() {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: 'success',
    title: 'Deleted todo',
  });
}
</script>

<style lang="scss" scoped></style>
