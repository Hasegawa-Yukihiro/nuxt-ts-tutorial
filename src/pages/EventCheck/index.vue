<template>
  <div class="container">
    <h1>イベントチェック</h1>
    <div id="outer" @click="outerClick">
      <button id="inner" @click="innerClick">インナー(バブリング有)</button>
      <button id="inner" @click.stop="innerClick">
        インナー(バブリング無)
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Data {}

export default Vue.extend({
  name: 'Todo',
  data(): Data {
    return {}
  },
  head: () => ({
    title: 'EventCheck',
  }),
  methods: {
    outerClick() {
      alert('outer')
    },
    innerClick() {
      alert('inner')
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
</style>
