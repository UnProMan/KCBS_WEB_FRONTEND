<script setup lang="ts">
import BaseCard from '@/components/base/BaseCard.vue';
import JoinInputPanel from '../components/JoinInputPanel.vue';

</script>

<template>

    <BaseCard class="join-container layout__flexColumn" >
        <div class="title">회원가입</div>

        <JoinInputPanel/>
    </BaseCard>

</template>

<style lang="scss" scoped>
@import '@/assets/scss/anime.scss';

// ---------------------- PC ----------------------

@media screen and (min-width: 1025px) { 

.join-container {
    width: 35%;
    height: 85%;

    justify-content: center;
    gap: 25px;

    padding: 15px 50px;

    @include card_fade_in;
}

.title {
    font-weight: 800;
    font-size: 4.5vmin;

    text-align: center;
}

}


// ---------------------- Phone ----------------------


@media screen and (max-width: 1024px) {

.join-container {
    width: 100%;
    height: 100%;

    align-items: center;

    gap: 30px;

    padding: 25px 40px;

    @include card_fade_in;
}

.title {
    font-weight: 800;
    font-size: 4.5vmax;

    text-align: center;

    padding-top: 15px;
}

}

</style>