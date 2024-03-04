<script setup lang="ts">
import type { DailyTask } from '@/model/DailyTask.ts';
import { formatImageURL } from '@/components/functions/formatFunc.ts';

interface Props {
    data?: DailyTask;
}

/** Props */
const props = defineProps<Props>();

</script>

<template>
    
    <div v-if="props.data" class="item-container layout__center">
        <template v-for="item in props.data.taskUsers" :key="item">
            <div class="item-warp layout__flexColumn">
                <div class="img-container">
                    <img :src="formatImageURL(item.user.file_ID)" >
                </div>
        
                {{ item.user.name }}
            </div>
        </template>
    </div>

</template>

<style lang="scss" scoped>

.item-container {
    user-select: none;
}

.item-warp {
    font-size: 1.7vmin;
    font-weight: normal;

    justify-content: center;
    align-items: center;

    border-radius: 18px;

    width: 5vw;

    padding: 3px;

    transition: all 0.15s ease-in;

    &:hover {
        background-color: rgba(var(--gray) / 0.1);
        cursor: pointer;
    }
}

.img-container {
    overflow: hidden;
    border-radius: 4.7vh;
}

.img-container, img {
    width: 4.7vh;
    height: 4.7vh;
}

</style>