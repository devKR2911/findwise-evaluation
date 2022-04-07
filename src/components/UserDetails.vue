<template>
    <div class="container">
        <h2>User Details</h2>
        <CCard>
            <template v-slot:card-title v-if="userDetails">
                <div class="user-title">
                    <h3>
                        {{ userDetails.name.title }}
                        {{ userDetails.name.first }}
                        {{ userDetails.name.last }}
                    </h3>
                    <img :src="userDetails.picture.thumbnail" alt class="avatar" />
                </div>
            </template>
            <template v-slot:card-description v-if="userDetails">
                <div class="location-details">
                    Location:
                    {{ userDetails.location.street.number }},
                    {{ userDetails.location.street.name }},
                    {{ userDetails.location.city }}
                    {{ userDetails.location.state }}
                    {{ userDetails.location.country }}
                </div>
                <div class="age-details">
                    <p>
                        Date of birth
                        {{ userDetails.dob.date }}
                    </p>
                    <p>Age {{ userDetails.dob.age }}</p>
                </div>
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
.user-title {
    display: flex;
    flex: 1;
    justify-content: space-around;
    .avatar {
        border-radius: 50%;
    }
}
</style>
