import api from '@/api/index.ts';
import type { User, LoginRequest } from '@/model/User.ts';
import { useQuery } from 'vue-query';
import { useUserStore } from '@/store/useUserStore.ts';
import { useRouter } from 'vue-router';
import { computed, type ComputedRef } from 'vue';
import type { AxiosError } from 'axios';
import { useAlertStore } from '@/store/useAlertStore.ts';

const useLoginUserQuery = (req: ComputedRef<LoginRequest>) => {
    const userStore = useUserStore();
    const router = useRouter();
    const queryKey = computed(() => req.value.queryParams);

    return useQuery(['loginUserQuery', queryKey], () =>
        api.user.loginUser(req.value),
        {
            enabled: false,
            retry: false,
            onSuccess: (data: User) => {
                userStore.setLoginUser(data);        
                router.push('/main');
            },
            onError: (error: AxiosError) => {
                useAlertStore().setContent({
                    type: 'error',
                    title: '로그인',
                    message: '학번이나 비밀번호가 틀렸습니다.'
                });
            }
        }
    );
};

export default useLoginUserQuery;