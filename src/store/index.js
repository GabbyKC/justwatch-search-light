import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        results: null
    },
    getters: {
        getResults: (state) => {
            return state.results
        }
    },
    mutations: {
        SET_RESULTS(state, results) {
            state.results = results;
        }
    },
    actions: {
        FETCH_RESULTS({commit}, queryString) {
            return axios.get(`https://apis.justwatch.com/content/titles/en_US/popular?body={"page_size":15,"page":1,"query":"${queryString}","content_types":["movie"]}`)
                .then((response) => {
                    commit("SET_RESULTS", response.data.items)
                })
                .catch(error => {
                    console.log("something went wrong :(", error)
                })
        }
    },
    modules: {},
});
