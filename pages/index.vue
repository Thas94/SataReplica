<template>
    <Agenda />
</template>

<script setup lang="ts">
import Agenda from './agenda.vue';

    definePageMeta({
        middleware: ["auth"]
    })

</script>

<style lang="scss" scoped>

</style>