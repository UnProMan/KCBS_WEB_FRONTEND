import api from '@/api/index';
import { useQuery } from 'vue-query';
import { storeToRefs } from 'pinia';
import { useAlertStore } from '@/store/useAlertStore';
import { useUserStore } from '@/store/useUserStore';

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