<template>
  <div class="home">
    <div class="button-container">
      <CButton label="Save" info="This is a Save button">
        <template v-slot:icon>
          <img src="@/assets/icons/save.svg" alt="Save Icon" />
        </template>
      </CButton>
      <CButton label="Edit" info="This is an Edit button">
        <template v-slot:icon>
          <img src="@/assets/icons/edit.svg" alt="Edit Icon" />
        </template>
      </CButton>
      <CButton label="View" info="This is a View button">
        <template v-slot:icon>
          <img src="@/assets/icons/view.svg" alt="View Icon" />
        </template>
      </CButton>
      <CButton label="Delete" info="This is a Delete button">
        <template v-slot:icon>
          <img src="@/assets/icons/delete.svg" alt="Delete Icon" />
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
