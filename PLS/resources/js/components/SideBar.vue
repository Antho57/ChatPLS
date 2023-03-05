<template>
    <div class="w-64 flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-gray-900 pt-5 h-[92%]">
        <div class="flex flex-shrink-0 items-center space-y-5 px-4">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="50 0 2300 500" class="fadeCircle">
                <title>PLS ?</title>
                <defs>
                    <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle">
                        <animateTransform
                            attributeName="transform"
                            begin="0s"
                            dur="5s"
                            type="rotate"
                            from="180 250 250"
                            to="0 250 250"
                            repeatCount="indefinite"
                        />
                    </path>
                </defs>
                <text dy="70" textLength="1220" id="textcircle">
                    <textPath xlink:href="#textcircle" >PLS ? • PLS ? • PLS ? •</textPath>
                </text>
            </svg>
        </div>
        <div class="mt-5 flex flex-grow flex-col h-1/2">
            <a href="#" @click="newChat()" class="border-transparent h-1/6 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center border-l-4 px-3 py-2 text-sm font-medium">
                <PlusCircleIcon class="text-gray-400 group-hover:text-gray-200 mr-3 h-6 w-6 flex-shrink-0" aria-hidden="true" />
                Nouveau chat
            </a>
            <nav class="flex-1 space-y-1 bg-gray-900 h-5/6 max-h-80 overflow-scroll shadow-amber-400" aria-label="Sidebar" style="box-shadow: inset 0px -21px 15px -26px #7171FF;">
                <a v-for="item in navigation" :key="item.name" :href="item.href" @click="selectDiscussion(item.id)" :class="[item.id === currentNav ? 'border-green-500 bg-green-200 text-green-500' : 'border-transparent text-gray-200 hover:bg-gray-800 hover:text-white', 'group flex items-center border-l-4 px-3 py-2 text-sm font-medium']">
                    <component :is="DocumentTextIcon" :class="[item.id === currentNav ? 'text-green-500' : 'text-gray-400 group-hover:text-gray-200', 'mr-3 h-6 w-6 flex-shrink-0']" aria-hidden="true" />
                    {{ item.name }}
                </a>
            </nav>
        </div>
        <div class="h-1/2">
            <div class="h-5/6">
                <div class="h-1/5">
                    <a href="#" @click="deleteAll = !deleteAll" v-bind:class="[deleteAll === false ? 'flex': 'hidden']" class="border-transparent bg-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center border-l-4 px-3 py-4 text-sm font-medium">
                        <TrashIcon class="text-gray-400 group-hover:text-gray-200 mr-3 h-5 w-5 flex-shrink-0" aria-hidden="true" />
                        Tout supprimer
                    </a>
                    <div v-bind:class="[deleteAll === true ? 'flex': 'hidden']" class="border-transparent bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center border-l-4 px-3 py-2 text-sm font-medium">
                        <button type="button" @click="deleteAllChat()" class="group inline-flex items-center w-1/2 mx-2 px-4 py-2 border border-transparent text-sm justify-center font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600">
                            Valider
                        </button>
                        <button type="button" @click="deleteAll = !deleteAll" class="group inline-flex items-center w-1/2 mx-2 px-4 py-2 border border-transparent text-sm justify-center font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600">
                            Annuler
                        </button>
                    </div>
                </div>

            </div>
            <div class="h-1/6">
                <p class="text-gray-500 flex items-center align-content-center text-md px-4 py-2">GPT3 v5.2</p>
            </div>
        </div>
    </div>
    <div class="flex flex-grow flex-col border-r overflow-y-auto w-64 flex-shrink-0 bg-gray-700 p-4 h-[8%]">
        <div href="#" class="min-h-fit block w-full flex-shrink-0">
            <div class="flex items-center">
                <div class="w-1/4">
                    <a href="/compte">
                        <img class="inline-block h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </a>
                </div>
                <div class=" w-2/4">
                    <a href="/compte">
                        <p class="text-sm font-medium text-white">Antho</p>
                        <p class="text-xs font-medium text-gray-300 hover:text-gray-200">Voir profil</p>
                    </a>
                </div>
                <div class="ml-3 w-1/4">
                    <button type="button" @click="disconnecte()" class="group inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600">
                        <PowerIcon class="h-5 w-5 text-gray-500 group-hover:text-white" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { DocumentTextIcon, PencilSquareIcon, PowerIcon, PlusCircleIcon, TrashIcon } from '@heroicons/vue/24/outline'
</script>

<script>
import {CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon} from "@heroicons/vue/24/outline";

export default {
    name: "SideBar",
    data() {
        return {
            currentNav: 1,
            navigation: [
                { name: 'Dashboard', href: '#', id: 0 },
                { name: 'Team', href: '#', id: 1 },
                { name: 'Projects', href: '#', id: 2 },
                { name: 'Calendar', href: '#', id: 3 },
                { name: 'Documents', href: '#', id: 4 },
                { name: 'Reports', href: '#', id: 5 },
                { name: 'Dashboard', href: '#', id: 6 },
                { name: 'Team', href: '#', id: 7 },
                { name: 'Projects', href: '#', id: 8 },
                { name: 'Calendar', href: '#', id: 9 },
                { name: 'Documents', href: '#', id: 10 },
                { name: 'Reports', href: '#', id: 11 },
            ],
            deleteAll: false,
        }
    },
    methods: {
        selectDiscussion(id) {
            this.currentNav = id;
        },
        disconnecte() {
            //Disconnecte user
            this.$router.push({name: 'Accueil'});
        },
        newChat() {
            //Create new chat
        },
        deleteAllChat() {
            //Delete all chat
            this.deleteAll = !this.deleteAll;
        },
        deleteSingleChat(id) {
            //Delete single chat
        },
        renameChat(id) {
            //Rename chat
        }
    },

}
</script>

<style scoped>

svg textPath {
    font-size: 60px;
    font-family:  Hanson;
    text-transform: uppercase;
    letter-spacing: 6px;
    fill: rgb(40, 188, 95);
    background: rgba(255, 255, 255, 0);
}

@keyframes rotateInfinity {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.fadeCircle {
    animation-duration: 2s;
    animation-name: fadeIn;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    opacity: 0;
}

#textcircle {
    animation: rotateInfinity 40s linear infinite;
    transform-origin: 50% 50%;
    transform-box: fill-box;
    transform: rotate(0deg);
}

</style>
