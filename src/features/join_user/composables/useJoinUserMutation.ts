import api from '@/api/index';
import type { JoinUserRequest } from '@/model/User';
import { useMutation } from 'vue-query';
import { useRoute, useRouter } from 'vue-router';
import { type ComputedRef } from 'vue';
import type { AxiosError } from 'axios';
import type { ErrorResponse } from '@/model/Error';
import { useAlertStore } from '@/store/useAlertStore';
import { useErrorStore } from '@/store/useErrorStore';


const useJoinUserMutation = () => {
    const router = useRouter();

    return useMutation(async (req: JoinUserRequest) => {
        console.log(req);
        await api.user.joinUser(req);
    }, {
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

            // 400, 409 에러는 입력된 데이터 문제이므로 알림창으로 처리
            if (errorResponse.httpStatus == 400 || errorResponse.httpStatus == 409) {
                useAlertStore().setContent({
                    type: 'error',
                    title: '회원가입',
                    message: errorResponse.message
                });
            } else {
                // 그 외의 오류는 에러 페이지에서 처리
                useErrorStore().setError(errorResponse);
                router.push('/error');
            };
        }
    });
};

// const useJoinUserMutation = (req: ComputedRef<JoinUserRequest>) => {
//     const router = useRouter();



//     return useMutation(() => api.user.joinUser(req.value), {
//         onSuccess: () => {
//             useAlertStore().setContent({
//                 type: 'info',
//                 title: '회원가입',
//                 message: '회원가입 신청이 완료되었습니다.'
//             });

//             router.push('/main');
//         },
//         onError: (error: AxiosError) => {
//             const errorResponse = error.response?.data as ErrorResponse;

//             // 400, 409 에러는 입력된 데이터 문제이므로 알림창으로 처리
//             if (errorResponse.httpStatus == 400 || errorResponse.httpStatus == 409) {
//                 useAlertStore().setContent({
//                     type: 'error',
//                     title: '회원가입',
//                     message: errorResponse.message
//                 });
//             } else {
//                 // 그 외의 오류는 에러 페이지에서 처리
//                 useErrorStore().setError(errorResponse);
//                 router.push('/error');
//             };
//         }
//     });
// };

export default useJoinUserMutation;