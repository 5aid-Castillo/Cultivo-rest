# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

src/
│
├── assets/           # imágenes, logos, íconos
├── components/       # componentes reutilizables
│   ├── ui/           # botones, cards, inputs
│   ├── layout/       # navbar, footer
│   └── restaurant/   # cosas específicas (menuItem, dishCard)
│
├── views/            # páginas
│   ├── Home.vue
│   ├── Menu.vue
│   ├── About.vue
│   ├── Contact.vue
│   └── Reservation.vue
│
├── router/
│   └── index.js
│
├── stores/           # (Pinia) estado global
│   └── restaurant.js
│
├── services/         # API calls
│   └── api.js
│
├── composables/      # lógica reutilizable (hooks)
│   └── useMenu.js
│
├── layouts/          # estructuras de página
│   └── MainLayout.vue
│
├── App.vue
└── main.js