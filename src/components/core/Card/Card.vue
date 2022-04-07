<template>
    <div class="card-container">
        <div class="card-layout">
            <h2>Card Component</h2>
            <slot name="card-title"></slot>
            <slot name="card-description"></slot>
            <slot name="card-footer"></slot>
        </div>
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
.card-container {
    .card-layout {
        padding: 20px;
        box-shadow: 4px 4px 14px 5px;
        margin: 20px;
    }
}
</style>