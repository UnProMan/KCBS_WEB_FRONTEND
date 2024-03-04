import api from '@/api/index.ts';
import { useQuery } from 'vue-query';
import type { AxiosError } from 'axios';
import { useErrorStore } from '@/store/useErrorStore.ts';
import type { ErrorResponse } from '@/model/Error.ts';
import { useRouter } from 'vue-router';
import type { DailyTaskRequest } from '@/model/DailyTask.ts';
import { type ComputedRef, computed } from 'vue';

const useDailyTasksQuery = (req: ComputedRef<DailyTaskRequest>) => {
    const router = useRouter();
    const queryKey = computed(() => req.value.queryParams);

    return useQuery(['dailyTasksQuery', queryKey], () =>
        api.dailyTasks.dailyTasks(req.value),
        {
            onError: (error: AxiosError) => {
                useErrorStore().setError(
                    error.response?.data as ErrorResponse
                );

                router.push('/error');
            }
        }
    );
};

export default useDailyTasksQuery;