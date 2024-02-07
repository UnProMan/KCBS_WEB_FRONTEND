<script setup lang="ts">
import BaseCard from '@/components/base/BaseCard.vue';
import PersonalStatus from '../components/PersonalStatus.vue';
import DetailsUser from '../components/DetailsUser.vue';
import type { PersonalStatusUsers } from '@/model/User';
import { ref, computed } from 'vue';
import BaseButton from '@/components/base/BaseButton.vue';
import BaseIconText from '@/components/base/BaseIconText.vue';

const detailUser = ref<PersonalStatusUsers>(null);
/**
 * 텍스트 필드의 정보 저장하는 변수
 */
const searchText = ref<String>('');
/**
 * PersonalStatus에 Props로 데이터를 전달하는 변수
 */
const propsData = ref<String>('');

const isShow = computed(() => 
    !!detailUser.value
);

/**
 * 엔터나 버튼 클릭시 텍스트 필드를 저장한 변수의 정보를 
 * Props로 데이터 전달하는 변수에 넘기고 검색 시작
 */
const handleSearch = () => {
    propsData.value = searchText.value;
};

</script>

<template>
    
    <div class="userinfo layout__flexColumn">

        <div class="top-container">
            <div class="default__title4">KCBS 인원현황</div>
            
            <div class="search-container">
                <BaseIconText
                    width="200px"
                    height="50px"
                    icon="search"
                    caption="이름 검색"
                    v-model:value="searchText"
                    @keyup.enter="handleSearch"
                />
                
                <BaseButton
                    width="80px"
                    height="50px"
                    @click="handleSearch"
                >
                    검색
                </BaseButton>
            </div>
        </div>

        <div 
            class="personal-wrap"
        >
            <PersonalStatus 
                v-model:value="detailUser" 
                :searchName="propsData"
            />

            <TransitionGroup name="slide">
                <DetailsUser 
                    :info="detailUser"
                    class="details"
                    v-model:value="detailUser"
                    v-if="isShow"
                />
            </TransitionGroup>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@import '@/assets/scss/anime.scss';

.userinfo {
    width: 90%;
    height: 90%;
    
    gap: 20px;
    padding: 0px 10px;
    
    overflow: hidden;

    @include card_fade_in;
}

.top-container {
    display: flex;
    justify-content: space-between;
    padding: 0px 10px;
}

.search-container {
    display: flex;
    gap: 10px;
    align-items: center;
}

.personal-wrap {
    display: flex;
    gap: 40px;
}

.slide-enter-active,
.slide-leave-active {
    transition: all 0.4s ease;
}
.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    transform: translateX(30%);
}

</style>