<template>
  <div>
    <div class="font-Montserrat">  
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
debugger
  const tkn = useAuthenticationStore()
  tkn.GetToken()
</script>
