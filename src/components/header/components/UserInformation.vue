<script setup lang="ts">
import { useUserStore } from '@/store/useUserStore.ts';
import { userRoleMap } from '@/model/User.ts';
import type { UserRoleCode } from '@/model/User.ts';
import { formatImageURL } from '@/components/functions/formatFunc.ts';
import BaseIcon from '@/components/base/BaseIcon.vue';

const userStore = useUserStore();

</script>

<template>

    <div 
        v-if="userStore.user"
        class="info-container"
    >
        <div class="img-container">
            <img :src="formatImageURL(userStore.user.file_ID)"/>
        </div>

        <div class="layout__flexColumn">
            <div class="role">
                {{ userRoleMap.get(userStore.user.role) }}
            </div>
            <div class="name">
                {{ userStore.user.name }}
            </div>
        </div>
    </div>

    <div
        v-else
        class="nonMebers"
        style="color: white;"
    >
        비회원
    </div>

</template>

<style lang="scss" scoped>

// ---------------------- PC ----------------------

@media screen and (min-width: 1025px) {  

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
    border-radius: 2.3vw;
}

.img-container, img {
    width: 2.3vw;
    height: 2.3vw;
}

.role {
    font-size: 1.6vmin;
    font-weight: 500;

    color: rgba(var(--gray));
}

.name {
    font-size: 2.1vmin;
    font-weight: 800;

    color: white;
}

.nonMebers {
    font-size: 2.6vmin;
    font-weight: 800;
}

}


// ---------------------- Phone ----------------------


@media screen and (max-width: 1024px){ 

.layout__flexColumn {
    visibility: hidden;
    display: none;
}

.img-container {
    overflow: hidden;
    border-radius: 3.2vh;
}

.img-container, img {
    width: 3.2vh;
    height: 3.2vh;

    min-width: 25px;
    min-height: 25px;
}

.nonMebers {
    font-size: 4.3vmin;
    font-weight: 800;
}

}

</style>