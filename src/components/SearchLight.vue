<template>
  <section class="container">
    <div class="background">
      <h1>Search Light</h1>
    </div>
    <div>
      <input type="search" placeholder="Movie Title..." @input="handleInput($event.target.value)" />
    </div>
    <ul v-for="(item, index) in results" :key="index">
      <li>{{ item.title }}</li>
    </ul>
  </section>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "SearchLight",
  methods: {
    handleInput(value) {
      if (value === "") {
        this.$store.state.results = null
      } else {
        this.$store.dispatch("FETCH_RESULTS", `${value}`);
      }
    }
  },
  computed: {
    ...mapGetters(["getResults"]),
    results() {
      return this.$store.getters.getResults;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
}

.background {
  background: url("../assets/logo.jpg") center no-repeat;
  height: 30rem;
  display: flex;
  text-align: center;
}

h1 {
  font-size: 2rem;
  color: white;
  width: 100%;
}
</style>
