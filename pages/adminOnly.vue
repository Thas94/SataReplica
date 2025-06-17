<template>
    <div>
        <h1>This is admin</h1>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        middleware: ["admin-auth"]
    })
</script>

<style lang="scss" scoped>

</style>