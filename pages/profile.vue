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
    const router = useRouter()

    async function signOut() {
        await client.auth.signOut()
        router.push('/login')
    }
</script>

<style lang="scss" scoped>

</style>