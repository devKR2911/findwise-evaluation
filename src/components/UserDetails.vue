<template>
    <div class="container">
        <h2>User Details</h2>
        <CCard>
            <template v-slot:card-title>
                <h3>Card Title</h3>
            </template>
            <template v-slot:card-description>
                <h3>{{ userDetails }}</h3>
            </template>
            <template v-slot:card-footer>
                <CButton
                    label="Fetch User Details"
                    info="Cleck to fetch the user details"
                    @clicked="fetchUserDetails"
                />
            </template>
        </CCard>
    </div>
</template>

<script lang="ts">

import { computed, defineComponent } from 'vue';
import CCard from '@/components/core/Card/Card.vue';
import CButton from '@/components/core/Button/Button.vue';

import store from '@/store';

export default defineComponent({
    name: 'CUserDetails',
    components: {
        CCard,
        CButton,
    },
    setup() {
        const userDetails = computed(() => store.getters.getUserDetails);
        function fetchUserDetails() {
            store.dispatch("fetchUserDetails");
        }
        return {
            fetchUserDetails,
            userDetails,
        }
    }
});
</script>

<style lang="scss" scoped>
</style>
