import type { UserRole } from "@/model/User";
import type { RouteComponent } from "vue-router";

export interface Navigation {
    id: string;
    name: string;
    path: string;
    icon: string;
    component?: RouteComponent;
    accessPoint?: UserRole[];
    isLoginShow?: boolean; // true -> 로그인일 때, false -> 비로그인일 때, undefined(안쓰면) -> 둘다 네비게이션 바에 보임
}

export const navigations: Navigation[] = [
    {
        id: 'main',
        name: '메인',
        path: '/main',
        icon: 'home',
        component: () => import('@/features/main/page/MainPage.vue'),
    },
    {
        id: 'login',
        name: '로그인',
        path: '/login',
        icon: 'account_circle',
        component: () => import('@/features/login/page/LoginPage.vue'),
        isLoginShow: false,
    },
    {
        id: 'signup',
        name: '회원가입',
        path: '/signUp',
        icon: 'person_add',
        isLoginShow: false,
        component: () => import('@/features/join_user/page/JoinUserPage.vue')
    },
    {
        id: 'logout',
        name: '로그아웃',
        path: '/logout',
        icon: 'logout',
        isLoginShow: true,
        component: () => import('@/features/logout/LogoutPage.vue')
    }
];