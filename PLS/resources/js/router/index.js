import { createRouter, createWebHistory } from 'vue-router';
import Accueil from '../components/Accueil.vue';
import Login from '../components/Login.vue';
const routes = [
    {
        path: '/',
        name: 'Accueil',
        component: Accueil
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})
