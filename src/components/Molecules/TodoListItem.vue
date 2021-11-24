<template>
  <div class="wrapper">
    <div>
      <input type="checkbox" :checked="todo.done" @change="toggle()" />
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </div>
    <button @click="remove()">削除</button>
  </div>
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
      console.log(this.todo)
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
}
.done {
  text-decoration: line-through;
}
</style>
