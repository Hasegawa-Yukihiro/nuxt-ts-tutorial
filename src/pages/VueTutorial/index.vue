<template>
  <div class="container">
    <h1>Vueのチュートリアル</h1>
    <Tab :tabs="tabs">
      <template #default="{ item }">
        {{ item.title }}
      </template>
    </Tab>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Tab from '~/components/Molecules/Tab.vue'

interface Data {}

interface ITab {
  title: String
}

export default Vue.extend({
  name: 'VueTutorial',
  components: {
    Tab,
  },
  data(): Data {
    return {}
  },
  head: () => ({
    title: 'VueTutorial',
  }),
  computed: {
    tabs(): ITab[] {
      return [
        {
          title: '検索',
        },
        {
          title: '置換',
        },
      ]
    },
  },
})
</script>

<style scoped></style>
