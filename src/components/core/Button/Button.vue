<template>
    <div>
        <button>{{ label }}</button>
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

</style>