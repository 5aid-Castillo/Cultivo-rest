<template>
  <div class="maintenance-container">
    <div class="card">
      <img class="logo" src="../assets/cultivo-logo.png" alt="cultivo" />
      <h1>🚧 Estamos en mantenimiento</h1>
      
      <p class="message">
        Trabajamos para mejorar tu experiencia. 

      </p>

      <p class="date">
        Volveremos a estar disponibles nuevamente el:
        <strong>{{ formattedDate }} </strong>
      </p>

      <p class="extra">
        Gracias por tu paciencia 🤍
      </p>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Cambia aquí la fecha
const targetDate = new Date('2026-04-15')

const formattedDate = computed(() => {
  return targetDate.toLocaleDateString('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
})
</script>

<style scoped>
.maintenance-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #323634, #5c5d5f);
  color: white;
  font-family: Arial, sans-serif;
}

.card {
  background: rgba(0, 0, 0, 0.4);
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  max-width: 400px;
  backdrop-filter: blur(10px);
}

h1, h2 {
  margin-bottom: 1rem;
}

.message {
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.date {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.extra {
  font-size: 0.9rem;
  opacity: 0.8;
}

.logo {
  width: 120px;
  margin-bottom: 1.5rem;
  border-radius: 30%;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}
</style>