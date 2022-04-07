<template>
  <div class="home">
    <div class="button-container">
      <CButton label="Save">
        <template v-slot:icon>
          <img src="@/assets/icons/save.png" alt="Save Icon" />
        </template>
      </CButton>
      <CButton label="Edit">
        <template v-slot:icon>
          <img src="@/assets/icons/edit.png" alt="Edit Icon" />
        </template>
      </CButton>
      <CButton label="View">
        <template v-slot:icon>
          <img src="@/assets/icons/view.png" alt="View Icon" />
        </template>
      </CButton>
      <CButton label="Delete">
        <template v-slot:icon>
          <img src="@/assets/icons/delete.png" alt="Delete Icon" />
        </template>
      </CButton>
      <CButton label="Button without icon"></CButton>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import CButton from '@/components/core/Button/Button.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    CButton,
  },
});
</script>

<style lang="scss" scoped>
.button-container {
  display: flex;
  justify-content: space-between;
}
</style>
