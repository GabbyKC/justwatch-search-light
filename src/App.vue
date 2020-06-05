<template>
    <main id="app">
        <SearchLight/>
    </main>
</template>

<script>
    import SearchLight from "./components/SearchLight.vue";

    export default {
        name: "App",
        components: {
            SearchLight,
        },
    };
</script>

<style>
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
    }

    #app {
        font-family: Geneva, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #154e3b;
    }

    @media (min-width: 600px) {
        #app {
            width: 80%;
            margin: 2.5rem auto;
        }
    }
</style>
