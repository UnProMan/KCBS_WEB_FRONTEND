<script setup lang="ts">
import BaseIcon from './BaseIcon.vue';
import { ref, computed } from 'vue';

interface BaseInputProps {
    type?: string;
    width: string;
    height: string;
    disable?: boolean;
    value?: string;
    caption: string;
    icon?: string;
    numberFilter?: boolean;
}

/* Props & Emits */
const props = withDefaults(defineProps<BaseInputProps>(), {
    icon: undefined,
    value: '',
    type: 'text',
});

const valueRef = ref(props.value);

const emits = defineEmits<{
    (e: 'click'): void;
    (e: 'update:value', value: string): void;
    (e: 'keyup.enter'): void;
}>();

/* properties */
const isFocused = ref<boolean>(false);

const isActive = computed(() =>
    (props.value !== '' && props.value !== null) || isFocused.value,
);

/* methods, callbacks */
const onInput = (event: Event) => {
    valueRef.value = (event.target as HTMLInputElement).value;
    if (props.numberFilter) {
        valueRef.value = valueRef.value.replaceAll(/[^0-9]/g, '');
    }
    emits('update:value', valueRef.value);
};

const onClick = () => {
    emits('click');
};
</script>

<template>
    <div
        class="input-row"
        :class="{ 'input-row--active': isActive }"
    >
        <div class="input-container">
            <input
                :type="props.type"
                id="fname"
                name="fname"
                autocomplete="off"
                :value="valueRef"
                :disabled="props?.disable"
                aria-labelledby="placeholder-fname"
                @input="onInput"
                @focus="() => (isFocused = true)"
                @blur="() => (isFocused = false)"
            />
            <div class="pseudo-placeholder-text">
                <label for="fname" id="placeholder-fname" class="placeholder-text">
                    <div 
                        class="text"
                        :class="{ 'text--active': isActive }"    
                    >
                        {{ props.caption }}
                    </div>
                </label>
            </div>
        </div>
        <BaseIcon
            v-if="props.icon"
            :class="{ 'icon--active': isActive }"
            :name="props.icon"
            @click="onClick"
        />
    </div>
</template>

<style lang="scss" scoped>
$border-color: rgba(var(---orange));

.input-row {
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(var(---orange));
    height: v-bind(height);
    width: v-bind(width);

    .icon {
        font-size: 16px;
        padding-top: 16px;
        
        &--active {
            color: $border-color;
        }
    }

    &--active {
        border-color: $border-color !important;
    }

    &:focus-within {
        border-color: $border-color;
    }
}

.input-container {
    margin-top: 16px;
    flex: 1;
}

input {
    width: v-bind(width);
    border: none;

    &:focus {
        outline: none;
        border-color: $border-color;
    }
}

.pseudo-placeholder-text {
    position: relative;
    height: 0px;

    .placeholder-text {
        position: absolute;
        bottom: 4px;
        left: 4px;
        border: 1px solid transparent;
        background-color: transparent;
        display: flex;
        align-items: center;

        pointer-events: none;
    }
}

.text {
    padding: 0 2px;
    background-color: transparent;
    color: rgba(var(--gray));

    transform: translate(0);
    transition: transform 0.15s ease-out, font-size 0.15s ease-out,
        background-color 0.2s ease-out, color 0.15s ease-out;

    &--active {
        background-color: white;
        font-size: 0.8rem;
        color: $border-color;
        transform: translate(-3%, -130%);
    }
}

input,
.pseudo-placeholder-text {
    padding: 0 4px;
    padding-bottom: 1px;
}

input:focus + .pseudo-placeholder-text .text {
    border-color: $border-color;
}

</style>