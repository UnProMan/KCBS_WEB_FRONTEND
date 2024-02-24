import api from '@/api/index.ts';
import { useQuery } from 'vue-query';
import { storeToRefs } from 'pinia';
import { useAlertStore } from '@/store/useAlertStore.ts';
import { useUserStore } from '@/store/useUserStore.ts';

const useLogoutUserQuery = () => {
    const { isAlert } = storeToRefs(useAlertStore());
    const userStore = useUserStore();

    return useQuery(['logoutUserQuery'], api.user.logoutUser, {
        enabled: false,
        onSuccess: () => {
             userStore.logout();
             isAlert.value = false;
        },
    });
};

export default useLogoutUserQuery;