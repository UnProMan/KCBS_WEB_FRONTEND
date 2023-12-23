import type { UserRole } from "@/model/User";
import type { RouteComponent } from "vue-router";

export interface Navigation {
    id: string;
    name: string;
    path: string;
    component?: RouteComponent;
    icon?: string;
    accessPoint?: UserRole[];
}

export const navigations: Navigation[] = [
    {
        id: 'main',
        name: '메인',
        path: '/main',
        icon: 'home',
        component: () => import('@/features/main/page/MainPage.vue')
    },
    {
        id: 'login',
        name: '로그인',
        path: '/login',
        icon: 'login'
    },
    {
        id: 'signup',
        name: '회원가입',
        path: '/signUp',
        icon: 'input'
    }
];