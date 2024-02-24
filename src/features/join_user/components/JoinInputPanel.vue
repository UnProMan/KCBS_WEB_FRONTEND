<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue';
import BaseText from '@/components/base/BaseText.vue';
import type { JoinUserRequest } from '@/model/User.ts';
import { ref, computed } from 'vue';
import { useAlertStore } from '@/store/useAlertStore.ts';
import api from "@/api/index.ts";
import useJoinUserMutation from '../composables/useJoinUserMutation.ts';
import { formatDate, formatPhoneNumber } from '@/components/functions/formatFunc.ts';

const studentId = ref<string>('');
const name = ref<string>('');
const email = ref<string>('');
const password = ref<string>('');
const password_check = ref<string>('');
const birthday = ref<string>('');
const phone_number = ref<string>('');
const kisu = ref<number>( 30 + (new Date().getFullYear() - 2022) ); // 22년도에 30기가 신입국원이였던걸 이용

const joinUserObject = computed<JoinUserRequest>(() => {
    return {
        studentId: studentId.value,
        name: name.value,
        email: email.value,
        password: password.value,
        birthday: formatDate(birthday.value),
        phone_Number: formatPhoneNumber(phone_number.value),
        kisu: Number(kisu.value)
    };
});

/* Methods */

// 공백 체크
const isBlank = (): boolean => 
    !(
        studentId.value.trim()
        || name.value.trim()
        || email.value.trim()
        || password.value.trim()
        || password_check.value.trim()
        || birthday.value.trim()
        || phone_number.value.trim()
        || kisu.value
    );

// 학번 형식 체크
const isValidStudentId = (): boolean =>
    /^\d{10}$/.test(studentId.value.toString());

// 이메일 형식 체크
const isValidEmail = (): boolean =>
    /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(email.value.toString());


// 비밀번호 형식 체크
const isValidPassword = (): boolean =>
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(password.value.toString());


// 생년월일 형식 체크
const isValidBirthday = (): boolean =>
    /^\d{8}$/.test(birthday.value.toString());


// 입력받은 생년월일이 현재일보다 뒤인지 체크
// 생년월일은 현재일보다 뒤일 수 없으므로 오류 처리
const isDateAfterToday = () => {
    const inputDate = formatDate(birthday.value);
    const currentDate = new Date();

    return inputDate >= currentDate;
};

// 전화번호 형식 체크
const isValidPhoneNumber = (): boolean =>
    /^010\d{8}$/.test(phone_number.value.toString());

const handlerJoinButton = () => {
    // 공백 check
    if (isBlank()) {
        showAlert('공백이 존재합니다.');
        return;
    };

    // 학번 형식 체크
    if (!isValidStudentId()) {
        showAlert('학번은 10자리 숫자로 입력해주세요.');
        return;
    };

    // 이메일 형식 체크
    if (!isValidEmail()) {
        showAlert('이메일 형식이 잘못되었습니다.');
        return;
    };

    // 비밀번호 체크
    if (!isValidPassword()) {
        showAlert('비밀번호 형식이 잘못되었습니다.');
        return;
    };

    // 비밀번호 확인 체크
    if (password.value != password_check.value) {
        showAlert('비밀번호가 일치하지 않습니다.');
        return;
    };

    // 생년월일 형식 체크
    if (!isValidBirthday()) {
        showAlert('생년월일 형식(YYYYMMDD)이 잘못되었습니다.');
        return;
    };

    // 생년월일 날짜 체크
    if (isDateAfterToday()) {
        showAlert('생년월일은 현재일보다 과거어야 합니다.');
        return;
    }

    // 전화번호 형식 체크(010부터 시작)
    if (!isValidPhoneNumber()) {
        showAlert('전화번호 형식이 잘못되었습니다.');
        return;
    };

    mutate(joinUserObject.value);
};

const showAlert = (message: string) => {
    useAlertStore().setContent({
        type: 'error',
        title: '회원가입',
        message: message
    });
}

const { mutate } = useJoinUserMutation();

</script>

<template>
    
    <div class="input-container layout__flexColumn scrollbar">
        <BaseText width="100%" caption="학번" :numberFilter="true" v-model:value="studentId" />
        <BaseText width="100%" caption="이름" v-model:value="name" />
        <BaseText width="100%" caption="이메일" v-model:value="email" />
        <BaseText width="100%" caption="비밀번호 (문자, 숫자, 특수문자 포함 8~20자)" type="password" v-model:value="password" />
        <BaseText width="100%" caption="비밀번호 확인" type="password" v-model:value="password_check" />
        <BaseText width="100%" caption="생년월일 (YYYYMMDD)" :numberFilter="true" v-model:value="birthday" />
        <BaseText width="100%" caption="전화번호 ('-' 제외 11자리 입력)" :numberFilter="true" v-model:value="phone_number" />
        <BaseText width="100%" caption="기수" :numberFilter="true" v-model:value="kisu" />
        <BaseButton width="100%" @click="handlerJoinButton" >회원가입</BaseButton>
    </div>

</template>

<style lang="scss" scoped>

.input-container {
    padding-top: 10px;
}

// ---------------------- PC ----------------------

@media screen and (min-width: 1025px) { 

.input-container {
    gap: 35px;
}

}


// ---------------------- Phone ----------------------


@media screen and (max-width: 1024px) {

.input-container {
    gap: 20px;
}

}

</style>