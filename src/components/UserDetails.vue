<template>
    <div class="container">
        <h2>User Details</h2>
        <CCard />
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import CCard from '@/components/core/Card/Card.vue';

export default defineComponent({
    name: 'CUserDetails',
    components: {
        CCard,
    },
});
</script>

<style lang="scss" scoped>
</style>
