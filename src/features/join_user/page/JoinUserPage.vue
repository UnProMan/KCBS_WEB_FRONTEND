<script setup lang="ts">
import BaseCard from '@/components/base/BaseCard.vue';
import JoinInputPanel from '../components/JoinInputPanel.vue';

</script>

<template>

    <BaseCard class="join-container layout__flexColumn" >
        <div class="default__title1 title">회원가입</div>

        <JoinInputPanel style="flex: 4;" />
    </BaseCard>

</template>

<style lang="scss" scoped>
@import '@/assets/scss/anime.scss';

.join-container {
    width: 35%;
    height: 78%;

    justify-content: space-between;

    padding: 28px 50px;

    @include card_fade_in;
}

.title {
    flex: 1;

    text-align: center;
    padding-top: 15px;
}

</style>