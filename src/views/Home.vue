<template>
  <div class="container">
    <!-- Fondo blur -->
    <!-- <img :src="imageSrc" class="bg-blur" /> -->

    <!-- Imagen principal -->
    <img :src="imageSrc" @load="handleLoad" :class="['bg-image', { show: !loading }]" alt="background" />

    <!-- Texto mientras carga -->
   <div
  v-if="loading"
  class="loader"
  data-aos="fade-up"
  data-aos-duration="1200"
>
  CULTIVO
</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import imageSrc from "/IMG_1897.webp";

const loading = ref(true);

let imageLoaded = false;
let minTimePassed = false;

function handleLoad() {
  imageLoaded = true;
  checkReady();
}

// mínimo 2.5 segundos
setTimeout(() => {
  minTimePassed = true;
  checkReady();
}, 2500);

function checkReady() {
  if (imageLoaded && minTimePassed) {
    loading.value = false;
  }
}
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin-top:-1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(27, 54, 102);
}

/* Fondo desenfocado */
.bg-blur {
  position: absolute;
  width: 110%;
  height: 110%;
  object-fit: cover;
  filter: blur(25px) brightness(0.6);
  z-index: 0;
}

/* Imagen principal tipo tarjeta */
.bg-image {
  margin-top: -4rem;
  position: relative;
  width: 80%;
  object-fit: cover;
  height: 85%;
  border-radius: 16px;
  z-index: 1;

  opacity: 0;

  transition: opacity 0.8s ease;
}
.bg-image.show{
    opacity: 1;
}

/* Texto centrado */
.loader {
  position: absolute;
  inset: 0; 

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 4rem; 
  font-weight: 700;
  letter-spacing: 10px;

  z-index: 2;

  opacity: 1;
  transition: opacity 0.5s ease;
}

/* Mobile ajustes */
@media (max-width: 768px) {
  .bg-image {
    width: 95%;
    height: 85%;
    object-fit: cover;
  }
}
</style>
