<template>
  <section class="gallery">

    <h2 class="gallery-title">{{ $t("gallery.title") }}</h2>

    <div class="gallery-grid">
      <div
        v-for="(img, index) in images"
        :key="index"
        class="gallery-item"
      >
      <div v-if="!loaded[index]" class="skeleton"></div>
         <img
    :src="img"
    alt="gallery image"
    @load="onLoad(index)"
    :class="{ show: loaded[index] }"
  />
      </div>
    </div>

  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const loaded = ref<boolean[]>([])

const images = [
  new URL('../assets/IMG_4943.JPEG', import.meta.url).href,
  new URL('../assets/IMG_4933.JPEG', import.meta.url).href,
  new URL('../assets/IMG_5705.JPEG', import.meta.url).href,
 
  new URL('../assets/IMG_5697.JPEG', import.meta.url).href,
  new URL('../assets/IMG_5695.JPEG', import.meta.url).href,
  new URL('../assets/IMG_5702.JPEG', import.meta.url).href,
  
  new URL('../assets/IMG_9086.JPEG', import.meta.url).href,
  new URL('../assets/IMG_9091.JPEG', import.meta.url).href,
  new URL('../assets/IMG_9093.JPEG', import.meta.url).href,
  
  new URL('../assets/IMG_4378.JPEG', import.meta.url).href,
  new URL('../assets/IMG_4379.JPEG', import.meta.url).href,
  new URL('../assets/IMG_4381.JPEG', import.meta.url).href,
  
  new URL('../assets/IMG_4935.JPEG', import.meta.url).href,
  new URL('../assets/IMG_4295.JPEG', import.meta.url).href,
  new URL('../assets/IMG_1918.JPEG', import.meta.url).href,
  
  new URL('../assets/IMG_1968.JPEG', import.meta.url).href,
  new URL('../assets/IMG_1972.JPEG', import.meta.url).href,
  new URL('../assets/IMG_1974.JPEG', import.meta.url).href,
  
  new URL('../assets/IMG_5759.JPG.jpeg', import.meta.url).href,
  new URL('../assets/IMG_5708.JPEG', import.meta.url).href,
  new URL('../assets/IMG_5687.JPEG', import.meta.url).href,
  new URL('../assets/IMG_5719.JPEG', import.meta.url).href,
  new URL('../assets/IMG_5716.JPEG', import.meta.url).href,
  new URL('../assets/IMG_9064.JPEG', import.meta.url).href,
  new URL('../assets/IMG_9105.JPEG', import.meta.url).href,
  ];
  const onLoad = (index: number) => {
    loaded.value[index] = true
  }
</script>

<style scoped>
.gallery {
  padding: 100px 2rem;
  background: #0f0f0f;
  min-height: 100vh;
}

/* TÍTULO */
.gallery-title {
  text-align: center;
  color: white;
  font-size: 2.5rem;
  margin-bottom: 50px;
  letter-spacing: 3px;
}

/* GRID MASONRY */
.gallery-grid {
  column-count: 4;
  column-gap: 1rem;
}

/* ITEMS */
.gallery-item {
  break-inside: avoid;
  margin-bottom: 1rem;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
}

/* IMÁGENES */
.gallery-item img {
  width: 100%;
  display: block;
  border-radius: 12px;
  transition: transform 0.5s ease, filter 0.5s ease;
}

/* HOVER PREMIUM */
.gallery-item:hover img {
  transform: scale(1.08);
  filter: brightness(0.8);
}

/* EFECTO OVERLAY */
.gallery-item::after {
/*   content: "Ver más"; */
  position: absolute;
  bottom: 10px;
  left: 15px;
  color: white;
  font-size: 0.9rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover::after {
  opacity: 1;
}
.skeleton {
  width: 100%;
  height: 250px;
  border-radius: 12px;
  background: linear-gradient(
    90deg,
    #1a1a1a 25%,
    #2a2a2a 50%,
    #1a1a1a 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
/* ANIMACIÓN */
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
.gallery-item img {
  opacity: 0;
  transition: opacity 0.5s ease, transform 0.5s ease, filter 0.5s ease;
}

.gallery-item img.show {
  opacity: 1;
}

/* RESPONSIVE */
@media (max-width: 1200px) {
  .gallery-grid {
    column-count: 3;
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    column-count: 2;
  }

  .gallery-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    column-count: 1;
  }
}
</style>