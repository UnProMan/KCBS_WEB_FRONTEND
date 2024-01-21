<script setup lang="ts">
import BaseIcon from '@/components/base/BaseIcon.vue';
import BaseButton from '@/components/base/BaseButton.vue';
import { useRouter } from 'vue-router';
import { useErrorStore } from '@/store/useErrorStore';

const router = useRouter();
const error = useErrorStore().getError();

const handleGoHome = () => {
    router.push('/main');
};

</script>

<template>

    <div class="error-container layout__flexColumn">
        <div class="header">
            <BaseIcon name="error" class="icon" weight="700" />
            <div class="error-status">{{ error.httpStatus }} ERROR</div>
        </div>

        <div class="error-code">{{ error.code }}</div>
        <div class="error-message">{{ error.message }}</div>

        <BaseButton class="button" color="var(--red-500)" size="large" @click="handleGoHome">
            <BaseIcon name="home" class="btn-icon" weight="700" />
            메인으로
        </BaseButton>
    </div>

</template>

<style lang="scss" scoped>

.error-container {
    align-items: center;
    gap: 25px;
}

.header {
    display: flex;
    align-items: center;

    gap: 15px;
}

.icon {
    font-size: 70px;
    color: rgba(var(--red-500));
}

.error-status {
    font-size: 50px;
    color: rgba(var(--red-500));
}

.error-code {
    font-size: 35px;
}

.error-message {
    font-size: 25px;
}

.btn-icon {
    font-size: 30px;
}

</style>