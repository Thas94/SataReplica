<template>
    <div>
        <button @click="() => signOut({ callbackUrl: 'auth/login' })">
    Signout 
  </button>
        <h1>Profile</h1>
        <pre>{{ data }}</pre>
        <p>==============================</p>
    </div>
</template>

<script setup lang="ts">
    const {
    status,
    lastRefreshedAt,
    getCsrfToken,
    getProviders,
    getSession,
    signIn,
    signOut
    } = useAuth()
    const {data} = await useFetch('/api/userSession')
    definePageMeta({
        auth: {
            unauthenticatedOnly: false,
            navigateAuthenticatedTo: '/',
        },
    })

    // definePageMeta({
    //     middleware: ["auth"]
    // })
    // const client = useSupabaseClient()
    // const user = useSupabaseUser()

    // onMounted(() => {
    //     watchEffect(() => {
    //         if(!user.value) navigateTo('/login')
    //     })
    // })

    // async function signOut() {
    //     await client.auth.signOut()
    //     navigateTo('/login')
    // }
</script>

<style lang="scss" scoped>

</style>