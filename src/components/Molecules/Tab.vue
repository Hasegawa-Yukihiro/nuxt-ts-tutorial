<template>
  <div class="tab-wrapper">
    <template v-for="(item, index) in tabs">
      <div :key="index" class="tab-item">
        <slot :item="item" />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { PropType } from 'vue'

interface ITab {
  title: String
}

export default Vue.extend({
  name: 'Tab',
  props: {
    tabs: {
      type: Array as PropType<ITab[]>,
      required: true,
    },
  },
  computed: {},
  methods: {},
})
</script>

<style scoped>
.tab-wrapper {
  padding: 0 10px;
  display: flex;
}
.tab-item {
  padding: 5px 10px;
  position: relative;
}
</style>
