<template>
  <div class="reservations-container">
    <div class="reservations-image">
      <img src="/hero-image.webp" alt="Reservaciones" />
    </div>

    <div class="reservations-content">
      <h2>{{ $t('reserve.title') }}</h2>
      <p>
        {{ $t('reserve.text') }}
      </p>

      <div class="buttons">
        <a 
          class="reserve-button"
          href="https://www.opentable.com.mx/r/cultivo-reservations-puebla?restref=1488496&lang=es-MX&ot_source=Restaurant%20website"
          target="_blank"
        >
          {{ $t('reserve.button') }}
        </a>

        <a 
          class="whatsapp-button" 
          href="https://api.whatsapp.com/send?phone=5212223655208&text=Hola%20CULTIVO%2C%20quisiera%20hacer%20una%20reservación"
          target="_blank"
        >
          <img src="../assets/whatsapp.svg" alt="WhatsApp" />
          {{ $t('reserve.buttonWhatsapp') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.reservations-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  padding: 3rem 2rem;
  border-radius: 15px;
  background: linear-gradient(135deg, #fdfdfd, #f3f3f3);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.reservations-image {
  flex: 1;
  min-width: 280px;
}

.reservations-image img {
  width: 100%;
  border-radius: 15px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.reservations-image img:hover {
  transform: scale(1.05);
}

.reservations-content {
  flex: 1;
  min-width: 280px;
}

.reservations-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.reservations-content p {
  color: #555;
  margin-bottom: 1.5rem;
}

.buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.reserve-button {
  background-color: #2c3e50;
  color: white;
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
}

.reserve-button:hover {
  background-color: #1a252f;
  transform: translateY(-2px);
}

.whatsapp-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #25d366;
  color: white;
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
}

.whatsapp-button img {
  width: 20px;
}

.whatsapp-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

/* Responsive */
@media (max-width: 768px) {
  .reservations-container {
    flex-direction: column;
    text-align: center;
  }

  .buttons {
    justify-content: center;
  }
}
</style>