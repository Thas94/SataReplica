import { defineStore } from "pinia";

export const useAgendaStore = defineStore('agendaStore', () => {
    const agendas = ref([{}])
    const tabStyle = ref({
        width: "33.3333%",
        position: "0%",
        txtColor: "md:text-xl text-white"
    })
    const agendaDays = ref([
        {dayId: 1, day: "Day 1", date: "8 May", txtStyle: "md:text-xl text-green-500"}, //will be determined by the current day
        {dayId: 2, day: "Day 2", date: "9 May", txtStyle: "md:text-xl text-white"},
        {dayId: 3, day: "Day 3", date: "10 May", txtStyle: "md:text-xl text-white"}
    ])

    const GetAgendaInfo = async () => {
        const results = await $fetch('/api/agendas/agenda')
        agendas.value = <any>results
        //console.log('xxxx', agendas.value)
    }

    return {
        tabStyle,
        agendas, 
        GetAgendaInfo,
        agendaDays
    }
})