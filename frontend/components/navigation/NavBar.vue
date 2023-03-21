<template>
    <ul class="list-unstyled w-100">
        <nav-item v-for="(item, index) in menu" :key="index" :item="item" class="w-100"></nav-item>
    </ul>
</template>

<script>
import navItem from "./navItem";
export default {
    name: "NavBar",
    components: {
        navItem
    },
    props: {
        menu: {
            type: Array,
            required: true
        }
    },
}
</script>

<style scoped>

</style>