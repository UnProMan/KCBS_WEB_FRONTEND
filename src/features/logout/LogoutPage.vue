<script setup lang="ts">
import { useAlertStore } from '@/store/useAlertStore';
import { useUserStore } from '@/store/useUserStore';
import { watch } from 'vue';
import { useRouter } from 'vue-router';
import useLogoutUserQuery from './composables/useLogoutUserQuery';

const alertStore = useAlertStore();
const userStore = useUserStore();
const router = useRouter();
const { refetch } = useLogoutUserQuery();

alertStore.setContent({
    type: "question",
    title: "로그아웃",
    message: "로그아웃 하시겠습니까?"
});

/**
 * YesNo 창이 떳을 경우 만약 사용자가 확인을 누르면 isOkay가 변경되면서 로그아웃 진행
 * 만약 취소를 누르면 isAlert가 변경되면서 창이 사라지고 메인으로 
 */
watch(
    () => ({isOkay: alertStore.isOkay, isAlert: alertStore.isAlert}),
    ({isOkay, isAlert}) => {
        if (isOkay) refetch.value();

        if (!isAlert) router.push('/main');
    }
);

</script>

<template>
    
</template>