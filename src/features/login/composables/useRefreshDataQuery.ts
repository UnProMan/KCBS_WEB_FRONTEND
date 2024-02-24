import api from "@/api/index.ts";
import type { User } from '@/model/User.ts';
import { useQuery } from "vue-query";
import { useUserStore } from "@/store/useUserStore.ts";

const useRefreshDataQuery = () => {
    const userStore = useUserStore();

    return useQuery(['refreshDataQuery'], api.user.refreshData, {
        retry: false,
        enabled: false,
        onSuccess: (data: User) => {
            if (data) {
                userStore.setLoginUser(data);
            }   
        },
    });
};

export default useRefreshDataQuery;