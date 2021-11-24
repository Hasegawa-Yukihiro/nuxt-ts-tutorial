<template>
  <input class="input" :placeholder="placeholder" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseInput',
  props: {
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
  },
})
</script>

<style scoped>
.input {
  height: 30px;
  padding: 5px;
}
</style>
