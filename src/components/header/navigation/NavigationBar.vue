<script setup lang="ts">
import type { UserRole } from "@/model/User.ts";
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
        class="navi-container"
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

// ---------------------- PC ----------------------

@media screen and (min-width: 1025px) {

.navi-container {
    display: flex;
    align-items: center;
    gap: 4px;

    font-size: 2.2vmin;
    font-weight: 550;

    padding: 10px;
    border-radius: 1.4vmin;

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
    font-size: 3.1vmin;
}

}


// ---------------------- Phone ----------------------


@media screen and (max-width: 1024px) {

.navi-container {
    display: flex;
    align-items: center;
    gap: 4px;

    font-size: 2.2vmax;
    font-weight: 550;

    padding: 8px;
    border-radius: 1.4vmax;

    color: white;

    user-select: none;
    cursor: pointer;
    
    transition: all 0.225s ease-out;

    &--active {
        background: white;
        color: black;
    }
}

.icon {
    font-size: 2.6vmax;
}

}

</style>