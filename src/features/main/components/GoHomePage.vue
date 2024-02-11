<script setup lang="ts">
import BaseCard from '@/components/base/BaseCard.vue';
import BaseIcon from '@/components/base/BaseIcon.vue';
import { computed } from 'vue';

interface Props {
    iconName: string;
    href: string;
    message: string;
    color: string;
    transparent?: boolean;
}

const props = defineProps<Props>();

const color = computed(() => props.color);

const onAction = () => {
    window.open(props.href);
};

const isTransparentColor = ():boolean => props.transparent;

</script>

<template>
    
    <BaseCard class="youtube-container layout__flexColumn" @click="onAction">
        <i 
            class="icon" 
            :class="{
                'icon-transparent': isTransparentColor(),
                [props.iconName]: props.iconName
            }"
        >
        </i>

        <div class="message">
            {{ props.message }}
        </div>
    </BaseCard>

</template>

<style lang="scss" scoped>

// ---------------------- PC ----------------------

@media screen and (min-width: 1025px) { 

.youtube-container {
    justify-content: center;
    align-items: center;
    gap: 15px;

    user-select: none;
    cursor: pointer;

    transition: all 0.225s ease-out;

    &:hover {
        transform: translateY(-10px);
    }
}

.icon {
    font-size: 12vmin;
    color: v-bind(color);

    &-transparent {
        background-image: v-bind(color);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
}

.message {
    font-weight: 500;
    font-size: 1.7vmin;
}

}


// ---------------------- Phone ----------------------


@media screen and (max-width: 1024px) {

.youtube-container {
    justify-content: center;
    align-items: center;
    gap: 15px;

    user-select: none;
    cursor: pointer;
}

.icon {
    font-size: 9vmax;
    color: v-bind(color);

    &-transparent {
        background-image: v-bind(color);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
}

.message {
    font-weight: 400;
    font-size: 1.4vmax;
}

}

</style>