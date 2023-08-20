<template>
  <TodoCreator @create-todo="createTodo" />

  <TodoEditor />
  <div class="list-group">
    <TodoItem
      v-for="todo in todoList"
      :todo="todo"
      @completed-task="completeTask"
    />
  </div>
</template>

<script setup>
import TodoItem from '../components/TodoItem.vue';
import TodoCreator from '../components/TodoCreator.vue';
import TodoEditor from '../components/TodoEditor.vue';
import { uid } from 'uid';
import { ref } from 'vue';

const todoList = ref([]);

function createTodo(todo) {
  todoList.value.push({
    title: todo.title,
    id: uid(),
    task: todo.task,
    isCompleted: false,
    created_at: new Date().toLocaleDateString(),
  });
}

function completeTask(todoId) {
  const index = todoList.value.findIndex((todo) => todo.id == todoId);
  todoList.value[index].isCompleted = !todoList.value[index].isCompleted;
}
</script>

<style lang="scss" scoped></style>
