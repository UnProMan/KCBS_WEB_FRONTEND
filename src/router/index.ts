import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router';
import { navigations } from './navigation.ts';
import { updateActiveDomainName } from './navigationGuide.ts';
import { useUserStore } from '@/store/useUserStore.ts';

const generatedNavigations = navigations.flatMap(
    ({id, path, component}) => {
        return {
            name: id,
            path,
            component
        };
    }
).filter(({component}) => !!component) as RouteRecordRaw[];

const routes = [
    {
        path: '/',
        redirect: {path : '/main'}
    },
    {
        path: '/error',
        component: () => import('@/components/common/ErrorPage.vue')
    },
    ...generatedNavigations
];

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_ROUTER_BASE_URL),
    routes
});

router.beforeEach((to, _, next) => {
    const userStore = useUserStore();
    const navi = navigations.find(f => f.id === to.name);

    /**
     * navi?.isLoginShow !== undefined && navi.isLoginShow !== userStore.isLogin
     * 로그인을 하거나 안했을때만 보이고, 현재 로그인 상태와 맞지 않으면
     * (만약 navi.isLoginShow가 undefined면 이건 로그인을 하건 비로그인이건 언제든 보임)
     * 
     * 메인으로 return
     */
    if (navi?.isLoginShow !== undefined && navi.isLoginShow !== userStore.isLogin) {
        return next({ name: 'main' });
    } else {
        updateActiveDomainName(to);
        return next();
    }
});

export default router
