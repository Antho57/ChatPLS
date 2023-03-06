<template>
    <div class="w-5/6 px-5 flex flex-col bg-gray-900">
        <div class="flex flex-col mt-5 overflow-scroll h-[87vh]" style="box-shadow: inset 0px -21px 15px -26px #7171FF;">
            <BubbleChat :isUser="true" message="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis, reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis, reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis, reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis, reiciendis!"/>
            <BubbleChat :isUser="false" message="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis, reiciendis!"/>
            <BubbleChat :isUser="true" message="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis, reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis, reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis, reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis, reiciendis!"/>
            <BubbleChat :isUser="false" message="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis, reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis, reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis, reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis, reiciendis!"/>
            <BubbleChat :isUser="true" message="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis, reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis, reiciendis!"/>
            <BubbleChat :isUser="false" message="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis, reiciendis!"/>
        </div>
        <div class="py-5 justify-center flex bg-gray-900">
            <input
                class="w-[95%] bg-gray-700 py-3 px-3 rounded-xl leading-tight focus:outline-none focus:shadow-outline border-2 border-gray-600 focus:border-green-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:border-green-500 hover:bg-gray-700 text-gray-200 hover:shadow-xl focus:ring-0"
                type="text"
                placeholder="Ecrit ta question ici..."
            />
        </div>
    </div>
</template>

<script>
import BubbleChat from "./BubbleChat.vue";
export default {
    name: "discussion",
    components: {
        BubbleChat
    }
}
</script>

<style scoped>

</style>
