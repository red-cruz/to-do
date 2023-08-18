import Vuex from 'vuex';
import { set, keys, getAll } from './idb.js';

export const store = new Vuex.Store({
  state: {
    todoList: [],
  },
  mutations: {
    addTodo(state, todo) {
      if (!state.todoList.find((e) => e.id === todo.id)) {
        set(todo.id, todo.name);
        state.todoList.push(todo);
      }
    },
  },
  actions: {
    async POPULATE_FROM_CACHE({ state }) {
      let [keys, values] = await Promise.all([keys(), getAll()]);
      state.todoList = keys.map((key, index) => ({
        id: key,
        name: values[index],
      }));
    },
  },
  getters: {
    todoList: (state) => state.todoList,
  },
});
