<template>
  <div>
    <h1>About</h1>
    <p>{{ test }}</p>
    <ul>
      <li v-for="(todo, i) in todos" :key="i">
        <input type="checkbox" :checked="todo.done" @change="toggle(todo)" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="remove(todo)">削除</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Todo } from '~/models/Todo'
import { todosStore } from '~/store'

export default Vue.extend({
  name: 'AboutPage',
  data: () => ({
    test: 'test' as String,
  }),
  head: () => ({
    title: 'About',
  }),
  computed: {
    todos(): Array<Todo> {
      console.log('todosStore', todosStore)
      // リスト（todos）を取得
      // ※ todosStore. と打つと、インテリセンス（入力補完機能）が働く
      return todosStore.todos
    },
  },
})
</script>
