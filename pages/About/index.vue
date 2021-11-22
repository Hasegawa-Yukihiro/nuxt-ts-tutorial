<template>
  <div>
    <h1>About</h1>
    <p>{{ aaaa }}</p>
  </div>
</template>

<script lang="ts">
export default {
  data: () => ({
    aaaa: 'test' as String,
  }),
  head: () => ({
    title: 'About',
  }),
}
</script>
