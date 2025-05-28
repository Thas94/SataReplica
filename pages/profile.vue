<template>
    <div>
        <button @click="signOut">log out</button>
        {{ user }}
    </div>
</template>

<script setup>
    definePageMeta({
        middleware: ["auth"]
    })
    const client = useSupabaseClient()
    const user = useSupabaseUser()

    onMounted(() => {
        watchEffect(() => {
            if(!user.value) navigateTo('/login')
        })
    })

    async function signOut() {
        await client.auth.signOut()
        navigateTo('/login')
    }
</script>

<style lang="scss" scoped>

</style>