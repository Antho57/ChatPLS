<template>
    <div class="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-gray-900 pt-5 pb-4">
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
        <div class="mt-5 flex flex-grow flex-col">
            <nav class="flex-1 space-y-1 bg-gray-900" aria-label="Sidebar">
                <a v-for="item in navigation" :key="item.name" :href="item.href" @click="selectDiscussion(item.id)" :class="[item.id === currentNav ? 'border-green-500 bg-green-50 text-green-500' : 'border-transparent text-gray-200 hover:bg-gray-800 hover:text-white', 'group flex items-center border-l-4 px-3 py-2 text-sm font-medium']">
                    <component :is="DocumentTextIcon" :class="[item.id === currentNav ? 'text-green-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 h-6 w-6 flex-shrink-0']" aria-hidden="true" />
                    {{ item.name }}
                </a>
            </nav>
        </div>
    </div>
</template>

<script setup>
import { DocumentTextIcon, PencilSquareIcon } from '@heroicons/vue/24/outline'
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
            ]
        }
    },
    methods: {
        selectDiscussion(id) {
            this.currentNav = id;
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
    fill: rgb(22 163 74);
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
