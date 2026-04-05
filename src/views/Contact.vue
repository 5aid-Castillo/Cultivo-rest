<template>
  <div class="contact-container">
    <div class="contact-info">
      <h2>{{ $t("contact.locationTitle") }}</h2>
      <p class="address">{{ $t("contact.streetName") }}</p>
      <p class="address">{{ $t("contact.city") }}</p>

      <a
        class="maps-button"
        href="https://maps.app.goo.gl/F9eyn6yCUtvo1a7p7"
        target="_blank"
      >
        {{ $t("contact.buttonMaps") }}
      </a>

      <h3>{{ $t("contact.scheduleTitle") }}</h3>
      <p>{{ $t("contact.schedule") }}</p>
      <p>{{ $t("contact.closed") }}</p>

      <h3>{{ $t("contact.contactTitle") }}</h3>
      <p class="phone">
        {{ $t("contact.txtPhone") }}
        <a href="tel:+522223655208">{{ $t("contact.phone") }}</a>
      </p>
    </div>

    <div class="contact-map">
      <iframe
        src="https://www.google.com/maps?q=Cultivo%20Puebla&output=embed"
        loading="lazy"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.contact-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 3rem 4rem;
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.contact-info {
  flex: 1;
  min-width: 300px;
}

.contact-map {
  flex: 1;
  min-width: 300px;
}

.contact-map iframe {
  width: 100%;
  height: 300px;
  border: 0;
  border-radius: 15px;
}

/* Botón Maps */
.maps-button {
  display: inline-block;
  margin: 1rem 0;
  padding: 0.6rem 1rem;
  background-color: #2980b9;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
}

.maps-button:hover {
  background-color: #1f6690;
  transform: translateY(-2px);
}

/* Tipografía */
.contact-info h2,
.contact-info h3 {
  color: #2c3e50;
}

.address,
.phone {
  color: #555;
}

.phone a {
  color: #2980b9;
  text-decoration: none;
  font-weight: bold;
}

.time {
  color: #27ae60;
  font-weight: bold;
}

.closed {
  color: #e74c3c;
  font-weight: bold;
}

/* Responsive */
@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    padding: 2rem 1rem;
    text-align: center;
  }
}
</style>
