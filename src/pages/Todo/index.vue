<template>
  <div class="container">
    <h1>Todo</h1>
    <!-- 新規 Todo 入力エリア -->
    <BaseInput :placeholder="placeholder" @keyup.enter.native="addTodo" />
    <ul class="list">
      <!-- Todo一覧 -->
      <TodoListItem
        v-for="(todo, i) in todos"
        :key="i"
        :todo="todo"
        @toggle="toggle"
        @remove="remove"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseInput from '~/components/Atoms/BaseInput.vue'
import TodoListItem from '~/components/Molecules/TodoListItem.vue'
import { ITodo } from '~/models/Todo'
import { todosStore } from '~/store'

interface Data {
  placeholder: String
}

export default Vue.extend({
  name: 'Todo',
  components: {
    BaseInput,
    TodoListItem,
  },
  data(): Data {
    return {
      placeholder: 'Todo を入力',
    }
  },
  head: () => ({
    title: 'Todo',
  }),
  computed: {
    todos(): ITodo[] {
      return todosStore.todos
    },
  },
  methods: {
    // Todo の追加
    addTodo(e: Event): void {
      if (e.target instanceof HTMLInputElement) {
        if (e.target.value === '') return
        todosStore.add(e.target.value)
        e.target.value = ''
      }
    },

    // Todo の削除
    remove(todo: ITodo) {
      const result = window.confirm(
        `こちらのTodoを削除しますか？\n - ${todo.text}`
      )
      if (result) todosStore.remove(todo)
    },
    // Todo の done（完了状態）切り替え
    toggle(todo: ITodo) {
      todosStore.toggle(todo)
    },
  },
})
</script>

<style scoped>
.list {
  list-style: none;
  padding: 0;
}
.container {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}
</style>
