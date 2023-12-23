<script setup lang="ts">
import NavigationBar from './NavigationBar.vue';
import { navigations } from '@/router/navigation';

</script>

<template>
    
    <div class="navigation-bars">
        <template v-for="item in navigations" :key="item">
            <NavigationBar
                :id="item.id"
                :name="item.name"
                :path="item.path"
                :icon="item.icon"
                :accessPoint="item.accessPoint"
                active="false"
            />
        </template>
    </div>

</template>

<style lang="scss" scoped>

.navigation-bars {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

</style>