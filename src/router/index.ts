import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'Home',
        component:() => import('../views/Home.vue')

    },
    {
        path: '/about',
        name: 'About',
        component:() => import('../views/About.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component:() => import('../views/Contact.vue')
    },
    {
        path: '/menu',
        name: 'Menu',
        component:() => import('../views/Menu.vue')
    },
    {
       path: '/gallery',
       name: 'Gallery',
       component:() => import('../views/Gallery.vue')
    },
    {
        path: '/reservations',
        name: 'Reservations',
        component:() => import('../views/Reservations.vue')
    },
    {
        path: '/privacy',
        name: 'PrivacyPolicy',
        component:() => import('../views/Privacy.vue')
    },
    {
        path:'/:pathMatch(.*)*',
        name:'NotFound',
        component:() => import('../views/NotFound.vue')
    }
  ],


    scrollBehavior() {
        return { top: 0 }
    }
})

export default router