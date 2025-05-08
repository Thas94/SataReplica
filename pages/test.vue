<script setup lang="ts">
const color = ref("red")

const changeColor = () => {
    color.value = "blue"
}

</script>

<template>
  <div class="text">hello</div>
  <button @click="changeColor()">Change color</button>
</template>

<style>
.text {
  color: v-bind(color);
}
</style>