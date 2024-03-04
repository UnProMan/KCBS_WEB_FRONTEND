<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue';
import BaseIcon from '@/components/base/BaseIcon.vue';
import DailyTable from '../components/DailyTable.vue';
import { ref, computed } from 'vue';
import { formatString, formatDateToString } from '@/components/functions/formatFunc.ts';
import useDailyTasksQuery from '../composables/useDailyTasksQuery.ts';
import BaseSpinner from '@/components/base/BaseSpinner.vue';
import type { DailyTaskRequest } from '@/model/DailyTask.ts';

/** Data */
const date = ref<Date>(new Date());

const requestData = computed<DailyTaskRequest>(() => ({
    queryParams: {
        "date": formatDateToString(date.value)
    },
}));

const { data } = useDailyTasksQuery(requestData);

/** Methods */
const handlePrevMonth = ():void => {
    date.value = new Date(date.value.setMonth(date.value.getMonth() - 1));
}

const handleNextMonth = ():void => {
    date.value = new Date(date.value.setMonth(date.value.getMonth() + 1));
}

</script>

<template>
    
    <div class="daily-container layout__flexColumn">
        <div class="date-container">
            라디오/뉴스 일정 - {{ formatString(date).substr(0, 10) }}

            <div class="button-wrap">
                <BaseButton @click="handlePrevMonth"><BaseIcon name="arrow_back_ios" weight="700" />이전달</BaseButton>
                <BaseButton @click="handleNextMonth">다음달<BaseIcon name="arrow_forward_ios" weight="700" /></BaseButton>
            </div>
        </div>

        <DailyTable v-if="data" :taskDate="date" :taskData="data" />

        <div v-else class="spinner-container">
            <BaseSpinner :size="50" />
        </div>
    </div>
    

</template>

<style lang="scss" scoped>
@import '@/assets/scss/anime.scss';

// ---------------------- PC ----------------------

@media screen and (min-width: 1025px) {

.daily-container {
    width: 100%;
    height: 100%;

    padding: 60px 80px;

    gap: 20px;

    @include card_fade_in;
}

.date-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 2.5vmin;
    font-weight: 700;
}

.button-wrap {
    display: flex;
    gap: 10px;
}

.spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
}

} 

</style>