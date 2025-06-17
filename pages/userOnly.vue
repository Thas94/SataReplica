<template>
    <div>
        <h1>This is User</h1>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        middleware: ["role-auth"]
    })
</script>

<style lang="scss" scoped>

</style>