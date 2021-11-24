<template>
  <li class="wrapper">
    <div>
      <BaseCheckbox :checked="todo.done" @change.native="toggle()" />
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </div>
    <button @click="remove()">削除</button>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseCheckbox from '../Atoms/BaseCheckbox.vue'

export default Vue.extend({
  name: 'TodoListItem',
  components: {
    BaseCheckbox,
  },
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
