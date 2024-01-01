import api from '@/api/index';
import type { User, LoginRequest } from '@/model/User';
import { useQuery } from 'vue-query';
import { useUserStore } from '@/store/useUserStore';
import { useRouter } from 'vue-router';
import { computed, type ComputedRef } from 'vue';
import type { AxiosError } from 'axios';

const useLoginUserQuery = (req: ComputedRef<LoginRequest>) => {
    const userStore = useUserStore();
    const router = useRouter();
    const queryKey = computed(() => req.value.queryParams);

    return useQuery(['loginUserQuery', queryKey], () =>
        api.user.loginUser(req.value),
        {
            enabled: false,
            onSuccess: (data: User) => {
                userStore.setLoginUser(data);        
                        
                router.push('/main');
            },
            onError: (error: AxiosError) => {
                console.log(error);
            }
        }
    );
};

export default useLoginUserQuery;