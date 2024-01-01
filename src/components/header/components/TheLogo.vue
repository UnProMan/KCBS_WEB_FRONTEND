<script setup lang="ts">
import BaseIcon from '@/components/base/BaseIcon.vue';

</script>

<template>
    
    <div class="logo-container default__title1">
        <BaseIcon
            name="cell_tower"
            class="icon"
            weight="700"
        />
        KCBS
    </div>

</template>

<style lang="scss" scoped>

.logo-container {
    display: flex;
    align-items: center;
    gap: 5px;

    color: white;

    user-select: none;
    font-weight: 800;
}

.icon {
    font-size: 50px;
}

</style>