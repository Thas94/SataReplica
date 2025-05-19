import { useAuthenticationStore } from "~/stores/authenticationStore";

export default defineEventHandler(async (event) => {
    debugger
    const tkn = useAuthenticationStore()
    const tokk = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJTYXRhUmVwbGljYUFwaSIsImp0aSI6IjI2M2IzY2I2LWI1ZDAtNDU0Mi05ZjEzLTRiNWYxODAyMmM5MCIsImlhdCI6MTc0NzY3ODIzNCwiVXNlck5hbWUiOiJzdHJpbmciLCJQYXNzd29yZCI6InN0cmluZyIsIm5iZiI6MTc0NzY3ODIzNCwiZXhwIjoxNzQ3NjgwMDM0LCJpc3MiOiJTYXRhUmVwbGljYUFwaSIsImF1ZCI6IlNhdGFSZXBsaWNhQXBpIn0.0P3IUsC7BWQTYJZfWGZ2z9pF2mv0fNf0seF-OgI1g8w'

    const agendas = await $fetch("https://localhost:44311/Agenda/GetAgendaInfo", {
        method: 'GET',
        onRequest({ request, options, error }){
            options.headers.set('Authorization', `Bearer ${tkn.token}`)
        }
    })

    return agendas;
});