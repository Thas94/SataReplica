export default defineEventHandler(async (event) => {
    const days = await $fetch("https://localhost:44311/Agenda/GetAgendaDays", {
        method: 'GET'
    })
    return days;
});