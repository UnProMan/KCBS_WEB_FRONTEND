<script setup lang="ts">

interface BaseButtonProps {
    variant?: 'primary' | 'elevation' | 'outline' | 'text';
    size?: 'large' | 'medium' | 'small';
    width?: string;
    height?: string;
    disabled?: boolean;
    color?: string;
}

const props = withDefaults(defineProps<BaseButtonProps>(), {
    color: 'var(--blue)',
    variant: 'primary',
    size: 'medium'
});

</script>

<template>
    <div>
        <button
            :disabled="props.disabled"
            :class="{
                disabled: props.disabled,
                [props.variant]: props.variant,
                [props.size]: props.size
            }"
        >
            <slot></slot>
        </button>
    </div>
</template>

<style scoped>

button {
    width: v-bind(width);
    height: v-bind(height);

    outline: none;
    border: none;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    cursor: pointer;
    user-select: none;

    font-weight: 500;
    font-size: 1.7vmin;

    background: transparent;
}

.large {
    padding: 16px 24px;
}

.medium {
    padding: 12px 16px;
}

.small {
    font-size: 16px;
    padding: 8px 12px;
}

button.primary {
    color: rgba(v-bind('color'));
    background-color: rgba(v-bind('color') / 0.2);

    backdrop-filter: blur(24px);

    transition: all 0.225s ease-out;
}

button.primary:not(.disabled):hover {
    background-color: rgba(v-bind('color') / 0.3);
}

button.primary:not(.disabled):active {
    background-color: rgba(v-bind('color') / 0.4);
    transform: scale(0.9);
}


button.elevation {
    color: rgba(var(--white));
    background-color: rgba(v-bind('color'));

    box-shadow: 0 4px 12px rgba(var(--black) / 0.125);
    transition: all 0.225s ease-out;
}

button.elevation:not(.disabled):hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(var(--black) / 0.25);
}


button.outline {
    color: rgba(var(--black));
    box-shadow: 0 0 0 2px rgba(var(--gray) / 0.5) inset;

    transition: all 0.225s ease-out;
}

button.outline:not(.disabled):hover {
    box-shadow: 0 0 0 2px rgba(var(--gray)) inset;
}

button.outline:not(.disabled):active {
    background-color: rgba(var(--gray) / 0.3);
    transform: scale(0.9);
}


button.text {
    color: rgba(var(--black));

    transition: all 0.225s ease-out;
}

button.text:not(.disabled):hover {
    background-color: rgba(var(--black) / 0.1);
}

button.text:not(.diabled):active {
    background: rgba(var(--black) / 0.2);
    transform: scale(0.9);
}

button.text.disabled {
    opacity: 0.5s;
}

button.primary.disabled,
button.outline.disabled,
button.elevation.disabled {
    cursor: unset;
    color: rgb(va(--gray));
    background-color: rgba(var(--gray) / 0.4);
    box-shadow: none;
}


/* --------------------- Phone ---------------------- */

@media screen and (max-width: 1024px) {

button {
    font-size: 1.7vmax;
}

}

</style>