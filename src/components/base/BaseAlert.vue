<script setup lang="ts">
import BaseIcon from './BaseIcon.vue';
import BaseButton from './BaseButton.vue';
import { computed } from 'vue';
import { useAlertStore } from '@/store/useAlertStore';
import { storeToRefs } from 'pinia';

const content = useAlertStore().getContent()!;
const { isAlert, isOkay } = storeToRefs(useAlertStore());

const color = computed(() => {
    if (content.type === 'info') return 'rgba(var(--blue-500))'
    if (content.type === 'error') return 'rgba(var(--red-500))';
    if (content.type === 'question') return 'rgba(var(--green-500))';
});

const icon = computed(() => {
    if (content.type === 'question') return 'help';
    return content.type;
});

/**
 * Alert 창 끄는 버튼
 */
const handleIsAlertClick = computed((): void => {
    isAlert.value = false
});

/**
 * Yes 버튼 클릭 시
 * 상태정보 저장하는 버튼
 */
const handleOkayClick = computed((): void => {
    isOkay.value = true
});

</script>

<template>
    
    <div class="background layout__center" @click.self="{handleIsAlertClick}">
        <div class="alert_container layout__flexColumn" >
            <div class="header">
                <BaseIcon :name="icon" fill="1" weight="700" class="icon" />
                {{ content.title }}
            </div>

            <div class="body">
                {{ content.message }}
            </div>

            <div class="footer">
                <BaseButton 
                    :color="content.type === 'error' ? 'var(--red-500)' : 'var(--blue)'"
                    @click="[
                        content.type === 'question'
                        ? handleOkayClick
                        : handleIsAlertClick
                    ]"
                >
                    확인
                </BaseButton>

                <BaseButton
                    v-if="content.type === 'question'"
                    color='var(--red-800)'
                    @click="[
                        content.type === 'question'
                        ? handleIsAlertClick
                        : null
                    ]"
                >
                    취소
                </BaseButton>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

.background {
    background-color: rgba(var(--black) / 0.3);

    position: fixed;
    user-select: none;
}

.alert_container {
    background-color: rgba(var(--white));

    z-index: 999;
    justify-content: space-between;

    width: 18%;
    height: 18%;

    border-radius: 15px;
    padding: 20px;
}

.header {
    display: flex;
    align-items: center;
    gap: 8px;

    font-weight: 700;
    font-size: 2.1vmin;

    .icon {
        font-size: 2.8vmin;
        color: v-bind(color);
    }    
}

.footer {
    display: flex;
    justify-content: right;

    gap: 4px;
}

.body {
    font-weight: 500;
    font-size: 1.6vmin;
}

// ---------------------- Phone ----------------------


@media screen and (max-width: 1024px) {

.alert_container {
    width: 70%;
    height: 20%;
}

.header {
    font-size: 2.3vmax;

    .icon {
        font-size: 2.8vmax;
    }
}

.body {
    font-size: 1.6vmax;
}

}

</style>