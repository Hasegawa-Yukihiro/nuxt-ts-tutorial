<template>
  <div>
    <h1>About</h1>
    <p>{{ test }}</p>
    <ul>
      <!-- Todo一覧 -->
      <li v-for="(todo, i) in todos" :key="i">
        <input type="checkbox" :checked="todo.done" @change="toggle(todo)" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="remove(todo)">削除</button>
      </li>
      <!-- 新規 Todo 入力エリア -->
      <li>
        <input placeholder="Todo を入力" @keyup.enter="addTodo" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Todo } from '~/models/Todo'
import { todosStore } from '~/store'

export default Vue.extend({
  name: 'TodoPage',
  data: () => ({
    test: 'test' as String,
  }),
  head: () => ({
    title: 'About',
  }),
  computed: {
    todos(): Array<Todo> {
      console.log('todosStore', todosStore)
      return todosStore.todos
    },
  },
  methods: {
    // Todo の追加
    addTodo(e: Event): void {
      if (e.target instanceof HTMLInputElement) {
        todosStore.add(e.target.value)
        e.target.value = ''
      }
    },
    // Todo の削除
    remove(todo: Todo) {
      todosStore.remove(todo)
    },
    // Todo の done（完了状態）切り替え
    toggle(todo: Todo) {
      todosStore.toggle(todo)
    },
  },
})
</script>

<style>
/* 完了状態の Todo には打消し線をつける */
.done {
  text-decoration: line-through;
}
</style>
