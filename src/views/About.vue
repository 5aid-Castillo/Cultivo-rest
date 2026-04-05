<template>
  <div class="about-container">

    <section class="about-block">
      <h2 class="block-title">{{ $t('about.title1') }}  <img class="title-icon" src="../assets/flower.svg" alt="flower"/></h2>
      <p>
        {{ $t('about.text1_1') }}
      </p>
      <p>
        {{ $t('about.text1_2') }}
      </p>
      <p>
        {{ $t('about.text1_3') }}
      </p>

      <div class="image-grid three-images">
          <img src="../assets/IMG_5752.PNG" alt="Imagen Nosotros 1" />
          <img src="../assets/IMG_5755.PNG" alt="Imagen Nosotros 2" />
          <img src="../assets/IMG_1954.JPEG" alt="Imagen Nosotros 3" />
      </div>
    </section>

    <!-- BLOQUE 2: El Menú -->
    <section class="about-block">
      <h2 class="block-title">{{ $t('about.title2') }}  <img class="title-icon" src="../assets/flower.svg" alt="flower"/></h2>
      <p>
        {{ $t('about.text2_1') }}
      </p>
      <p>
        {{ $t('about.text2_2') }}
      </p>

      <div class="image-grid three-images">
        <img src="../assets/IMG_4921.JPEG" alt="Imagen Menú 1" />
        <img src="../assets/IMG_9064.JPEG" alt="Imagen Menú 2" />
        <img src="../assets/IMG_4979.JPEG" alt="Imagen Menú 3" />
      </div>
    </section>

    <!-- BLOQUE 3: Riego -->
    <section class="about-block">
      <h2 class="block-title">{{ $t('about.title3') }}  <img class="title-icon" src="../assets/flower.svg" alt="flower"/></h2>
      <p>
        {{ $t('about.text3_1') }}
      </p>
      <p>
        {{ $t('about.text3_2') }}
      </p>
      <p>
        {{ $t('about.text3_3') }}
      </p>

      <div class="image-grid two-images">
          <img src="../assets/IMG_4230.JPEG" alt="Imagen Riego 1" />
          <img src="../assets/IMG_2022.JPG.jpeg" alt="Imagen Riego 2" />
          <img src="../assets/IMG_5676.JPEG" alt="Imagen Riego 3" />
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
// No se requiere lógica por ahora
</script>

<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fffaf7;
}

/* Bloques de texto */
.about-block {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.block-title {
  font-size: 2.5rem;
  font-weight: bold;
/*   color: #2c3e50; */
  color: #1B3666;
  text-align: center;
}

/* Párrafos */
.about-block p {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.8;
  text-align: justify;
}

/* Grid de imágenes */
.image-grid {
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;
}

.image-grid.three-images {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.image-grid.two-images {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.image-grid img {
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-grid img:hover {
  transform: scale(1.03);
}

.title-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;

  /* Ajuste fino de alineación */
  transform: translateY(2px);

  /* Opcional: efecto elegante */
  opacity: 0.8;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.title-icon:hover {
  transform: translateY(2px) scale(1.1);
  opacity: 1;
}
/* Responsivo */
@media (max-width: 768px) {
  .block-title {
    font-size: 2rem;
  }

  .about-block p {
    font-size: 1rem;
  }

  .image-grid.three-images {
    grid-template-columns: 1fr;
  }

  .image-grid.two-images {
    grid-template-columns: 1fr;
  }
}
</style>