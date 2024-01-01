<script setup lang="ts">
import BaseCard from '@/components/base/BaseCard.vue';
import InputPanel from '../components/InputPanel.vue';

</script>

<template>

    <BaseCard class="login-container layout__flexColumn">
        <div class="default__title1 title">로그인</div>

        <InputPanel style="flex: 2.5;"/>

        <div class="other-container">
            추후에 추가
        </div>
    </BaseCard>

</template>

<style scoped lang="scss">
@import '@/assets/scss/anime.scss';

.login-container {
    width: 30%;
    height: 60%;

    justify-content: space-between;

    padding: 28px 50px;

    @include card_fade_in;
}

.title {
    flex: 1;

    text-align: center;
    padding-top: 20px;
}

.other-container {
    flex: 1;
}

</style>