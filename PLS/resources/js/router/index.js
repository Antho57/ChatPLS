import { createRouter, createWebHistory } from 'vue-router';
import Accueil from '../components/Accueil.vue';
import Connexion from '../components/Connexion.vue';
import Chat from '../components/Chat.vue';
const routes = [
    {
        path: '/',
        name: 'Accueil',
        component: Accueil
    },
    {
        path: '/connexion',
        name: 'Connexion',
        component: Connexion
    },
    {
        path: '/chat',
        name: 'Chat',
        component: Chat
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})
