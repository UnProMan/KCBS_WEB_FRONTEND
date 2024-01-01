<script setup lang="ts">
import { computed } from 'vue';

/** Props */
interface Props {
    size?: number;
    strokeWidth?: number;
    color?: string;
};

const props = withDefaults(defineProps<Props>(), {
    size: 32,
    strokeWidth: 2,
    color: 'rgba(var(--gray-50))'
});

const path = computed(() => {
    const width = props.strokeWidth / 2;

    return `M 12 ${width} A ${12 - width} ${12 - width} 0 1 1 ${width} 12`;
});

const strokeWidthStyle = computed(() => `${props.strokeWidth}px`);
const sizeStyle = computed(() => `${props.size}px`);
const dashLength = computed(() => 57.5 - props.strokeWidth * 2.5);
</script>

<template>

    <div class="spinner-wrapper">
        <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            class="spinner"
        >
            <path :d="path" class="shape" />
        </svg>
    </div>

</template>

<style lang="scss" scoped>

.shape {
    fill: none;
    stroke: v-bind('color');
    stroke-width: v-bind('strokeWidthStyle');
    stroke-linecap: round;
    stroke-dasharray: v-bind('dashLength');
    stroke-dashoffset: v-bind('dashLength');

    animation: dash 1.4s ease-in-out infinite;
    transform-origin: center center;
}

.spinner {
    width: v-bind('sizeStyle');
    height: v-bind('sizeStyle');

    animation: rotation 1.4s linear infinite;
}

.spinner-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    width: fit-content;

    animation: rotation 4.8s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes dash {
    0% {
        stroke-dashoffset: v-bind('dashLength');
        transform: rotate(0deg);
    }
    50% {
        stroke-dashoffset: 10;
        transform:rotate(45deg);
    }
    100% {
        stroke-dashoffset: v-bind('dashLength');
        transform: rotate(360deg);
    }
}

</style>