<script setup lang="ts">
const {
  status,
  data,
  lastRefreshedAt,
  getCsrfToken,
  getProviders,
  getSession,
  signIn,
  signOut
} = useAuth()

const loggedIn = computed(() => status.value === 'authenticated')

async function SignIn() {
    await signIn('github')
}

async function SignOut() {
    await signOut()
}

</script>

<template>
    <div>
        You are currently {{ status }}
        <button v-if="loggedIn" @click="SignOut">SignOut</button>
        <button v-else @click="SignIn">SignIn</button>
    </div>
</template>



<style lang="scss" scoped>

</style>