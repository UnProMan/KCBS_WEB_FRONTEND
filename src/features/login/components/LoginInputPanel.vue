<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue';
import BaseText from '@/components/base/BaseText.vue';
import useLoginUserQuery from '../composables/useLoginUserQuery';
import { ref, computed } from 'vue';
import type { LoginRequest } from '@/model/User';
import { useAlertStore } from '@/store/useAlertStore';

const studentId = ref<string>('');
const password = ref<string>('');

const requestData = computed<LoginRequest>(() => ({
    queryParams: {
        "studentId": studentId.value,
        "password": password.value,
    },
}));

/* 로그인 버튼 액션 */
const handlerLoginButton = () => {
    if (!studentId.value.trim() || !password.value.trim()) {
        useAlertStore().setContent({
            type: "error",
            title: "로그인",
            message: "학번이나 비밀번호를 입력해주세요."
        });
    } else {
        refetch.value();
    }
};

const { refetch } = useLoginUserQuery(requestData);

</script>

<template>
    
     <div class="input-container layout__flexColumn">
        <BaseText width="100%" caption="학번" v-model:value="studentId" numberFilter="1" />
        <BaseText width="100%" caption="비밀번호" v-model:value="password" type="password" />
        <BaseButton width="100%" @click="handlerLoginButton" >로그인</BaseButton>
    </div>

</template>

<style lang="scss" scoped>

// ---------------------- PC ----------------------

@media screen and (min-width: 1025px) {  

.input-container {
    flex: 2.5;

    gap: 50px;
}

}


// ---------------------- Phone ----------------------


@media screen and (max-width: 1024px) {

.input-container {
    // flex: 2.5;
    gap: 40px;
}

}

</style>