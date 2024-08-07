import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createGtm } from '@gtm-support/vue-gtm';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: () => import('./views/Home.vue') },
        { path: '/about', name: 'About', component: () => import('./views/About.vue') },
        { path: '/contact', name: 'Contact', component: () => import('./views/Contact.vue') },
        { path: '/pricing', name: 'Pricing', component: () => import('./views/Pricing.vue') },
        { path: '/catalog', name: 'Catalog', component: () => import('./views/Catalog.vue') },
        { path: '/booking', name: 'Booking', component: () => import('./views/Booking.vue') },

        { path: '/:pathMatch(.*)*', redirect: { name: 'Home' } },
    ],
});

const app = createApp(App);

app.use(router);

app.use(
    createGtm({
        id: "GTM-MNLKQ7WG",
        vueRouter: router
    })
);

app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
