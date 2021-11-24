<template>
  <li class="wrapper">
    <div>
      <input type="checkbox" :checked="todo.done" @change="toggle()" />
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </div>
    <button @click="remove()">削除</button>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TodoListItem',
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggle() {
      this.$emit('toggle', this.todo)
    },
    remove() {
      this.$emit('remove', this.todo)
    },
  },
})
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.done {
  text-decoration: line-through;
}
</style>
