<script setup lang="ts">
import BaseIcon from './BaseIcon.vue';
import { ref } from 'vue';

interface Props {
    width?: string;
    height?: string;
    caption?: string;
    disable?: boolean;
    value?: string;
    numberFilter?: boolean;
    icon?: string;
}

/* Props & Emits */
const props = withDefaults(defineProps<Props>(), {
    value: '',
});

const valueRef = ref(props.value);

const emits = defineEmits<{
    (e: 'update:value', value: string): void;
}>();

/* methods, callbacks */
const onInput = (event: Event) => {
    valueRef.value = (event.target as HTMLInputElement).value;
    if (props.numberFilter) {
        valueRef.value = valueRef.value.replaceAll(/[^0-9]/g, '');
    }
    emits('update:value', valueRef.value);
};

</script>

<template>
    
    <div class="inputicon-container">
        <BaseIcon 
            v-if="props.icon" 
            :name="props.icon" 
            class="icon"
        />

        <input 
            type="text" 
            class="default__inputText" 
        >
    </div>

</template>

<style lang="scss" scoped>

.inputicon-container {
    width: v-bind(width);
    height: v-bind(height);

    display: flex;
    align-items: center;

    background-color: rgba(var(--gray-200));
    border-radius: 20px;
    border: 2px solid rgba(var(--gray-200));

    transition: all 0.225s ease-out;
}

input {
    width: 100%;
    border: 0;
    outline: none;
    background-color: inherit;
    padding: 0px 15px;
}

.icon {
    font-size: 25px;
    padding: 0px 10px;
    border-right: 1px solid black;
}

</style>