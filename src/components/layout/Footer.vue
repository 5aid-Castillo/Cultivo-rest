<template>
  <footer class="footer">
    <div class="footer-content">

      <!-- Marca -->
      <div class="brand">
        <router-link to="/" class="link-ref"><h2 class="cultivo-title">C U L T I V O</h2></router-link>
        <img src="../../assets/icono-cult.png" alt="">
      </div>

      <!-- Navegación -->
      <div class="links">
        <h3>{{ $t('footer.explore') }}</h3>
        <ul>
          <li><router-link to="/menu" class="link-ref">{{ $t('footer.menu') }}</router-link></li>
          <li><router-link to="/about" class="link-ref">{{ $t('footer.about') }}</router-link></li>
          <li><router-link to="/gallery" class="link-ref">{{ $t('footer.gallery') }}</router-link></li>
          <li><router-link to="/reservations" class="link-ref">{{ $t('footer.reserve') }}</router-link></li>
        </ul>
      </div>

      <!-- Contacto -->
      <div class="contact">
        <h3>{{ $t('footer.contact') }}</h3>
        <p>Puebla City, México</p>
        <p>+52 222 365 5208</p>

      </div>

      <!-- Redes -->
      <div class="social">
        <h3>{{ $t('footer.follow') }}</h3>
        <div class="icons">
          <a href="https://www.instagram.com/cultivorest?igsh=MTE5YnJ3MjcwNXkz&utm_source=qr" target="_blank"><img src="../../assets/instagram.svg" alt="Instagram"></a>
          <a href="https://www.facebook.com/p/cultivorest-100087576886713/" target="_blank"><img src="../../assets/facebook.svg" alt="Facebook"></a>
          <a href="https://api.whatsapp.com/send?phone=5212223655208&text=Hola%20CULTIVO%2C%20quisiera..." target="_blank"><img src="../../assets/whatsapp.svg" alt="WhatsApp"></a>
        </div>
      </div>

    </div>

    <!-- Línea inferior -->
   <div class="footer-bottom">
  <p>
    © {{ year }} CULTIVO. {{ $t('footer.rights') }}
    · 
    <router-link to="/privacy" class="privacy-link">
      {{ $t('footer.privacy') }}
    </router-link>
  </p>
</div>
  </footer>
</template>

<script setup>
import facebookIcon from '../../assets/facebook.svg'
import instagramIcon from '../../assets/instagram.svg'
import whatsappIcon from '../../assets/whatsapp.svg'

const year = new Date().getFullYear()

</script>

<style scoped>
.footer {
  background: rgba(27, 54, 102);
  backdrop-filter: blur(10px);
  color: white;
  padding: 2rem 1.5rem 1rem;
  margin-top: 3rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1100px;
  margin: auto;
}

h2, h3 {
  margin-bottom: 0.8rem;
}

.brand p {
  opacity: 0.8;
  font-size: 0.9rem;
}

.links ul {
  list-style: none;
  padding: 0;
}

.links li {
  margin-bottom: 0.4rem;
}

.links .link-ref {
  color: white;
  text-decoration: none;
  opacity: 0.85;
  transition: opacity 0.3s;
}

.links .link-ref:hover {
  opacity: 1;
}

.contact p {
  font-size: 0.9rem;
  opacity: 0.85;
}

.social .icons {
  display: flex;
  gap: 10px;
}

.social a {
  font-size: 1.2rem;
  text-decoration: none;
  transition: transform 0.2s;
}

.social a:hover {
  transform: scale(1.2);
}

/* Línea inferior */
.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.8rem;
  opacity: 0.7;
}
.privacy-link {
  color: white;
  text-decoration: underline;
  margin-left: 5px;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.privacy-link:hover {
  opacity: 1;
}

/*  Responsive */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 500px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .social .icons {
    justify-content: center;
  }
}
</style>