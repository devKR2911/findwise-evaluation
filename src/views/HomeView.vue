<template>
  <div class="home">
    <CButton label="Click Me!!" />
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
