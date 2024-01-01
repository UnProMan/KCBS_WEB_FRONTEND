<script setup lang="ts">
import NavigationBar from './NavigationBar.vue';
import { navigations } from '@/router/navigation';
import { useRouterStore } from "@/store/router";
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/useUserStore';

/* Setting */

const routerStore = useRouterStore();
const userStore = useUserStore();

/* Methods */

const router = useRouter();
const navigationClick = (path: string): void => {
    router.push(path);
};

/**
 *  현재 선택된 메뉴바를 확인하는 기능 수행
 */
const isActive = (id: string): boolean => {
    return id === routerStore.activeDomainName;
};

/**
 * isLoginShow : 네비게이션바가 나올 때 기준
 * userStore.isLogin : 로그인 여부
 * 
 * 만약 isLogin이 undefined의 경우 로그인 여부 상관없이 항상 나옴
 * 그 외에는 userStore의 로그인 여부와 비교하여 나오게함
 */
const isShow = (isLoginShow: boolean | undefined): boolean => {
    if (isLoginShow === undefined) return true;
    
    return userStore.isLogin === isLoginShow;
}

</script>

<template>
    
    <div class="navigation-bars layout__flexColumn">
        <template v-for="item in navigations" :key="item">
            <NavigationBar
                v-if="isShow(item?.isLoginShow)"
                :id="item.id"
                :name="item.name"
                :path="item.path"
                :icon="item.icon"
                :accessPoint="item?.accessPoint"
                :active="isActive(item.id)"
                @click="navigationClick(item.path)"
            />
        </template>
    </div>

</template>

<style lang="scss" scoped>

.navigation-bars {
    gap: 14px;
}

</style>@/store/router