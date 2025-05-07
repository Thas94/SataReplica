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
            <div>dvsdvsdv</div>
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


    /* footer */
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

    @media (min-width: 768px){
        .md\:justify-end{
            justify-content: flex-end;
        }
    }

    #footer-pic{
        height: 70px;
    }

</style>