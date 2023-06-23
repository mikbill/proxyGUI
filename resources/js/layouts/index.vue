<template>
    <div class="wrapper border border-5 border-danger">
        <navbar></navbar>

        <ul>
            <li>app mount: resources/views/app.blade.php</li>
            <li>init: resources/js/app.js</li>
            <li>file: resources/js/layouts/index.vue</li>
        </ul>

        <router-view></router-view>
    </div>

</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import navbarComponent from "./navbar";

export default {
    name: "index",
    components: {
        'navbar': navbarComponent,
    },
}
</script>

<style scoped>

</style>
