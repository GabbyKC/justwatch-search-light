<template>
    <section class="container">
        <div class="background">
            <h1>Search Light</h1>
        </div>
        <div class="input-container">
            <label>
                <input type="search" placeholder="Search for a movie..." @input="handleInput($event.target.value)"/>
            </label>
        </div>
        <ul>
            <li v-for="(item, index) in results" :key="index">{{ item.title }} - <span>{{ item.original_release_year }}</span></li>
        </ul>
    </section>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "SearchLight",
        methods: {
            handleInput(query) {
                if (query === "") {
                    this.$store.state.results = null
                } else {
                    this.$store.dispatch("FETCH_RESULTS", query);
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
        margin: 0 0.5rem;
    }
    .background {
        background: url("../assets/logo.jpg") center no-repeat;
        height: 30rem;
        display: flex;
        text-align: center;
        filter: grayscale(50%);
    }

    h1 {
        font-family: 'Permanent Marker', cursive;
        text-transform: uppercase;
        font-size: 3.5rem;
        color: white;
        width: 100%;
        letter-spacing: .75rem;
    }

    .input-container {
        margin: 1.5rem 0;
    }

    .input-container input {
        width: 100%;
        height: 3rem;
        padding: .5rem;
        border: 2px solid #154e3b;
        font-size: 1.25rem;
    }

    .input-container input:focus {
        outline: none;
        border: 3px solid #258666;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
       font-size: 1.25rem;
        border-bottom: 1px solid gray;
        padding: .5rem;
        margin-bottom: .5rem;
    }

    @media (min-width: 600px) {
        .container {
            width: 80%;
            max-width: 800px;
            margin: 0 auto;
        }

        .background {
            border-radius: 10px;
        }

        .input-container input {
            border-radius: 10px;
        }

        ul {
            width: 70%;
            text-align: center;
            margin: auto;
        }
    }
</style>
