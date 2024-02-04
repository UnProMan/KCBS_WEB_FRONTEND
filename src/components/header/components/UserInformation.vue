<script setup lang="ts">
import { useUserStore } from '@/store/useUserStore';
import { userRoleMap } from '@/model/User';
import type { UserRoleCode } from '@/model/User';
import { formatImageURL } from '@/components/functions/formatFunc';
import BaseIcon from '@/components/base/BaseIcon.vue';

const userStore = useUserStore();

</script>

<template>

    <div 
        v-if="userStore.isLogin"
        class="info-container"
    >
        <div class="img-container">
            <img :src="formatImageURL(userStore.user.file_ID)" width="45px" height="45px" />
        </div>

        <div class="layout__flexColumn">
            <div class="role default__subtitle3">
                {{ userRoleMap.get(userStore.user.role) }}
            </div>
            <div class="name default__title4">
                {{ userStore.user.name }}
            </div>
        </div>
    </div>

    <div
        v-else
        class="default__title4"
        style="color: white;"
    >
        비회원
    </div>

</template>

<style lang="scss" scoped>

.info-container {
    display: flex;
    align-items: center;
    gap: 12px;

    transition: all 0.125s ease-out;

    border-radius: 25px;
    padding: 12px;

    cursor: pointer;
    user-select: none;

    &:hover {
        box-shadow: inset 0px 0px 10px rgba(var(--black));
    }

}

.img-container {
    overflow: hidden;
    border-radius: 30px;
    width: 45px;
    height: 45px;
}

.role {
    color: rgba(var(--gray));
}

.name {
    color: white;
}

</style>