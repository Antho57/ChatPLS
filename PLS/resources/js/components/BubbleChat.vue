<template>
    <div class="flex"
        :class="isUser ? 'justify-end' : 'justify-start'"
    >
        <div
            class="py-3 px-4 text-white shadow-md mb-4 max-w-2xl relative z-10 overflow-hidden flex flex-col text-left"
            :class="isUser ? 'bg-green-500 mr-2 rounded-bl-3xl rounded-tr-xl rounded-tl-3xl' : 'bg-gray-500 ml-2 rounded-br-3xl rounded-tl-xl rounded-tr-3xl'"
            v-html="message"
        >
        </div>
    </div>

</template>

<script>
export default {
    name: "BubbleChat",
    props: {
        message: {
            type: String,
            required: true
        },
        isUser: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style scoped>

</style>
