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

/**
 * isActive가 true면 이미 클릭된 부서로 필터링이 된 상태이므로 
 * emits로 null을 보내어 필터링 해제
 * 
 * isActive가 false면 emits로 해당 부서 정보를 전달하여 필터링 진행
 */
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
                <img :src="formatImageURL(props.info.file_ID)" >
            </div>

            <div>
                <p class="name-text">{{ props.info.name }}</p>
                <p class="role-text">{{ userRoleMap.get(props.info.role) }}</p>
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

// ---------------------- PC ----------------------

@media screen and (min-width: 1025px) { 

.person-container {
    height: 6vh;
    padding: 13px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 1.6vh;

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
    border-radius: 4.7vh;
}

.img-container, img {
    width: 4.7vh;
    height: 4.7vh;
}

.name-text {
    font-weight: 500;
    font-size: 1.8vmin;
}

.role-text {
    font-size: 1.6vmin;
    color: rgba(var(--gray));
}

.departments-container {
    display: flex;
    gap: 7px;
}

.departments {
    border: 1px solid v-bind(randomColor);
    border-radius: 1.8vmin;

    padding: 5px 10px;

    font-size: 1.5vmin;

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

}


// ---------------------- Phone ----------------------


@media screen and (max-width: 1024px) {

.person-container {
    height: 6.3vh;
    padding: 13px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 1.8vh;

    transition: all 0.225s ease-out;
}

.left-userinfo {
    display: flex;
    align-items: center;

    gap: 10px;
}

.img-container {
    overflow: hidden;
    border-radius: 4.7vh;
}

.img-container, img {
    width: 4.7vh;
    height: 4.7vh;
}

.name-text {
    font-weight: 500;
    font-size: 1.8vmax;
}

.role-text {
    font-size: 1.6vmax;
    color: rgba(var(--gray));
}

.departments-container {
    display: flex;
    gap: 5px;
}

.departments {
    border: 1px solid v-bind(randomColor);
    border-radius: 1.8vmax;

    padding: 5px 10px;

    font-size: 1.5vmax;

    color: v-bind(randomColor);
    background-color: white;

    transition: all 0.225s ease-out;

    user-select: none;
    cursor: pointer;

    &--active {
        background-color: v-bind(randomColor);
        color: white;
    }
}

}

</style>