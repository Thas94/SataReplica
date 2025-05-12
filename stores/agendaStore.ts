import { defineStore } from "pinia";

export const useAgendaStore = defineStore('agendaStore', () => {
    const agendas = ref([{}])
    const tabStyle = ref({
        width: "33.3333%",
        position: "0%",
        txtColor: "md:text-xl text-white"
    })

    const GetAgendaInfo = async () => {
        const results = await $fetch('/api/agendas/agenda')
        agendas.value = <any>results
        //console.log('xxxx', agendas.value)
    }

    return {
        tabStyle,
        agendas, 
        GetAgendaInfo
    }
})