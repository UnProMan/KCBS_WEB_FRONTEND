import type { UserRole } from "@/model/User.ts";
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
        component: () => import('@/features/joinUser/page/JoinUserPage.vue')
    },
    {
        id: 'dilayTask',
        name: '라디오/뉴스 일정',
        path: '/dailyTask',
        icon: 'task',
        component: () => import('@/features/dailyTask/page/DailyTaskPage.vue'),
        isLoginShow: true
    },
    {
        id: 'users',
        name: 'KCBS 인원현황',
        path: '/users',
        icon: 'group',
        component: () => import('@/features/personalUsers/page/PersonalUsersPage.vue'),
        isLoginShow: true
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