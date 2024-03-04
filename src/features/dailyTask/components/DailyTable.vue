<script setup lang="ts">
import { formatString, formatGetWeek } from '@/components/functions/formatFunc.ts';
import { watch, ref } from 'vue';
import type { DailyTask } from '@/model/DailyTask.ts';
import TableItem from './TableItem.vue';

interface Props {
    taskDate: Date;
    taskData?: DailyTask[];
}

/** Props */
const props = defineProps<Props>();

/** Data */
const taskYear = ref<number>(props.taskDate.getFullYear());
const taskMonth = ref<number>(props.taskDate.getMonth());

const lastDay = ref<number>(new Date(taskYear.value, taskMonth.value + 1, 0).getDate());

/** Methods */

/**
 * 테이블에 날짜 요일 나타내는 포멧 함수
 */
const dateText = (value: number): string => {
    const day = (value < 10 ? '0' + value : value) + '일'
    const weekOfDay = formatGetWeek(new Date(taskYear.value, taskMonth.value, value)) + '요일';

    return day + ' ' + weekOfDay;
}

/**
 * 해당 날짜가 토요일, 일요일, 평일인지 구분하는 함수
 */
const isWeekDate = (value: number): number => {
    return new Date(taskYear.value, taskMonth.value, value).getDay();
}

const filterData = (day: number, type: '점심라디오' | '저녁라디오' | '뉴스'): DailyTask => {
    const findDate = 
        `${taskYear.value}-` +
        `${(taskMonth.value + 1) < 10 ? '0' + (taskMonth.value + 1) : (taskMonth.value + 1)}-` +
        `${day < 10 ? '0' + day : day}`;

    return props.taskData.find((item: DailyTask) => 
        findDate == item.date && item.taskTypes === type
    );
}


watch (
    props,
    () => {
        taskYear.value = props.taskDate.getFullYear();
        taskMonth.value = props.taskDate.getMonth();
        lastDay.value = new Date(taskYear.value, taskMonth.value + 1, 0).getDate();
    }
);

</script>

<template>
    
    <div class="table-container scrollbar">
        <table>
            <tr style="height: 4.5vh">
                <th width="10%">날짜</th>
                <th width="25%">점심 라디오</th>
                <th width="25%">저녁 라디오</th>
                <th width="40%">뉴스</th>
            </tr>

            <template v-for="item in lastDay" :key="item">
                <tr>
                    <td
                        class="date-td"
                        :class="{
                            'red': isWeekDate(item) == 0,
                            'blue': isWeekDate(item) == 6
                        }"
                    >{{ dateText(item) }}</td>
                    <td><TableItem :data="filterData(item, '점심라디오')" /></td>
                    <td><TableItem :data="filterData(item, '저녁라디오')" /></td>
                    <td><TableItem :data="filterData(item, '뉴스')" /></td>
                </tr>
            </template>
        </table>
    </div>

</template>

<style lang="scss" scoped>

// ---------------------- PC ----------------------

@media screen and (min-width: 1025px) {

.table-container {
    padding: 2px;
}

table {
    width: 100%;
    height: 100%;

    border-collapse: collapse;
    border-radius: 1.5vh;
    border-style: hidden;

    overflow: hidden;

    box-shadow: 0 0 0 1px rgba(var(--gray) / 0.5);

    text-align: center;

    tr {
        height: 8.5vh;
    }

    th {
        height: 4.3vh;

        font-size: 1.8vmin;
        font-weight: 550;

        border: 2px solid rgba(var(--gray) / 0.5);

        background-color: rgba(var(--gray) / 0.2);
    }

    td {
        font-size: 1.8vmin;
        font-weight: 500;

        border: 2px solid rgba(var(--gray) / 0.5);

        background-color: white;
    }
}

.red {
    color: red;
}

.blue {
    color: blue;
}

}

</style>