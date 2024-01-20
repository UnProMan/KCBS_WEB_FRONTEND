import api from '@/api/index';
import type { JoinUserRequest } from '@/model/User';
import { useMutation } from 'vue-query';
import { useRouter } from 'vue-router';
import { type ComputedRef } from 'vue';
import type { AxiosError } from 'axios';
import type { ErrorResponse } from '@/model/Error';
import { useAlertStore } from '@/store/useAlertStore';

const useJoinUserMutation = (req: ComputedRef<JoinUserRequest>) => {
    const router = useRouter();

    return useMutation(() => api.user.joinUser(req.value), {
        onSuccess: () => {
            useAlertStore().setContent({
                type: 'info',
                title: '회원가입',
                message: '회원가입 신청이 완료되었습니다.'
            });

            router.push('/main');
        },
        onError: (error: AxiosError) => {
            const errorResponse = error.response?.data as ErrorResponse;

            if (errorResponse.httpStatus == 400 || errorResponse.httpStatus == 409) {
                useAlertStore().setContent({
                    type: 'error',
                    title: '회원가입',
                    message: errorResponse.message
                });
            }
        }
    });
};

export default useJoinUserMutation;