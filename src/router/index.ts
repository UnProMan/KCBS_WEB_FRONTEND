import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router';
import { SERVER_PREFIX } from '@/model/Constants';
import { navigations } from './navigation';

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
    ...generatedNavigations
];

const router = createRouter({
    history: createWebHistory(SERVER_PREFIX),
    routes
})

export default router
