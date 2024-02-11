<script setup lang="ts">
import BaseIcon from './BaseIcon.vue';
import { ref, computed } from 'vue';

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

/* properties */
const isFocused = ref<boolean>(false);

const isActive = computed(() => {
    return (valueRef.value !== '' && valueRef.value !== null) || isFocused.value
});

</script>

<template>
    
    <div 
        class="inputicon-container"
        :class="{ 'inputicon-container--active': isActive }"
    >
        <BaseIcon 
            v-if="props.icon" 
            :name="props.icon" 
            class="icon"
        />

        <input 
            type="text" 

            class="input-row" 
            :placeholder="props.caption"

            @input="onInput"
            @focus="() => (isFocused = true)"
            @blur="() => (isFocused = false)"
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
    border-radius: 1.8vmin;
    border: 2px solid rgba(var(--gray-200));

    transition: all 0.225s ease-out;
    overflow: hidden;

    &--active {
        border-color: rgba(var(--blue));
    }
}

input {
    width: 100%;
    border: 0;
    outline: none;
    background-color: inherit;
    padding: 0px 15px;

    font-weight: 500;
    font-size: 1.8vmin;
}

.icon {
    font-size: 2.4vmin;
    padding: 0px 10px;
    border-right: 1px solid black;
}


// ---------------------- Phone ----------------------

@media screen and (max-width: 1024px) {

.inputicon-container {
    border-radius: 1.8vmax;
}

input {
    font-size: 1.9vmax;
}

.icon {
    font-size: 2.4vmax;
}

}

</style>