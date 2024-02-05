<script setup lang="ts">
import type { PersonalStatusUsers } from '@/model/User';
import { formatImageURL } from '@/components/functions/formatFunc';
import { userRoleMap } from '@/model/User';
import { randomIndex } from '@/components/functions/randomFunc';
import { ref, computed } from 'vue';

interface Props {
    info: PersonalStatusUsers;
    department: number;
}

/**
 * Props, Emits
 */
const props = defineProps<Props>();
const emits = defineEmits<{
    (e: 'update:value', value: number): void;
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

/**
 * Methods
 */
const randomColor = color[randomIndex(color.length)];

const selectDepartment = (id: number) => {
    if (isActive(id)) {
        emits('update:value', null);
    } else {
        emits('update:value', id);
    }
};

const isActive = (id: number) => {
    return props.department === id;
};

</script>

<template>
    
    <div class="person-container">
        <div class="left-userinfo">
            <div class="img-container">
                <img :src="formatImageURL(props.info.file_ID)" width="50px" height="50px" >
            </div>

            <div>
                <p class="default__subtitle2">{{ props.info.name }}</p>
                <p class="default__normalFont1">{{ userRoleMap.get(props.info.role) }}</p>
            </div>
        </div>

        <div class="departments-container">
            <template v-for="item in props.info.departments" :key="item">
                <div 
                    class="departments"
                    :class="{ 'departments--active': isActive(item.id) }"
                    @click="selectDepartment(item.id)"
                >
                    {{ item.name }}
                </div>
            </template>
        </div>
    </div>

</template>

<style lang="scss" scoped>

.person-container {
    height: 65px;
    padding: 13px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 30px;

    transition: all 0.225s ease-out;

    &:hover {
        background-color: rgba(var(--gray-200) / 0.8);
    }
}

.left-userinfo {
    display: flex;
    align-items: center;

    gap: 10px;
}

.img-container {
    overflow: hidden;
    border-radius: 30px;
    width: 50px;
    height: 50px;
}

.default__normalFont1 {
    color: rgba(var(--gray));
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

    user-select: none;
    cursor: pointer;

    &:hover {
        background-color: v-bind(randomColor);
        color: white;
    }

    &--active {
        background-color: v-bind(randomColor);
        color: white;
    }
}

</style>