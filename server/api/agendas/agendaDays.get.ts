import { useAuthenticationStore } from "~/stores/authenticationStore";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const tkn = useAuthenticationStore()

    const days = await $fetch(`${config.apiUrl}/Agenda/GetAgendaDays`, {
        method: 'GET',
        onRequest({ request, options, error }){
            //options.headers.set('Authorization', `Bearer ${tkn.token}`)
            options.headers.set('Authorization', config.apiToken)
        }
    })
    return days;
});