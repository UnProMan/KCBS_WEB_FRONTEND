<script setup lang="ts">
import HeaderPage from '@/components/header/page/HeaderPage.vue';
import BaseAlert from '@/components/base/BaseAlert.vue';
import { useAlertStore } from '@/store/useAlertStore';
import { useUserStore } from '@/store/useUserStore';
import useRefreshDataQuery from '@/features/login/composables/useRefreshDataQuery';

const alertStore = useAlertStore();
const userStore = useUserStore();
const { refetch } = useRefreshDataQuery();

// 새로고침하면 로그인 유지 기능을 위해 실행됨
if (!userStore.isLogin) {
    refetch.value();
};

</script>

<template>

    <BaseAlert v-if="alertStore.isAlert" />
    <div class="app-container">
        <HeaderPage/>
        <div class="main-container layout__center">
            <router-view></router-view>
        </div>
    </div>

</template>

<style lang="scss">
@import '@/assets/scss/global.scss';

.app-container {
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: rgba(var(--dark-gray));
}

.main-container {
    flex: 5.5;
    background-color: white;
    border-bottom-left-radius: 40px;
    border-top-left-radius: 40px;
}

</style>
