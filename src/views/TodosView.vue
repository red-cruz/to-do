<template>
  <TodoCreator @create-todo="createTodo" />

  <TodoEditor @submit-edit-todo="editTodo" :todo="editing" />
  <div class="list-group">
    <TodoItem
      v-for="todo in todoList"
      :todo="todo"
      @completed-task="completeTask"
      @edit-todo="showEditModal"
    />
  </div>
</template>

<script setup>
import TodoItem from '../components/TodoItem.vue';
import TodoCreator from '../components/TodoCreator.vue';
import TodoEditor from '../components/TodoEditor.vue';
import Modal from 'bootstrap/js/src/modal';
import { uid } from 'uid';
import { ref, onMounted } from 'vue';

const todoList = ref([]);
const editing = ref(null);
let modal;

onMounted(() => {
  modal = Modal.getOrCreateInstance('#edit-todo-modal');
});

function createTodo(todo) {
  todoList.value.push({
    title: todo.title,
    id: uid(),
    task: todo.task,
    isCompleted: false,
    isEditing: false,
    created_at: new Date().toLocaleDateString(),
  });
}
function showEditModal(todoId) {
  modal.show();
  const index = todoList.value.findIndex((todo) => todo.id === todoId);
  editing.value = todoList.value[index];
}
function editTodo(newTodo) {
  const index = todoList.value.findIndex((todo) => todo.id === newTodo.id);
  todoList.value[index] = newTodo;
  console.log(newTodo, todoList.value);
}
function completeTask(todoId) {
  const index = todoList.value.findIndex((todo) => todo.id == todoId);
  todoList.value[index].isCompleted = !todoList.value[index].isCompleted;
}
</script>

<style lang="scss" scoped></style>
