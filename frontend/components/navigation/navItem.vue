<template>
    <li class="nav-item w-100 p-1 me-1 mb-1">
        <router-link :to="{name: item.routeName}" class="d-flex" @click="drop = !drop">
            <feather-icon :type="(item.icon ? item.icon : 'user')" size="24" class="nav-icon"></feather-icon>
            <p class="m-0 ms-1 me-auto">
                {{ item.title }}
            </p>
            <feather-icon :type="drop ? 'chevron-down' : 'chevron-right'" size="24" v-if="!item.routeName && item.children"></feather-icon>
        </router-link>
        <ul class="list-unstyled ms-3 mt-1" v-if="!item.routeName && item.children && drop">
            <nav-item v-for="(child, index) in item.children" :key="index" :item="child" dropped></nav-item>
        </ul>
    </li>
</template>

<script>
export default {
    name: "navItem",
    props: {
        item: {
            type: Object,
            required: true,
        },
        dropped: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            drop: false
        }
    },
}
</script>

<style scoped>

</style>