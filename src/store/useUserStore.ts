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
                id: user.value!.id,
                studentId: user.value!.studentId,
                name: user.value!.name,
                email: user.value!.email,
                birthday: user.value!.birthday,
                phone_Number: user.value!.phone_Number,
                attendance_state: user.value!.attendance_state,
                role: user.value!.role,
                file_ID: user.value?.file_ID,
                accessToken: value
            };
    }

    return { 
        user, 
        isLogin, 
        setLoginUser, 
        logout,
        setNewAccessToken
    };
});