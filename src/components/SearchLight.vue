<template>
  <section class="container">
    <div class="background">
      <h1>Search Light</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: "SearchLight"
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
