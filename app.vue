<template>
  <div>
    <div class="font-Montserrat">  
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
  const tkn = useAuthenticationStore()
  tkn.GetToken()
</script>
