<script setup lang="ts">
import BaseCard from '@/components/base/BaseCard.vue';
import PersonalStatus from '../components/PersonalStatus.vue';
import DetailsUser from '../components/DetailsUser.vue';
import type { PersonalStatusUsers } from '@/model/User';
import { ref, computed } from 'vue';
import BaseButton from '@/components/base/BaseButton.vue';
import BaseIconText from '@/components/base/BaseIconText.vue';
import { isDeskTop } from '@/components/functions/windowFunc'; 

const detailUser = ref<PersonalStatusUsers>();
/**
 * 텍스트 필드의 정보 저장하는 변수
 */
const searchText = ref<string>('');
/**
 * PersonalStatus에 Props로 데이터를 전달하는 변수
 */
const propsData = ref<string>('');

const isShow = computed((): boolean => 
    !!detailUser.value
);

/**
 * 엔터나 버튼 클릭시 텍스트 필드를 저장한 변수의 정보를 
 * Props로 데이터 전달하는 변수에 넘기고 검색 시작
 */
const handleSearch = (): void => {
    propsData.value = searchText.value;
};

/**
 * Viewer에 따라 텍스트필드와 버튼 높이 변경
 */
const changedHeight = (): string => 
    isDeskTop() ? "100%" : "40px";

/**
 * Viewer에 따라 텍스트필드 또는 버튼 너비 변경
 */
const changedWidth = (type: 'text' | 'button'): string => {
    if (type === 'text') {
        return isDeskTop() ? "35%" : "43%";
    } else {
        return isDeskTop() ? "95px" : "75px";
    }
}

</script>

<template>
    
    <div class="userinfo layout__flexColumn">

        <div class="top-container">
            <div class="title">KCBS 인원현황</div>
            
            <div class="search-container">
                <BaseIconText
                    :width="changedWidth('text')"
                    :height="changedHeight()"
                    icon="search"
                    caption="이름 검색"
                    v-model:value="searchText"
                    @keyup.enter="handleSearch"
                />
                
                <BaseButton
                    :width="changedWidth('button')"
                    :height="changedHeight()"
                    class="searchButton"
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
                    v-if="isShow && detailUser"
                />
            </TransitionGroup>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@import '@/assets/scss/anime.scss';

// ---------------------- PC ----------------------

@media screen and (min-width: 1025px) { 

.userinfo {
    width: 100%;
    height: 100%;
    
    gap: 20px;
    padding: 50px 60px;
    
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
    justify-content: right;
    align-items: center;
}

.personal-wrap {
    display: flex;
    gap: 40px;
}

.title {
    font-weight: 800;
    font-size: 2.5vmin;

    width: 25%;
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

}


// ---------------------- Phone ----------------------


@media screen and (max-width: 1024px) {

.userinfo {
    width: 100%;
    height: 100%;
    
    gap: 20px;
    padding: 15px;
    
    overflow: hidden;

    @include card_fade_in;
}

.top-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0px 10px;
}

.search-container {
    display: flex;

    gap: 10px;
    
    justify-content: right;
    align-items: center;
}


.title {
    font-weight: 800;
    font-size: 2.5vmax;
}

.details {
    position: absolute;
    top: 5%;
    right: 0;

}

.slide-enter-active,
.slide-leave-active {
    transition: all 0.4s ease;
}
.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    transform: translateX(50%);
}

} 

</style>