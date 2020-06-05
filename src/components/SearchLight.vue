<template>
  <section class="container">
    <div class="background">
      <h1>Search Light</h1>
    </div>
    <div>
      <input type="search" placeholder="Movie Title..." v-model="searchTerm" />
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
  data() {
    return {
      searchTerm: ""
    }
  },
  created() {
    this.$store.dispatch("FETCH_RESULTS");
  },
  computed: {
    ...mapGetters(["getResults"]),
    results() {
      const results = this.$store.getters.getResults;
      if (this.searchTerm === "") {
        return null
      } else {
        const searchTermLower = this.searchTerm.toLowerCase();
        return results.filter(movie => {
          return movie.title.toLowerCase().includes(searchTermLower);
        });
      }
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
