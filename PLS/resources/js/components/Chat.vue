<template>
    <div class="flex">
        <SideBar class="w-1/6 h-full"/>
        <Discussion class="w-5/6"></Discussion>
    </div>
</template>

<script>
import SideBar from "./SideBar.vue";
import Discussion from "./Discussion.vue";
export default {
    name: "Chat",
    components: {
        SideBar,
        Discussion
    }
}
</script>

<style scoped>

</style>
