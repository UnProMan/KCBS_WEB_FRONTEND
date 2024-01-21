import { defineStore } from "pinia";
import { ref } from 'vue';
import type { ErrorResponse } from "@/model/Error";

export const useErrorStore = defineStore("error-store", () => {
    const error = ref<ErrorResponse>();

    const setError = (value: ErrorResponse) => {
        error.value = value;
    };

    const getError = () => error.value;

    return { 
        error,
        setError, 
        getError
    };
});