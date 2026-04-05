<template>
  <nav class="navbar">

    <!-- IZQUIERDA -->
    <div class="nav-left">
      <router-link to="/" class="logo">
        <img src="../../assets/icono-cult.png" />
        <span class="cultivo-title">CULTIVO</span>
      </router-link>
    </div>

    <!-- CENTRO (desktop) / MENÚ (mobile) -->
    <ul :class="['nav-center', { open: isOpen }]">
      <li><router-link class="link-ref" to="/" @click="closeMenu">{{ $t('nav.home') }}</router-link></li>
      <li><router-link class="link-ref" to="/menu" @click="closeMenu">{{ $t('nav.menu') }}</router-link></li>
      <li><router-link class="link-ref" to="/gallery" @click="closeMenu">{{ $t('nav.gallery') }}</router-link></li>
      <li><router-link class="link-ref" to="/about" @click="closeMenu">{{ $t('nav.about') }}</router-link></li>
      <li><router-link class="link-ref" to="/contact" @click="closeMenu">{{ $t('nav.contact') }}</router-link></li>

      <!-- SOLO MOBILE -->
      <li class="mobile-only">
        <router-link to="/reservations" class="btn-reserva" @click="closeMenu">
          {{ $t('nav.reserve') }}
        </router-link>
      </li>

      <li class="lang-switch mobile-only">
        <button :class="{ active: lang === 'es' }" @click="setLang('es')">ES</button>
        <button :class="{ active: lang === 'en' }" @click="setLang('en')">EN</button>
      </li>
    </ul>

    <!-- DERECHA (solo desktop) -->
    <div class="nav-right">
      <router-link to="/reservations" class="btn-reserva">
        {{ $t('nav.reserve') }}
      </router-link>

      <div class="lang-switch">
        <button :class="{ active: lang === 'es' }" @click="setLang('es')">ES</button>
        <button :class="{ active: lang === 'en' }" @click="setLang('en')">EN</button>
      </div>
    </div>

    <!-- BOTÓN HAMBURGUESA -->
    <button class="menu-toggle" @click="toggleMenu">
      <span :class="{ open: isOpen }"></span>
      <span :class="{ open: isOpen }"></span>
      <span :class="{ open: isOpen }"></span>
    </button>

  </nav>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const isOpen = ref(false)
const lang = ref('es')

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

watch(isOpen, (value) => {
  document.body.style.overflow = value ? 'hidden' : ''
})

const setLang = (newLang) => {
  lang.value = newLang
  locale.value = newLang
}

const closeMenu = () => {
  isOpen.value = false
}
</script>
<style>
.navbar {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 1.2rem 2rem;
  background: rgba(0, 0, 0, 0.95);
  position: relative;
  z-index: 1000;
  position: fixed;
    top: 0;
  left: 0;
  width: 100%;
}

/* IZQUIERDA */
.nav-left {
  justify-self: start;
}

/* LOGO */
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  letter-spacing: 4px;
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
}

.logo img {
  width: 32px;
}

.logo:hover {
  opacity: 0.7;
}

/* CENTRO */
.nav-center {
  display: flex;
  gap: 2rem;
  list-style: none;
  justify-self: center;
}

/* LINKS */
.link-ref {
  text-decoration: none;
  color: white;
}

.link-ref:hover {
  opacity: 0.7;
}

/* DERECHA */
.nav-right {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-self: end;
}

/* BOTÓN RESERVA */
.btn-reserva {
  background: white;
  color: black;
  padding: 8px 16px;
  border-radius: 20px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
}

.btn-reserva:hover {
  opacity: 0.8;
}

/* IDIOMA */
.lang-switch button {
  background: none;
  border: 1px solid white;
  color: white;
  padding: 4px 8px;
  margin-left: 5px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
}

.lang-switch .active {
  background: white;
  color: black;
}

/* HAMBURGUESA */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
}

.menu-toggle span {
  height: 3px;
  width: 100%;
  background: white;
  border-radius: 2px;
  transition: 0.3s;
}

.menu-toggle span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-toggle span.open:nth-child(2) {
  opacity: 0;
}

.menu-toggle span.open:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* MOBILE ELEMENTS */
.mobile-only {
  display: none;
}

/*  MOBILE */
@media (max-width: 768px) {

  .navbar {
    grid-template-columns: auto 1fr auto;
  }

  /* ocultar desktop */
  .nav-right {
    display: none;
  }

  .menu-toggle {
    display: flex;
    justify-self: end;
  }

  /* MENÚ FULLSCREEN */
  .nav-center {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: rgba(31, 31, 31, 0.97);

    flex-direction: column;
    justify-content: center;
    align-items: center;

    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: 1000;
  }

  .nav-center.open {
    transform: translateX(0);
  }

  .nav-center li {
    margin: 15px 0;
  }

  .nav-center .link-ref {
    font-size: 1.5rem;
  }

  /* mostrar extras en mobile */
  .mobile-only {
    display: block;
  }

  .lang-switch {
    margin-top: 10px;
  }
}
</style>