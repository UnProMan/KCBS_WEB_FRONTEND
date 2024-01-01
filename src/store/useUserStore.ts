import { defineStore } from "pinia";
import { ref } from 'vue';
import type { User } from '@/model/User';

export const useUserStore = defineStore("user-store", () => {
    const user = ref<User>(); 
    const isLogin = ref<boolean>(false);

    const setLoginUser = (value: User) => {
        user.value = value;
        isLogin.value = true;
    };

    const logout = () => {
        user.value = undefined;
        isLogin.value = false;
    };

    const setNewAccessToken = (value: string) => {
        if (isLogin.value)
            user.value = {
                ...user.value!,
                accessToken: value
            };
    };

    return { 
        user, 
        isLogin, 
        setLoginUser, 
        logout,
        setNewAccessToken
    };
});