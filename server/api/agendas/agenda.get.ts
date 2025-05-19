import { Config } from "primevue";
import { useAuthenticationStore } from "~/stores/authenticationStore";

export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig()

    const tkn = useAuthenticationStore()
    const tokk = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJTYXRhUmVwbGljYUFwaSIsImp0aSI6IjlkOGMxZTAxLWRlYWItNDcxMi1iZjkzLWI1ZGI1YjY3YjA1NiIsImlhdCI6MTc0NzY4MzM2NSwiVXNlck5hbWUiOiJzdHJpbmciLCJQYXNzd29yZCI6InN0cmluZyIsIm5iZiI6MTc0NzY4MzM2NSwiZXhwIjoxNzQ3Njg1MTY1LCJpc3MiOiJTYXRhUmVwbGljYUFwaSIsImF1ZCI6IlNhdGFSZXBsaWNhQXBpIn0.ZG-RQkIrWwU-iGYWP6FBO7pq4R40jeltq0_2ByJ14Xg'

    const agendas = await $fetch(`${config.apiUrl}/Agenda/GetAgendaInfo`, {
        method: 'GET',
        onRequest({ request, options, error }){
            options.headers.set('Authorization', tokk)
            }
    })

    return agendas;
});