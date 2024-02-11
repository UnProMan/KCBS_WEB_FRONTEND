<script setup lang="ts">
import BaseCard from '@/components/base/BaseCard.vue';
import LoginInputPanel from '../components/LoginInputPanel.vue';

</script>

<template>

    <BaseCard class="login-container layout__flexColumn">
        <div class="title">로그인</div>

        <LoginInputPanel/>

        <div class="other-container">
            추후에 추가
        </div>
    </BaseCard>

</template>

<style scoped lang="scss">
@import '@/assets/scss/anime.scss';

// ---------------------- PC ----------------------

@media screen and (min-width: 1025px) {  

.login-container {
    width: 30%;
    height: 60%;

    justify-content: space-between;

    padding: 28px 50px;

    @include card_fade_in;
}

.title {
    flex: 1;

    font-weight: 800;
    font-size: 4.5vmin;

    text-align: center;
    
    padding-top: 20px;
}

.other-container {
    flex: 1;
}

}


// ---------------------- Phone ----------------------


@media screen and (max-width: 1024px) {

.login-container {
    width: 100%;
    height: 100%;

    align-items: center;

    gap: 80px;

    padding: 30px 40px;

    @include card_fade_in;
}

.title {
    font-weight: 800;
    font-size: 4.5vmax;

    text-align: center;
    
    padding-top: 20px;
}

} 

</style>