<template>
    <div>
        <button class="base-button" :title="info">
            {{ label }}
            <slot name="icon"></slot>
        </button>
    </div>
</template>
<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
    name: "CButton",
    props: {
        label: {
            type: String,
            required: false,
            default: "",
        },
        info: {
            type: String,
            required: false,
            default: "",
        }
    },
    setup() {
        // props, {emit}
        return {

        }
    }
})
</script>

<style lang="scss">
.base-button {
    display: flex;
    padding: 5px 15px;
    align-items: center;
    cursor: pointer;
    border: none;
    background: #d4d4d4;
    min-height: 30px;
    img {
        max-width: 20px;
        margin-left: 5px;
        max-height: 15px;
    }
}
</style>