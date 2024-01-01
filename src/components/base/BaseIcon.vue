<script setup lang="ts">
import { computed } from 'vue';

interface IconProps {
    name: string;
    fill?: boolean | number | string;
    weight?: number | string;
    grad?: number | string;
    opsz?: number | string;
}

const props = withDefaults(defineProps<IconProps>(), {
    fill: 0,
    weight: 400,
    grad: 0,
    opsz: 40,
});

const iconName = computed(() => {
    return props.name;
});

const iconStyle = computed(() =>
    `'FILL' ${Number(props.fill)}, 'wght' ${Number(props.weight)},
    'GRAD' ${Number(props.grad)}, 'opsz' ${Number(props.opsz)}`
);

</script>

<template>
    <i
        class="icon material-symbols-rounded"
        :class="{
            [iconName]: iconName,
        }"
        :style="{ 'font-variation-settings': iconStyle }"
    >
        {{ iconName }}
    </i>
</template>

<style lang="scss" scoped>

i.icon {
    user-select: none;
    transition: all 0.225s ease-out;
}

.material-symbols-rounded {
    font-family: 'Material Symbols Rounded' !important;
    font-size: inherit;
}

</style>