<script setup lang="ts">
import usePersonalStatusUserQuery from '../composables/usePersonalStatusUsersQuery';
import PersonItem from './PersonItem.vue';
import BaseSpinner from '@/components/base/BaseSpinner.vue';
import type { PersonalStatusUser, PersonalStatusRequest } from '@/model/User';
import { ref, computed, watch } from 'vue';
import BaseIcon from '@/components/base/BaseIcon.vue';

interface Props {
    searchName: string;
}

/**
 * Props, Emits
 */
const props = withDefaults(defineProps<Props>(), {
    searchName: '',
});

const emits = defineEmits<{
    (e: 'update:value', value: PersonalStatusUser): void;
}>();


/**
 * Data
 */
const kisu = ref<number>(null);
const department = ref<number>(null);

const requestData = computed<PersonalStatusRequest>(() => ({
    queryParams: {
        "searchName": props.searchName,
        "department": department.value
    },
}));

const { data } = usePersonalStatusUserQuery(requestData);

// 이 리스트에 존재하는 기수는 보이지 않음
const visibleList = ref([]);

/**
 * Methods
 */

const selectUser = (item: PersonalStatusUser) =>{
    emits('update:value', item);
};


// 기수 헤더를 만들때 사용하는 함수
const kisuCheck = (value: number) => {
    if (kisu.value !== value) {
        kisu.value = value;
        return true;
    };

    return false;
};


// 기수 총합 구하는 함수
const countKisu = (value: number): number => {
    let count = 0;

    data.value.forEach(item  => {
        if (item.kisu == value) count++;
    });

    return count;
}

/**
 * visibleList에 해당 기수가 있으면 지우고, 없으면 넣는다. 
 */
const handleIcon = (value: number): void => {
    const index = visibleList.value.indexOf(value);

    if (index !== -1) {
        visibleList.value.splice(index, 1);
    } else {
        visibleList.value.push(value);
    }
}

/**
 * visibleList.value.indexOf(value) === -1 인 경우
 * visibleList에 해당 기수 없음
 * -1이 아닐경우 해당 기수 있음
 * 
 * 이 함수가 true일 경우 화면에 보여줌
 * false일 경우 하면에 안보임
 */
const isVisible = (value: number): boolean =>
    visibleList.value.indexOf(value) === -1;;


const iconName = (value: number): string => 
    isVisible(value) ? 'expand_less' : 'expand_more';


// 데이터 변경 시 visibleList 초기화
watch (
    () => data.value,
    () => {
        visibleList.value = [];
    }
)

</script>

<template>
    
    <div class="personal-container scrollbar">
        <template v-if="data">
            <div v-for="item in data" :key="item">

                <div v-if="kisuCheck(item.kisu)" class="kisu-panel">
                    <div class="text-panel">
                        <p class="kisu-text">{{ item.kisu }}기</p>
                        <p class="peopleNumber">{{ countKisu(item.kisu) }}명</p>
                    </div>

                    <BaseIcon 
                        :name="iconName(item.kisu)" 
                        class="icon" 
                        @click="handleIcon(item.kisu)" 
                    />
                </div>

                <TransitionGroup name="item">
                    <PersonItem 
                        :info="item" 
                        :department="department"
                        @click.self="selectUser(item)"
                        v-if="isVisible(item.kisu)"
                        v-model:value="department"
                    />
                </TransitionGroup>
            </div>
        </template>

        <template v-else>
            <div class="layout__center">
                <BaseSpinner size="50" />
            </div>
        </template>
    </div>

</template>

<style lang="scss" scoped>

// ---------------------- PC ----------------------

@media screen and (min-width: 1025px) { 

.personal-container {
    width: 100%;
    height: 82vh;
}

.kisu-panel {
    height: 5.8vh;
    padding: 0px 20px;

    border-radius: 1.6vh;
    background-color: rgba(var(--gray-300));    

    display: flex;
    justify-content: space-between;
    align-items: center;

    user-select: none;
}

.text-panel {
    display: flex;
    align-items: center;
    gap: 30px;
}

.kisu-text {
    font-weight: 500;
    font-size: 1.9vmin;
}

.peopleNumber {
    font-size: 1.5vmin;
    color: rgba(var(--gray));
}

.icon {
    font-size: 2.3vmin;
}

.item-enter-active,
.item-leave-active {
    transition: all 0.5s ease;
}
.item-enter-from,
.item-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

}


// ---------------------- Phone ----------------------


@media screen and (max-width: 1024px) {

.personal-container {
    width: 100%;
    height: 75vh;
}

.kisu-panel {
    height: 5.8vh;
    padding: 0px 20px;

    border-radius: 1.6vh;
    background-color: rgba(var(--gray-300));    

    display: flex;
    justify-content: space-between;
    align-items: center;

    user-select: none;
}

.text-panel {
    display: flex;
    align-items: center;
    gap: 30px;
}

.kisu-text {
    font-weight: 500;
    font-size: 1.9vmax;
}

.peopleNumber {
    font-size: 1.5vmax;
    color: rgba(var(--gray));
}

.icon {
    font-size: 25px;
}

.item-enter-active,
.item-leave-active {
    transition: all 0.5s ease;
}
.item-enter-from,
.item-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

}

</style>