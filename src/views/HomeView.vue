<template>
  <div class="home">
    <CButtonList />
    <CUserDetails />
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import CButtonList from '@/components/ButtonList.vue';
import CUserDetails from '@/components/UserDetails.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    CButtonList,
    CUserDetails,
  },
});
</script>

<style lang="scss" scoped>
.button-container {
  display: flex;
  justify-content: space-between;
}
</style>
