<script setup lang="ts">
import TheLogo from '../component/TheLogo.vue';
import UserInformation from '../component/UserInformation.vue';
import NavigationLink from '../navigation/NavigationLink.vue';
</script>

<template>

    <div class="header-container">
        <TheLogo/>
        <NavigationLink/>
        <UserInformation/>
    </div>

</template>

<style lang="scss" scoped>

.header-container {
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 30px 22px;
}

</style>