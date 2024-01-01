import api from "@/api/index";
import type { User } from '@/model/User';
import { useQuery } from "vue-query";
import { useUserStore } from "@/store/useUserStore";

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