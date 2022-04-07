<template>
    <div class="card-layout">
        <h2>Card Component</h2>
        <slot name="card-title"></slot>
        <slot name="card-description"></slot>
        <slot name="card-footer"></slot>
    </div>
</template>
<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
    name: "CCard",
    props: {},
    setup() {
        return {

        }
    }
})
</script>

<style lang="scss">
</style>