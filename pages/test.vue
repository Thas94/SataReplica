<!-- <script setup>
const color = ref("red")

const changeColor = () => {
    color.value = "blue"

    const mouseX = ref(0)
    const mouseY = ref(0)
    
    const handleMouseMove = (event) => {
        // mouseX.value = event.clientX
        // mouseY.value = event.clientY
        console.log('event'); 
    }
}

</script> -->
<script>
  export default{
    methods: {
      getMousePosition: function(event){
        if(event.screenX >= 704 && event.screenX <= 800)
          {
            console.log(event)
          }
      }
    }
  }
</script>

<template>
  <div class="text">hello</div>
  <div  @mousemove="getMousePosition" class="relative mx-auto max-w-5xl">
                <img class="w-full" src="https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Conference/New+Expo+Floor+Plan-3.jpg" alt="">
            </div>

</template>

<style>
.text {
  color: v-bind(color);
}
</style>