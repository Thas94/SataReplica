<template>
    <Agenda />
</template>

<script setup lang="ts">
import Agenda from './agenda.vue';

    definePageMeta({
        middleware: ["auth"]
    })
    // definePageMeta({
    //     auth: {
    //         unauthenticatedOnly: true,
    //         navigateAuthenticatedTo: '/',
    //     },
    //     })
</script>

<style lang="scss" scoped>

</style>