import { useRouterStore } from "@/store/router";
import type { RouteLocationNormalized } from "vue-router";

export function updateActiveDomainName(value: RouteLocationNormalized) {
    const routerStore = useRouterStore();

    routerStore.activeDomainName = value.name;
}