<template>
  <div class="menu-container">
    <!-- Título -->
    <h2 class="menu-title">{{ $t("menu.title") }}</h2>

    <!-- Imagen decorativa (rama) -->
    <div class="menu-decor">
      <img src="../assets/menu_rama.png" alt="Decoración de rama" />
    </div>

    <!-- Imagen del menú -->
    <div class="menu-image">
      <img src="../assets/IMG_5569.PNG" alt="Menú de temporada" />
    </div>
  </div>
</template>

<script setup lang="ts">
// No se requiere lógica por ahora
</script>

<style scoped>
.menu-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3rem 2rem;
  background-color: #fcfaf2;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

/* Título */
.menu-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #2c3e50;
  letter-spacing: 2px;
  position: relative;
}

/* Imagen decorativa */
.menu-decor img {
  width: 500px;
  height: auto;
  margin: 0.5rem 0;
}

/* Imagen del menú */
.menu-image img {
  max-width: 100%;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  object-fit: cover;
  transition: transform 0.3s ease;
}

.menu-image img:hover {
  transform: scale(1.03);
}

/* Responsivo */
@media (max-width: 768px) {
  .menu-container {
    padding: 2rem 1rem;
  }

  .menu-title {
    font-size: 2rem;
  }

  .menu-decor img {
    width: 220px;
  }
}
</style>