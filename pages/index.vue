<template>
    <div id="header">
        <header class="">
            <div class="md:justify-start header-container">
                <img src="/img/logo.png" alt="" id="header-pic">
            </div>
        </header>
    </div>
    <section id="hero-section">
        <img src="/img/Openserve.png" alt="" class="hero-section-pic">
    </section>
    <section id="agenda-section">
        <div class="">
            <div class="flex justify-center mb-2 pt-8">
                <h1 class="font-extrabold md:font-extrabold md:text-3xl">CONFERENCE AGENDA</h1>
            </div>
            <div class="md:h-1 agenda-underline"></div>
            <div class="tab-selector-container">
                <div class="md:w-[30rem] text-white text-sm tab-selector">
                    <div v-for="day in agnd.agendaDays" :key="day.dayId" class="px-2 text-center cursor-pointer" @click="agnd.switchTabs(day.dayId)">
                        <div class="font-semibold">
                            <span :class="day.txtStyle"> Day {{ day.dayId }}</span>
                        </div>
                        <div class="mt-0.5 text-white text-xs">{{ day.dateFormatted }}</div>
                    </div>
                    <div class="bottom-0 absolute bg-green-500 h-1 transition-all duration-300" :style="{'width': agnd.tabStyle.width, 'left': agnd.tabStyle.position}"></div>
                </div>
            </div>
            <div class="mt-5">
                <div class="gap-4 md:gap-16 md:px-72 agenda-list">
                    <div v-for="agnd in agnd.agenda" :key="agnd.agendaId" class="agenda-card">
                        <div class="card-header">
                            <h2 class="font-medium text-sm md:text-lg font schedule-title">{{ agnd.topic }}</h2>
                        </div>
                        <div class="card-meta">
                            <div class="flex justify-center gap-1 items-center text-xs md:text-lg meta-item">
                                <i class="pi pi-clock icon"></i>
                                <strong> {{ agnd.startTime }} - {{ agnd.endTime }}</strong>
                            </div> 
                        </div>
                        <div class="card-footer">
                            <!-- speakers -->
                            <div class="info-block text-xs">
                                <ul v-for="spk in agnd.speakers" :key="spk.speakerId">
                                    <div class="px-2 pt-2 font-medium">
                                        <li class="w-full text-base md:text-xl flex justify-center">{{ spk.speakerName }}</li>
                                    </div>
                                </ul>
                            </div>
                            <!-- facilitators -->
                            <div class="info-block" v-if="agnd.facilitators !== null">
                                <h5 class="font-bold text-xl md:text-2xl info-label flex justify-center">Facilitators </h5>
                                <ul v-for="fac in agnd.facilitators" :key="fac.facilitatorId">
                                    <div class="px-2 font-medium">
                                        <li class="w-full text-base md:text-xl flex justify-center">{{ fac.facilitatorName }}</li>
                                    </div>
                                </ul>
                            </div>
                            <!-- panel members -->
                            <div class="info-block" v-if="agnd.panelMembers !== null">
                                <h5 class="font-bold text-xl md:text-2xl info-label flex justify-center">Panel Members </h5>
                                <ul v-for="pan in agnd.panelMembers" :key="pan.panelMemberId">
                                    <div class="px-2 font-medium">
                                        <li class="w-full text-base md:text-xl flex justify-center">{{ pan.panelMemberName }}</li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    <section class="pt-10" id="our-speakers">
        <div id="speakers">
            <div>
                <h1 class="font-extrabold md:font-extrabold text-white md:text-3xl">Meet Our Speak</h1>
                <div class="md:h-1 agenda-underline"></div>
                <div>
                    
                </div>
            </div>
        </div>
    </section>


    <div id="footer">
        <header>
            <div class="md:justify-end footer-container">
                <img src="/img/footer.png" alt="" id="footer-pic">
            </div>
        </header>
    </div>

</template>

<script setup>
    import {format, formatDate} from 'date-fns'

    const agnd = useAgendaStore()
    agnd.GetAgendaDays()
    agnd.GetAgendaInfo()

</script>

<style scoped>

    /* header/ nav */
    #header-pic {
        height: 50px;
    }

    #header{
        left: 0;
        opacity: .8;
        padding: 1rem;
        position: fixed;
        top: 0;
        transition: background-color .3s;
        width: 100%;
        z-index: 99;
    }

    .header-container, .footer-container{
        align-items: center;
        display: flex;
    }

    @media (min-width: 768px){
        .md\:justify-start{
            justify-content: flex-start;
        }
    }

    /* hero */
    #hero-section{
        background-color: black;
        height: 100vh;
        overflow: hidden;
        width: 100%;
    }

    .hero-section-pic{
        height: 100%;
        object-fit: cover;
        width: 100%;
    }

    @media (min-width: 768px){
        .desktop-hero{
            visibility: visible;
        }
    }

    /* underline */
    @media (min-width: 768px){
        .md\:h-1{
            height: 3px;
        }
    }

    .agenda-underline{
        margin-bottom: 20px;
        margin-left: auto;
        margin-right: auto;
        background-color: green;
        width: 100px;
    }

    /* tabs */
    .tab-selector-container{
        display: flex;
        justify-content: center;
    }

    .tab-selector{
        background-color: black;
        display: flex;
        margin-bottom: 2rem;
        position: relative;
        justify-content: space-evenly;
        border-radius: 10px;
        padding: 1.2rem;
    }

    #tab1{
        border-bottom-style: solid;
        border-bottom-color: white;
    }

    /* agenda list */
    @media (min-width: 768px){
        .md\:px-72{
            padding-left: 25rem;
            padding-right: 18rem;
        }
    }

    @media (min-width: 768px){
        .md\:gap-16{
            gap: 4rem;
        }
    }

    .agenda-list{
        display: flex;
        flex-direction: column;
        width: 90vw;
    }

    .card-header{
        align-items: center;
        background-color: black;
        color: white;
        display: flex;
        justify-content: center;
        padding: 5px;
        text-align: center;
    }

    @media (min-width: 768px){
        .md\:justify-end{
            justify-content: flex-end;
        }
    }

    @media (min-width: 768px){
        .md\:text-lg{
            font-size: 1.125rem;
            line-height: 1.75rem;
        }
    }

    .meta-item, .card-meta{
        align-items: center;
        display: flex;
    }

    .icon{
        color: #16a34a;
    }

    .schedule-title{
        font-weight: 600;
        margin-bottom: .25rem;
    }

    @media (min-width: 768px){
        .md\:text-lg{
            font-size: 1.25rem;
            line-height: 1.75rem;
        }
    }

    .card-meta{
        background-color: black;
        justify-content: center;
        color: white;
        font-size: .7rem;
        padding: 16px 30px;    
    }

    .agenda-card{
        margin-bottom: 1rem;
    }

    .card-footer{
        height: auto;
        font-size: .9rem;
        padding-top: .25rem ;
    }

    .info-block{
        width: 100%;
        margin-bottom: .5rem;
    }

    .text-xs{
        font-size: .75rem;
        line-height: 1rem;
    }

    @media (min-width: 768px){
        .md\:text-lg{
            font-size: 1.25rem;
            line-height: 1.75rem;
        }
    }

    strong{
        font-weight: bolder;
    }

    @media (min-width: 768px){
        .md\:text-2xl{
            font-size: 1.5rem;
            line-height: 2rem;
        }
    }   

    .info-label{
        color: gray;
        margin-bottom: 1px;
        margin-right: .25rem;
        padding-bottom: 1px;
    }

    .font-bold{
        font-weight: 700;
    }

    /* meet our speakers */

    #speakers{
        color: white;
        text-align: center;
        background-color: black;
        padding-top: 2.5rem;
        padding-bottom: 2.5rem;
    }

    @media (min-width: 768px){
        .md\:font-extrabold{
            font-weight: 800;
        }
    } 

    /* footer */

    #footer-pic{
        height: 70px;
    }

    #footer{
        bottom: 0;
        padding-bottom: .5rem;
        left: 0;
        opacity: .8;
        position: fixed;
        width: 100%;
        z-index: 99;
        background-color: black;
    }

</style>