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
            <div class="md:h-1 underline-2"></div>
            <div>dvsdvsdv</div>
        </div>
    </section>
</template>

<script setup>

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

    .header-container{
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


</style>