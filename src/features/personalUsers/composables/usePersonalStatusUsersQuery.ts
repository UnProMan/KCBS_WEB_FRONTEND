import api from '@/api/index';
import type { PersonalStatusRequest } from '@/model/User';
import { useQuery } from 'vue-query';
import type { AxiosError } from 'axios';
import { type ComputedRef, computed } from 'vue';
import { useErrorStore } from '@/store/useErrorStore';
import { useRouter } from 'vue-router';
import type { ErrorResponse } from '@/model/Error';

const usePersonalStatusUserQuery = (req: ComputedRef<PersonalStatusRequest>) => {
    const queryKey = computed(() => req.value.queryParams);
    const router = useRouter();

    return useQuery(['personalStatusUsersQuery', queryKey], () =>
        api.user.personalStatusUsers(req.value),
        {
            onError: (error: AxiosError) => {
                const errorResponse = error.response?.data as ErrorResponse;

                useErrorStore().setError(errorResponse);
                router.push('/error');
            }
        }
    );
};

export default usePersonalStatusUserQuery;