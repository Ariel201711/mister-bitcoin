<template>
    <AppHeader />
    <AppMain />
    <AppFooter />
</template>

<script>
    import AppHeader from '@/components/AppHeader.vue'
    import AppMain from '@/components/AppMain.vue'
    import AppFooter from '@/components/AppFooter.vue'
    export default {
        components: {
            AppHeader,
            AppMain,
            AppFooter,
        }
    }
</script>

<style lang="scss">
.main-container{
    min-height: calc(90vh - 4em);
}
nav a.router-link-exact-active {
    color: #0008ff;
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    color: #000;
    text-decoration: none;
}

nav a:first-of-type {
    border: 0;
}

</style>

