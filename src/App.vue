<template>
  <main id="app">
    <SearchLight />
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

#app {
  font-family: Geneva, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 80%;
  margin: 2.5rem auto;
  color: #154e3b;
}
</style>
