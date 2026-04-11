<template>
  <section class="gallery">
    <h2 class="gallery-title">{{ $t("gallery.title") }}</h2>

    <div class="gallery-grid">
      <div v-for="(img, index) in visibleImages" :key="index" class="gallery-item">
        <div v-if="!loaded[index]" class="skeleton"></div>
        <img
          :src="img"
          alt="gallery image"
          loading="lazy"
          @load="onLoad(index)"
          :class="{ show: loaded[index] }"
        />
      </div>
    </div>
    <div ref="loadMoreTrigger"></div>
  </section>
</template>
<script setup lang="ts">
import { computed, onMounted } from "vue";
import { ref } from "vue";
const loaded = ref<boolean[]>([]);

const images = [
  "/IMG_4943.webp",
  "/IMG_4933.webp",
  "/IMG_5705.webp",

  "/IMG_5697.webp",
  "/IMG_5695.webp",
  "/IMG_5702.webp",

  "/IMG_9086.webp",
  "/IMG_9091.webp",
  "/IMG_9093.webp",

  "/IMG_4378.webp",
  "/IMG_4379.webp",
  "/IMG_4381.webp",

  "/IMG_4935.webp",
  "/IMG_4295.webp",
  "/IMG_1918.webp",

  "/IMG_1968.webp",
  "/IMG_1972.webp",
  "/IMG_1974.webp",

  "/IMG_5759.JPG.webp",
  "/IMG_5708.webp",
  "/IMG_5687.webp",
  "/IMG_5719.webp",
  "/IMG_5716.webp",
  "/IMG_9064.webp",
  "/IMG_9105.webp",
];
const onLoad = (index: number) => {
  loaded.value[index] = true;
};

const batchSize = 6;
const visibleCount = ref(batchSize);

const visibleImages = computed(() =>
  images.slice(0, visibleCount.value)
);

const loadMoreTrigger = ref<HTMLElement | null>(null);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      visibleCount.value += batchSize;
    }
  });

  if (loadMoreTrigger.value) {
    observer.observe(loadMoreTrigger.value);
  }
});
</script>

<style scoped>
.gallery {
  padding: 100px 2rem;
  background: rgba(0, 0, 0, 0.95);
  min-height: 100vh;
  margin-top: -0.7rem;
  margin-bottom: -1rem;
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
  transition:
    transform 0.5s ease,
    filter 0.5s ease;
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
  background: linear-gradient(90deg, #1a1a1a 25%, #2a2a2a 50%, #1a1a1a 75%);
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
  transition:
    opacity 0.5s ease,
    transform 0.5s ease,
    filter 0.5s ease;
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
