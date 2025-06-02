import { getServerSession } from "#auth"

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const session = await getServerSession(event)

    const days = await $fetch(`${config.apiUrl}/Agenda/GetAgendaDays`, {
        method: 'GET',
        onRequest({ request, options, error }){
            options.headers.set('Authorization', `Bearer ${session?.user.token}`)
        }
    })
    return days;
});