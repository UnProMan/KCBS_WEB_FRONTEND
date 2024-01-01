import { defineStore } from "pinia";
import { ref } from 'vue';
import type { Alert } from '@/model/Alert';

export const useAlertStore = defineStore("alert-store", () => {
    const isAlert = ref<boolean>(false); 
    const content = ref<Alert>();
    const isOkay = ref<boolean>(false);

    const setContent = (value: Alert) => {
        content.value = value;
        isAlert.value = true;
        isOkay.value = false;
    };

    const getContent = () => content.value;

    return { 
        isAlert, 
        content, 
        setContent, 
        isOkay,
        getContent
    };
});