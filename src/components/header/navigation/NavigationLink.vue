<script setup lang="ts">
import NavigationBar from './NavigationBar.vue';
import { navigations } from '@/router/navigation.ts';
import { useRouterStore } from "@/store/router.ts";
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/useUserStore.ts';
import BaseIcon from '@/components/base/BaseIcon.vue';
import { ref, computed } from 'vue';
import { isDeskTop } from '@/components/functions/windowFunc.ts';

/* Setting */

const routerStore = useRouterStore();
const userStore = useUserStore();

/**
 * Viewer: Phone
 * 
 * 메뉴바 보이게 할지 안보이게 할지 정하는 변수 
 * 
 * PC화면의 경우 계속 보여야 하므로 true
 * 폰 화면은 처음에는 안보여야 하므로 false
 * 
 */
const menuShow = ref<boolean>(false);

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

/**
 * Viewer : Phone
 * 
 * 메뉴 버튼을 클릭시 변수 변경
 * 
 */
const clickMenu = () => {
    menuShow.value = !menuShow.value;
}

const iconName = computed(() => {
    return menuShow.value ? 'close' : 'menu';
});

</script>

<template>
    
    <TransitionGroup name="slide">
        <div 
            class="navigation-bars layout__flexColumn"
            v-if="isDeskTop() || menuShow"
        >
            <template v-for="item in navigations" :key="item">
                <NavigationBar
                    v-if="isShow(item?.isLoginShow)"
                    :id="item.id"
                    :name="item.name"
                    :path="item.path"
                    :icon="item.icon"
                    :accessPoint="item?.accessPoint"
                    :active="isActive(item.id)"
                    @click="[navigationClick(item.path), clickMenu()]"
                />
            </template>
        </div>
    </TransitionGroup>

    <BaseIcon :name="iconName" class="icon" @click="clickMenu" />

</template>

<style lang="scss" scoped>

// ---------------------- PC ----------------------

@media screen and (min-width: 1025px) {

.navigation-bars {
    gap: 14px;
}

.icon {
    display: none;
    visibility: hidden;
}

}


// ---------------------- Phone ----------------------


@media screen and (max-width: 1024px){ 

.navigation-bars {
    position: absolute;

    left: 0px;
    top: 4%;

    width: 90%;
    height: 100%;

    padding: 20px 10px;

    background-color: rgba(var(--dark-gray));
    
    z-index: 999;
}

.icon {
    color: white;
    font-size: 3.3vmax;
}

.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease-out;
}
.slide-enter-from,
.slide-leave-to {
    transform: translateX(-100%);
}

}

</style>