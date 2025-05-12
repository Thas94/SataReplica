export default defineEventHandler(async (event) => {
    const agendas = await $fetch("https://localhost:44311/Agenda/GetAgendaInfo", {
        method: 'GET'
    })
    return agendas;
});