<template>
    <div>
        <button class="base-button" :title="info">
            <div class="left-img" :class="{ 'rotate': isLeftIconRotating }">
                <slot name="left-icon"></slot>
            </div>
            {{ label }}
            <div class="right-img" :class="{ 'rotate': isRightIconRotating }">
                <slot name="right-icon"></slot>
            </div>
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
        },
        isLeftIconRotating: {
            type: Boolean,
            required: false,
            default: false
        },
        isRightIconRotating: {
            type: Boolean,
            required: false,
            default: false
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
        width: 100%;
    }
    .left-img,
    .right-img {
        margin: 0 5px;
        max-width: 20px;
        max-height: 20px;
    }
    .rotate {
        animation: cyclic 2s infinite linear;
    }
    @keyframes cyclic {
        from {
            -webkit-transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(359deg);
        }
    }
}
</style>