<template>
  <div class="container">
    <h1>About</h1>
    <p>{{ test }}</p>
    <!-- 新規 Todo 入力エリア -->
    <input class="input" placeholder="Todo を入力" @keyup.enter="addTodo" />
    <ul>
      <!-- Todo一覧 -->
      <li v-for="(todo, i) in todos" :key="i">
        <todo-list-item :todo="todo" @toggle="toggle" @remove="remove" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TodoListItem from '~/components/Molecules/TodoListItem.vue'
import { Todo } from '~/models/Todo'
import { todosStore } from '~/store'

export default Vue.extend({
  name: 'Todo',
  components: {
    TodoListItem,
  },
  data: () => ({
    test: 'test' as String,
  }),
  head: () => ({
    title: 'About',
  }),
  computed: {
    todos(): Todo[] {
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

<style scoped>
.container {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}
.input {
  height: 30px;
  padding: 5px;
}
</style>
