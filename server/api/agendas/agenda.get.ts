import { getServerSession } from "#auth"

export default defineEventHandler(async (event) => {

    const session = await getServerSession(event)
    const config = useRuntimeConfig()

    const agendas = await $fetch(`${config.apiUrl}/Agenda/GetAgendaInfo`, {
        method: 'GET',
        onRequest({ request, options, error }){
            options.headers.set('Authorization', `Bearer ${session?.user.token}`)
        }
    })

    return agendas;
});