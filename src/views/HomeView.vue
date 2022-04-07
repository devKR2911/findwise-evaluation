<template>
  <div class="home">
    <CButtonList />
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import CButtonList from '@/components/ButtonList.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    CButtonList,
  },
});
</script>

<style lang="scss" scoped>
.button-container {
  display: flex;
  justify-content: space-between;
}
</style>
