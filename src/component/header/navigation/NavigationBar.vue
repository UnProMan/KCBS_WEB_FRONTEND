<script setup lang="ts">
import type { UserRole } from "@/model/User";
import BaseIcon from '@/component/base/BaseIcon.vue';

interface Props {
    id: string;
    name: string;
    path: string;
    icon: string;
    accessPoint?: UserRole[];
    active?: string;
}

const props = defineProps<Props>();
</script>

<template>

    <div class="navi-container default__navigationBar">
        <BaseIcon
            :name="props?.icon"
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

    &:hover {
        background: rgba(var(--white));
        color: black;
        transition: all 0.3s ease-out;
    }
}

.icon {
    font-size: 35px;
}

</style>