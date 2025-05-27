import { Config } from "primevue";
import { useAuthenticationStore } from "~/stores/authenticationStore";

export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig()
    const tkn = useAuthenticationStore()

    // const agendas = await $fetch(`${config.apiUrl}/Agenda/GetAgendaInfo`, {
    //     method: 'GET',
    //     onRequest({ request, options, error }){
    //         options.headers.set('Authorization', config.apiToken)
    //         }
    // })

    // return agendas;
});