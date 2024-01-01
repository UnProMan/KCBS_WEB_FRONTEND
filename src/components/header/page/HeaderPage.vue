<script setup lang="ts">
import TheLogo from '../components/TheLogo.vue';
import UserInformation from '../components/UserInformation.vue';
import NavigationLink from '../navigation/NavigationLink.vue';
</script>

<template>

    <div class="header-container layout__flexColumn">
        <TheLogo/>
        <NavigationLink/>
        <UserInformation/>
    </div>

</template>

<style lang="scss" scoped>

.header-container {
    flex: 1;

    justify-content: space-between;

    padding: 30px 22px;
}

</style>