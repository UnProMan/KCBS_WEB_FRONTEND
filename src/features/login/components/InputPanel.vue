<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue';
import BaseText from '@/components/base/BaseText.vue';
import useLoginUserQuery from '../composables/useLoginUserQuery';
import { ref } from 'vue';
import type { LoginRequest } from '@/model/User';
import { computed } from 'vue';

const studentId = ref<string>("");
const password = ref<string>("");

const requestData = computed<LoginRequest>(() => ({
    queryParams: {
        "studentId": studentId.value,
        "password": password.value,
    },
}));

/* 로그인 버튼 액션 */
const handlerLoginButton = () => {
    refetch.value();
};

const { refetch } = useLoginUserQuery(requestData);


</script>

<template>
    
     <div class="input-container layout__flexColumn">
        <BaseText width="100%" caption="학번" v-model:value="studentId" />
        <BaseText width="100%" caption="비밀번호" v-model:value="password" />
        <BaseButton width="100%" @click="handlerLoginButton" >로그인</BaseButton>
    </div>

</template>

<style lang="scss" scoped>

.input-container {
    flex: 2.5;

    gap: 50px;
}

</style>