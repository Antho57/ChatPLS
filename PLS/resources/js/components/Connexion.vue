<template>
    <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-900">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <a href="/"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-900 0 2300 500" class="">
                <title>PLS ?</title>
                <defs>
                    <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle">
                        <animateTransform
                            attributeName="transform"
                            begin="0s"
                            dur="3s"
                            type="rotate"
                            from="360 250 250"
                            to="0 250 250"
                            repeatCount="indefinite"
                        />
                    </path>
                </defs>
                <text dy="70" textLength="1220" id="textcircle">
                    <textPath xlink:href="#textcircle">PLS ? • PLS ? • PLS ? •</textPath>
                </text>
            </svg></a>
            <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-white">Connexion</h2>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md sm:rounded-3xl">
            <div class="bg-gray-900 py-8 px-4 shadow sm:rounded-3xl sm:px-10" style="box-shadow: 0px 0px 40px 0px #22c55e;">
                <form class="space-y-6" action="#" method="POST">
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-white">Email</label>
                        <div class="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <label for="password" class="block text-sm font-medium leading-6 text-white">Mot de passe</label>
                        <div class="mt-2">
                            <input id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" class="flex w-full justify-center rounded-md bg-green-500 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500">Connexion</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "Connexion"
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

#textcircle {
    animation: rotateInfinity 40s linear infinite;
    transform-origin: 50% 50%;
    transform-box: fill-box;
    transform: rotate(0deg);
}

</style>
