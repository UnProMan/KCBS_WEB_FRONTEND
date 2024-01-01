<script setup lang="ts">
import { useUserStore } from '@/store/useUserStore';
import { userRoleMap } from '@/model/User';
import type { UserRoleCode } from '@/model/User';

const userStore = useUserStore();

</script>

<template>

    <div 
        v-if="userStore.isLogin"
        class="info-container layout__flexColumn"
    >
        <div class="role default__subtitle2">
            {{ userRoleMap.get(userStore.user.role) }}
        </div>
        <div class="name default__title4">
            {{ userStore.user.name }}
        </div>
    </div>

    <div
        v-else
        class="name default__title4"
    >
        비회원
    </div>

</template>

<style lang="scss" scoped>

.info-container {
    gap: 8px;
}

.role {
    color: rgba(var(--gray));
}

.name {
    color: white;
}

</style>