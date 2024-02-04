<script setup lang="ts">
import type { PersonalStatusUsers } from '@/model/User';
import BaseCard from '@/components/base/BaseCard.vue';
import { formatImageURL, formatString } from '@/components/functions/formatFunc';
import { userRoleMap } from '@/model/User';
import { watchEffect, ref, watch } from 'vue';
import { randomIndex } from '@/components/functions/randomFunc';
import BaseIcon from '@/components/base/BaseIcon.vue';

interface Props {
    info: PersonalStatusUsers;
}

/**
 * Props, Emits
 */
const props = defineProps<Props>();
const emits = defineEmits<{
    (e: 'update:value', value: any): void;
}>();

/**
 * Data
 */

const color = [
    'rgba(var(--red-900))',
    'rgba(var(--pink-900))',
    'rgba(var(--purple-900))',
    'rgba(var(--blue-900))',
    'rgba(var(--green-900))',
    'rgba(var(--orange-900))',
    'rgba(var(--blue-gray-900))',
    'rgba(var(--amber-900))',
    'rgba(var(--lime-900))',
    'rgba(var(--cyan-900))',
    'rgba(var(--indigo-900))'
];


const randomColor = ref<String>(color[randomIndex(color.length)]);

/**
 * Methods
 */
const close = () =>{
    emits('update:value', null);
};

watch (
    props,
    () => {
        randomColor.value = color[randomIndex(color.length)];
    }
);

</script>

<template>
    
    <BaseCard class="details-container layout__flexColumn scrollbar">
        <BaseIcon name="close" class="icon" @click="close" />
        <div class="image-container">
            <img :src="formatImageURL(props.info.file_ID)">
        </div>

        <p class="default__subtitle2">{{ userRoleMap.get(props.info.role) }}</p>

        <p class="default__title4">{{ props.info.kisu }}기 {{ props.info.name }}</p>

        <div class="departments-container">
            <template v-for="item in props.info.departments" :key="item">
                <div class="departments">
                    {{ item.name }}
                </div>
            </template>
        </div>

        <p class="default__subtitle3">학번: {{ props.info.studentId }}</p>

        <p class="default__subtitle3">전화번호: {{ props.info.phone_Number }}</p>

        <p class="default__subtitle3">이메일: {{ props.info.email }}</p>

        <p class="default__subtitle3">생일: {{ formatString(props.info.birthday) }}</p>
    </BaseCard>

</template>

<style lang="scss" scoped>

.details-container {
    height: 82vh;

    align-items: center;
    gap: 20px;
}

.image-container {
    overflow: hidden;
    border-radius: 11vw;
    width: 11vw;
    height: 11vw;

    min-width: 40px;
    min-height: 40px;

    margin-bottom: 10px;

    img {
        width: inherit;
        height: inherit;
    }
}

.departments-container {
    display: flex;
    gap: 7px;
}

.departments {
    border: 1px solid v-bind(randomColor);
    border-radius: 20px;

    padding: 5px 10px;

    color: v-bind(randomColor);
    background-color: white;

    transition: all 0.225s ease-out;

    &:hover {
        background-color: v-bind(randomColor);
        color: white;
    }
}

.icon {
    position: absolute;
    right: 15px;
    top: 10px;

    font-size: 3vmin;
    border-radius: 3vmin;
    padding: 2px;

    cursor: pointer;

    transition: all 0.225s ease-out;

    &:hover {
        background-color: rgba(var(--gray-300));
    }

    &:active {
        background-color: black;
        color: white;
    }
}

</style>