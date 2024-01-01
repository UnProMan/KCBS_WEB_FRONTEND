<script setup lang="ts">
import type { UserRole } from "@/model/User";
import BaseIcon from '@/components/base/BaseIcon.vue';

interface Props {
    id: string;
    name: string;
    path: string;
    icon: string;
    accessPoint?: UserRole[];
    active?: boolean;
}

/* Props */

const props = defineProps<Props>();
</script>

<template>

    <div 
        class="navi-container default__navigationBar"
        :class="{ 'navi-container--active': props.active }"
    >
        <BaseIcon
            :name="props?.icon"
            :fill="props.active"
            class="icon"
        />

        {{ props?.name }}
    </div>

</template>

<style lang="scss" scoped>

.navi-container {
    display: flex;
    align-items: center;
    gap: 4px;

    padding: 10px;
    border-radius: 15px;

    color: white;

    user-select: none;
    cursor: pointer;
    
    transition: all 0.225s ease-out;

    &:hover {
        background: rgba(var(--white));
        color: black;
    }

    &--active {
        background: white;
        color: black;
    }
}

.icon {
    font-size: 35px;
}

</style>