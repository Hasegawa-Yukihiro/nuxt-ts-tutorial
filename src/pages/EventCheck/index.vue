<template>
  <div class="container">
    <h1>イベントチェック</h1>
    <p>クリック時のイベント</p>
    <div id="outer" @click="outerClick">
      <button id="inner" @click.self="innerClick">
        インナー(バブリング有)
      </button>
      <button id="inner" @click.stop="innerClick">
        インナー(バブリング無)
      </button>
    </div>
    <p>mousedownとdragStart時のイベント</p>
    <div
      class="dragRange"
      @mousedown="dragStart"
      @mousemove="mousemove"
      @mouseup="dragEnd"
    >
      <div class="drag" :style="dragStyle" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { CssProperties } from 'vue-css-definition'

interface Data {
  dragMovePageXY: { x: number; y: number } | null
  dragStartPageXY: { x: number; y: number } | null
}

export default Vue.extend({
  name: 'EventCheck',
  data(): Data {
    return {
      dragMovePageXY: null,
      dragStartPageXY: null,
    }
  },
  head: () => ({
    title: 'EventCheck',
  }),
  computed: {
    dragStyle() {
      const style: CssProperties = {}
      if (this.dragStartPageXY && this.dragMovePageXY) {
        style.width = `${Math.abs(
          this.dragMovePageXY.x - this.dragStartPageXY.x
        )}px`
        style.height = `${Math.abs(
          this.dragMovePageXY.y - this.dragStartPageXY.y
        )}px`
        style.top = `${
          this.dragMovePageXY.y - this.dragStartPageXY.y >= 0
            ? this.dragStartPageXY.y - 2
            : this.dragMovePageXY.y - 2
        }px`
        style.left = `${
          this.dragMovePageXY.x - this.dragStartPageXY.x >= 0
            ? this.dragStartPageXY.x - 2
            : this.dragMovePageXY.x - 2
        }px`
        style.border = `1px solid rgba(41, 59, 143)`
      }
      return style
    },
  },
  methods: {
    outerClick() {
      alert('outer')
    },
    innerClick() {
      alert('inner')
    },
    dragStart(e: MouseEvent) {
      this.dragStartPageXY = { x: e.pageX, y: e.pageY }
    },
    mousemove(e: MouseEvent) {
      this.dragMovePageXY = { x: e.pageX, y: e.pageY }
    },
    dragEnd() {
      this.dragMovePageXY = null
      this.dragStartPageXY = null
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
.dragRange {
  border: 1px solid black;
  width: 100%;
  height: 500px;
}
.drag {
  position: fixed;
  z-index: 1000;
  background-color: rgba(41, 59, 143, 0.3);
}
</style>
