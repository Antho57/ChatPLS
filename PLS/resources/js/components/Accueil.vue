<template>
        <div class="bg-gray-900">
            <main>
                <!-- Hero section -->
                <div class="relative isolate overflow-hidden flex" style="height: 100vh;">
                    <svg class="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
                        <defs>
                            <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                                <path d="M.5 200V.5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y="-1" class="overflow-visible fill-gray-800/20">
                            <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
                        </svg>
                        <rect width="100%" height="100%" stroke-width="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" class="absolute top-10 left-[calc(50%-4rem)] -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]" width="1920" height="750" preserveAspectRatio="none" viewBox="0 0 1920 1080">
                        <g mask="url(&quot;#SvgjsMask1331&quot;)" fill="none">
                            <path d="M1807.72,300.446C1837.014,300.076,1854.085,269.895,1866.663,243.437C1877.167,221.343,1877.776,197.109,1867.374,174.966C1854.84,148.285,1837.188,118.712,1807.72,117.962C1777.536,117.194,1755.739,144.621,1742.566,171.79C1731.147,195.34,1734.319,221.609,1746.143,244.958C1759.522,271.377,1778.108,300.82,1807.72,300.446" fill="rgba(23, 108, 32, 1)" class="triangle-float1"></path>
                            <path d="M1387.29,734.919C1437.389,734.869,1487.152,714.411,1512.081,670.955C1536.906,627.68,1527.709,575.421,1503.957,531.548C1478.78,485.044,1440.041,444.175,1387.29,440.452C1328.21,436.282,1266.372,460.729,1238.123,512.785C1210.822,563.095,1230.16,623.682,1262.07,671.202C1290.053,712.873,1337.095,734.969,1387.29,734.919" fill="rgba(23, 108, 32, 1)" class="triangle-float2"></path>
                            <path d="M392.723,1227.493C470.562,1225.026,511.114,1144.062,550.057,1076.62C589.005,1009.168,635.834,935.106,602.087,864.907C565.07,787.906,478.048,744.959,392.723,749.34C313.749,753.395,254.029,814.487,217.556,884.651C184.184,948.85,184.188,1022.743,217.108,1087.175C253.647,1158.69,312.454,1230.037,392.723,1227.493" fill="rgba(23, 108, 32, 1)" class="triangle-float3"></path>
                            <path d="M371.524,247.666C418.51,249.67,470.355,244.839,496.252,205.582C524.234,163.164,519.012,107.091,493.093,63.382C467.698,20.557,421.31,-4.188,371.524,-4.752C320.684,-5.327,269.135,15.775,245.092,60.574C222.047,103.515,236.673,155.293,263.96,195.672C287.859,231.037,328.88,245.847,371.524,247.666" fill="rgba(23, 108, 32, 1)" class="triangle-float2"></path>
                            <path d="M1839.176,1014.467C1894.91,1011.899,1951.342,994.957,1980.082,947.136C2009.603,898.016,2002.732,837.479,1976.016,786.779C1947.08,731.867,1901.135,683.432,1839.176,679.736C1771.283,675.686,1705.245,709.925,1670.799,768.571C1635.931,827.934,1634.929,904.444,1673.826,961.249C1708.888,1012.453,1777.184,1017.324,1839.176,1014.467" fill="rgba(23, 108, 32, 1)" class="triangle-float3"></path>
                            <path d="M799.748,202.057C845.351,202.689,881.425,169.313,905.527,130.595C931.462,88.932,953.148,37.626,928.534,-4.831C903.967,-47.209,848.681,-54.102,799.748,-51.87C755.402,-49.847,711.553,-32.652,689.823,6.058C668.484,44.07,677.6,89.713,698.924,127.734C720.814,166.765,755.002,201.437,799.748,202.057" fill="rgba(23, 108, 32, 1)" class="triangle-float1"></path>
                        </g>
                        <defs>
                            <mask id="SvgjsMask1331">
                                <rect width="1920" height="1080" fill="#ffffff"></rect>
                            </mask>

                        </defs>
                    </svg>
                    <!--
                    <svg viewBox="0 0 1108 632" aria-hidden="true" class="absolute top-10 left-[calc(50%-4rem)] -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]">
                        <path fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)" fill-opacity=".2" d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z" />
                        <defs>
                            <linearGradient id="175c433f-44f6-4d59-93f0-c5c51ad5566d" x1="1220.59" x2="-85.053" y1="432.766" y2="638.714" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#4F46E5" />
                                <stop offset="1" stop-color="#80CAFF" />
                            </linearGradient>
                        </defs>
                    </svg>
                    -->
                    <div class="ml-32 max-w-7xl flex content-center flex-wrap ">
                        <div class="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl font-hanson">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="50 0 2300 500" class="">
                                <title>Visit Site Link</title>
                                <defs>
                                    <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle">
                                        <animateTransform
                                            attributeName="transform"
                                            begin="0s"
                                            dur="30s"
                                            type="rotate"
                                            from="0 250 250"
                                            to="360 250 250"
                                            repeatCount="indefinite"
                                        />
                                    </path>
                                </defs>
                                <text dy="70" textLength="1220">
                                    <textPath xlink:href="#textcircle">PLS ? • PLS ? • PLS ? •</textPath>
                                </text>
                            </svg>
                            <h1 class="mt-10 text-4xl font-bold tracking-tight text-white sm:text-8xl font-hanson">PLS <span class="text-green-600">?</span></h1>
                            <p class="mt-6 text-2xl leading-8 text-gray-300">Si t'a une question, demande à PLS y va t'diiiiiire</p>
                        </div>
                        <div class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
                            <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">

                            </div>
                        </div>
                    </div>
                </div>

                <!-- Logo cloud -->
                <div class="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
                    <h2 class="text-center text-lg font-semibold leading-8 text-white">The world’s most innovative companies use our app</h2>
                    <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" width="158" height="48" />
                        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Reform" width="158" height="48" />
                        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" width="158" height="48" />
                        <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal" width="158" height="48" />
                        <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg" alt="Statamic" width="158" height="48" />
                    </div>
                </div>

                <!-- Feature section -->
                <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
                    <div class="mx-auto max-w-2xl text-center">
                        <h2 class="text-base font-semibold leading-7 text-indigo-400">Deploy faster</h2>
                        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Everything you need to deploy your app</p>
                        <p class="mt-6 text-lg leading-8 text-gray-300">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
                    </div>
                    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            <div v-for="feature in primaryFeatures" :key="feature.name" class="flex flex-col">
                                <dt class="text-base font-semibold leading-7 text-white">
                                    <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                                        <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {{ feature.name }}
                                </dt>
                                <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                    <p class="flex-auto">{{ feature.description }}</p>
                                    <p class="mt-6">
                                        <a :href="feature.href" class="text-sm font-semibold leading-6 text-indigo-400">Learn more <span aria-hidden="true">→</span></a>
                                    </p>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>

                <!-- Feature section -->
                <div class="mt-32 sm:mt-56">
                    <div class="mx-auto max-w-7xl px-6 lg:px-8">
                        <div class="mx-auto max-w-2xl sm:text-center">
                            <h2 class="text-base font-semibold leading-7 text-indigo-400">Everything you need</h2>
                            <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">No server? No problem.</p>
                            <p class="mt-6 text-lg leading-8 text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.</p>
                        </div>
                    </div>
                    <div class="relative overflow-hidden pt-16">
                        <div class="mx-auto max-w-7xl px-6 lg:px-8">
                            <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="App screenshot" class="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10" width="2432" height="1442" />
                            <div class="relative" aria-hidden="true">
                                <div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
                            </div>
                        </div>
                    </div>
                    <div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                        <dl class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                            <div v-for="feature in secondaryFeatures" :key="feature.name" class="relative pl-9">
                                <dt class="inline font-semibold text-white">
                                    <component :is="feature.icon" class="absolute top-1 left-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                                    {{ feature.name }}
                                </dt>
                                {{ ' ' }}
                                <dd class="inline">{{ feature.description }}</dd>
                            </div>
                        </dl>
                    </div>
                </div>

                <!-- Stats -->
                <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
                    <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                        <h2 class="text-base font-semibold leading-8 text-indigo-400">Our track record</h2>
                        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Trusted by thousands of developers&nbsp;worldwide</p>
                        <p class="mt-6 text-lg leading-8 text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                    </div>
                    <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                        <div v-for="stat in stats" :key="stat.id" class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
                            <dt class="text-sm leading-6">{{ stat.name }}</dt>
                            <dd class="order-first text-3xl font-semibold tracking-tight">{{ stat.value }}</dd>
                        </div>
                    </dl>
                </div>

                <!-- CTA section -->
                <div class="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
                    <svg class="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
                        <defs>
                            <pattern id="1d4240dd-898f-445f-932d-e2872fd12de3" width="200" height="200" x="50%" y="0" patternUnits="userSpaceOnUse">
                                <path d="M.5 200V.5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y="0" class="overflow-visible fill-gray-800/20">
                            <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
                        </svg>
                        <rect width="100%" height="100%" stroke-width="0" fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)" />
                    </svg>
                    <div class="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl">
                        <svg viewBox="0 0 1108 632" aria-hidden="true" class="w-[69.25rem] flex-none">
                            <path fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)" fill-opacity=".2" d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z" />
                            <defs>
                                <linearGradient id="175c433f-44f6-4d59-93f0-c5c51ad5566d" x1="1220.59" x2="-85.053" y1="432.766" y2="638.714" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#4F46E5" />
                                    <stop offset="1" stop-color="#80CAFF" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div class="mx-auto max-w-2xl text-center">
                        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Boost your productivity.<br />Start using our app today.</h2>
                        <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
                        <div class="mt-10 flex items-center justify-center gap-x-6">
                            <a href="#" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get started</a>
                            <a href="#" class="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
                        </div>
                    </div>
                </div>
            </main>

            <!-- Footer -->
            <footer aria-labelledby="footer-heading" class="relative">
                <h2 id="footer-heading" class="sr-only">Footer</h2>
                <div class="mx-auto max-w-7xl px-6 pb-8 pt-4 lg:px-8">
                    <div class="border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
                        <div class="flex space-x-6 md:order-2">
                            <a v-for="item in footerNavigation.social" :key="item.name" :href="item.href" class="text-gray-500 hover:text-gray-400">
                                <span class="sr-only">{{ item.name }}</span>
                                <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                            </a>
                        </div>
                        <p class="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">&copy; 2023 PLS, Inc. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
</template>

<script setup>
import { defineComponent, h } from 'vue'
import {
    ArrowPathIcon,
    ChevronRightIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
} from '@heroicons/vue/20/solid'
import { BoltIcon, CalendarDaysIcon, UsersIcon } from '@heroicons/vue/24/outline'

const primaryFeatures = [
    {
        name: 'Server monitoring',
        description:
            'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
        href: '#',
        icon: BoltIcon,
    },
    {
        name: 'Collaborate',
        description:
            'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.',
        href: '#',
        icon: UsersIcon,
    },
    {
        name: 'Task scheduling',
        description:
            'Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.',
        href: '#',
        icon: CalendarDaysIcon,
    },
]
const secondaryFeatures = [
    {
        name: 'Push to deploy.',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
    },
    {
        name: 'Simple queues.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Advanced security.',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
        icon: FingerPrintIcon,
    },
    {
        name: 'Powerful API.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: Cog6ToothIcon,
    },
    {
        name: 'Database backups.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ',
        icon: ServerIcon,
    },
]
const stats = [
    { id: 1, name: 'Developers on the platform', value: '8,000+' },
    { id: 2, name: 'Daily requests', value: '900m+' },
    { id: 3, name: 'Uptime guarantee', value: '99.9%' },
    { id: 4, name: 'Projects deployed', value: '12m' },
]
const footerNavigation = {
    solutions: [
        { name: 'Hosting', href: '#' },
        { name: 'Data Services', href: '#' },
        { name: 'Uptime Monitoring', href: '#' },
        { name: 'Enterprise Services', href: '#' },
    ],
    support: [
        { name: 'Pricing', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'API Reference', href: '#' },
    ],
    company: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Partners', href: '#' },
    ],
    legal: [
        { name: 'Claim', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            'fill-rule': 'evenodd',
                            d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                            'clip-rule': 'evenodd',
                        }),
                    ]),
            }),
        },
        {
            name: 'Instagram',
            href: '#',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            'fill-rule': 'evenodd',
                            d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                            'clip-rule': 'evenodd',
                        }),
                    ]),
            }),
        },
        {
            name: 'Twitter',
            href: '#',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
                        }),
                    ]),
            }),
        },
        {
            name: 'GitHub',
            href: '#',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            'fill-rule': 'evenodd',
                            d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
                            'clip-rule': 'evenodd',
                        }),
                    ]),
            }),
        }
    ],
}
</script>

<script>
export default {
    name: "Accueil.vue"
}
</script>

<style scoped>

@keyframes float1 {
    0%{transform: translate(0, 0)}
    50%{transform: translate(-30px, 0)}
    100%{transform: translate(0, 0)}
}

.triangle-float1 {
    animation: float1 10s infinite;
}

@keyframes float2 {
    0%{transform: translate(0, 0)}
    50%{transform: translate(-10px, -10px)}
    100%{transform: translate(0, 0)}
}

.triangle-float2 {
    animation: float2 8s infinite;
}

@keyframes float3 {
    0%{transform: translate(0, 0)}
    50%{transform: translate(0, -20px)}
    100%{transform: translate(0, 0)}
}

.triangle-float3 {
    animation: float3 12s infinite;
}

svg textPath {
    font-size: 60px;
    font-family:  Hanson;
    text-transform: uppercase;
    letter-spacing: 20px;
    fill: #22ba26;
    background: rgba(255, 255, 255, 0);
}




</style>
