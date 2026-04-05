<template>
  <div class="not-found">
    <div class="content">
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>

      <router-link to="/" class="btn"> Volver al inicio </router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.not-found {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ffffff, #a5a5a5);
  color: rgb(17, 17, 17);
  text-align: center;
  font-family: Arial, sans-serif;
}

.content {
  animation: fadeIn 0.8s ease-in-out;
}

h1 {
  font-size: 8rem;
  margin: 0;
}

h2 {
  margin: 0.5rem 0;
  font-size: 2rem;
}

p {
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: rgb(12, 12, 12);
  color: #04ce47;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}

.btn:hover {
  background: #363636;
  transform: translateY(-2px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
