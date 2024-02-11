<script setup lang="ts">
import TheLogo from '../components/TheLogo.vue';
import UserInformation from '../components/UserInformation.vue';
import NavigationLink from '../navigation/NavigationLink.vue';
</script>

<template>

    <div class="header-container">
        <TheLogo class="logo" />
        <NavigationLink/>
        <UserInformation/>
    </div>

</template>

<style lang="scss" scoped>

// ---------------------- PC ----------------------

@media screen and (min-width: 1025px) {  

.header-container {
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 30px 22px;
}

}


// ---------------------- Phone ----------------------


@media screen and (max-width: 1024px) { 

.logo {
    visibility: hidden;
    display: none;
}

.header-container {
    height: 5%;
    min-height: 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0px 10px;
}


}

</style>