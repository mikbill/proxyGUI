<template>
    <div class="border border-5 border-primary">
        <h3>Router links</h3>

        <ul>
            <li>init: resources/js/layouts/index.vue</li>
            <li>file: resources/js/layouts/navbar.vue</li>
        </ul>

        <div class="row mt-md-3">
            <div class="col">
                <router-link exact :to="{ name: 'index' }" class="nav-link" href="#" role="button">
                    <button type="button" class="btn btn-outline-primary">Main</button>
                </router-link>
            </div>

            <div class="col">
                <router-link exact :to="{ name: 'other' }" class="nav-link" href="#" role="button">
                    <button type="button" class="btn btn-outline-primary">Other</button>
                </router-link>
            </div>

            <div class="col">
                <a href="/404">
                    <button type="button" class="btn btn-outline-primary">404 Link</button>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "navbar"
}
</script>

<style scoped>

</style>
