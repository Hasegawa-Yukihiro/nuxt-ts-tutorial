<template>
  <input type="checkbox" :checked="checked" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseCheckbox',
  props: {
    checked: {
      type: Boolean,
      required: true,
    },
  },
})
</script>
