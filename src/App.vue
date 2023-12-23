<script setup lang="ts">
import HeaderPage from '@/component/header/page/HeaderPage.vue';

</script>

<template>

    <div class="app-container">
        <HeaderPage/>
        <div class="main-container">
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
