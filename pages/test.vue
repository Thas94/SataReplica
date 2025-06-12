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
</script>

<template>
  <div class="text">hello</div>
  {{ lastRefreshedAt }}
</template>
