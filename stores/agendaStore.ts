import { defineStore } from "pinia";
import {type AgendaResults} from '../types/agendaModel'
import {type AgendaDays} from '../types/agendaDaysModel'
import {format, formatDate} from 'date-fns'

export const useAgendaStore = defineStore('agendaStore', () => {
        const tkn = useAuthenticationStore()
    
    const agendas = ref([{}]) as Ref<AgendaResults[]>;
    const agenda = ref([{}]) as Ref<AgendaResults[]>;
    const agendaDays = ref([{}]) as Ref<AgendaDays[]>;

    const tabStyle = ref({
        width: "33.3333%",
        position: "0%",
        txtColor: "md:text-xl text-white"
    })

    const GetAgendaDays = async () => {
        const results = await $fetch(`/api/agendas/agendaDays`)
        agendaDays.value = <AgendaDays[]>results
        for (let i = 0; i < agendaDays.value.length; i++) {
            agendaDays.value[i].dateFormatted = format(agendaDays.value[i].date, "LLLL dd")
            if(formatDate(agendaDays.value[i].date, 'yyyy-MM-dd') === formatDate(new Date, 'yyyy-MM-dd'))
                switchTabs(agendaDays.value[i].dayId)
            else if(i === agendaDays.value.length - 1)
                switchTabs(agendaDays.value[i].dayId)          
        } 
    }

    const GetAgendaInfo = async () => {
        const results = await $fetch(`/api/agendas/agenda`)
        agendas.value = <AgendaResults[]>results
        agenda.value = agendas.value.filter(x => x.dayId === 1)
    }

    const switchTabs = (dayId: number) => {
        switch (dayId) {
            case 1:
                tabStyle.value.position = '0%'
                showTabContent(dayId)
                break;
            case 2:
                tabStyle.value.position = '33.3333%'
                showTabContent(dayId)
                break;
            case 3:
                tabStyle.value.position = '66.6667%'
                showTabContent(dayId)
                break;      
            default:
                break;
        }
    }

    const showTabContent = (dayId: number) => {
        agendaDays.value.forEach(function(item, index){
            item.dayId == dayId ? item.textStyle = "md:text-xl text-green-500" : item.textStyle = "md:text-xl text-white"
        })
        agenda.value = agendas.value.filter(x => x.dayId === dayId)
    }

    return {
        tabStyle,
        agendas, 
        agenda,
        GetAgendaInfo,
        agendaDays,
        GetAgendaDays,
        switchTabs
    }
})