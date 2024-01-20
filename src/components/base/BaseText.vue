<script setup lang="ts">
import { ref, computed } from 'vue';

interface BaseInputProps {
    width?: string;
    height?: string;
    caption?: string;
    disable?: boolean;
    value?: string | number;
    numberFilter?: boolean;
    type?: string;
}

/* Props & Emits */
const props = withDefaults(defineProps<BaseInputProps>(), {
    value: '',
    type: 'text',
});

const valueRef = ref(props.value);

const emits = defineEmits<{
    (e: 'update:value', value: string): void;
}>();

/* properties */
const isFocused = ref<boolean>(false);

const isActive = computed(() => {
    return (valueRef.value !== '' && valueRef.value !== null) || isFocused.value
});


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
    <div
        class="input-row"
        :class="{ 'input-row--active': isActive }"
    >
        <div class="input-container">
            <input
                :type="props.type"
                
                id="fname"
                name="fname"
                class="default__inputText"
                
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
                        class="text default__placeholder"
                        :class="{ 'text--active': isActive }"    
                    >
                        {{ props.caption }}
                    </div>
                </label>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$border-color: rgba(var(--blue));

.input-row {
    width: v-bind(width);
    height: v-bind(height);

    display: flex;
    align-items: center;
    
    border-bottom: 1px solid rgba(var(--gray-800) / 0.8);

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
    }
}

input[type=password]{
        font-family:"굴림";
    }

.pseudo-placeholder-text {
    position: relative;
    height: 0px;
    border: none;

    .placeholder-text {
        position: absolute;
        bottom: 4px;
        left: 4px;
        
        background-color: transparent;
        user-select: none;

        display: flex;
        align-items: center;

        pointer-events: none;
    }
}

.text {
    padding: 0 2px;

    background-color: transparent;
    color: rgba(var(--gray-800) / 0.8);

    transform: translate(0);
    transition: transform 0.15s ease-out, font-size 0.15s ease-out,
        background-color 0.2s ease-out, color 0.15s ease-out;

    &--active {
        font-size: 0.8rem;
        
        background-color: white;
        color: $border-color;

        transform: translate(-3%, -150%);
    }
}

input,
.pseudo-placeholder-text {
    padding: 0 4px;
    padding-bottom: 1px;
}

</style>