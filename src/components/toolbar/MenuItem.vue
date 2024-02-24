<script setup lang="ts">
import BaseIcon from '@/components/base/BaseIcon.vue';

interface Props {
    icon: string;
    title: string;
    action: () => void;
    isActive?: () => void;
}

/**
 * Props
 */
const props = defineProps<Props>();  

</script>

<template>
    
    <button
        class="menuItem"
        :class="{ 'menuItem-isActive': isActive ? isActive() : null }"
        @click="props.action"
        :title="props.title"
    >
        <BaseIcon class="icon" :name="props.icon" />
    </button>

</template>

<style lang="scss" scoped>

.menuItem {
    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    color: black;
    
    border: none;
    border-radius: 0.4rem;

    cursor: pointer;

    width: 1.75rem;
    height: 1.75rem;

    padding: 0.25em;
    margin-right: 0.25rem;

    &-isActive,
    &:hover {
        background-color: #303030;
    }
}

.icon {
    font-size: 1.7vmin;
}

</style>