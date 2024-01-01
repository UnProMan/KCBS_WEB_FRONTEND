import { defineStore } from "pinia";
import { ref } from "vue";

export const useRouterStore = defineStore("router-store", () => {
    const activeDomainName = ref<string>("");

    return { activeDomainName };
});