import { defineStore } from "pinia";

export const useAuthenticationStore = defineStore('authenticationStore', () => {
    const token = ref('')

    const GetToken = async () => {
        const results = await $fetch('/api/authentication/token')
        token.value = <string>results
    }

    return {
        GetToken,
        token
    }
})