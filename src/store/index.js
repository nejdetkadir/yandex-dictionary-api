import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    languages: [],
    result: {
      searchedText: null,
      means: []
    }
  },
  getters: {
    getLanguages(state) {
      return state.languages.reverse();
    },
    getResult(state) {
      return state.result;
    }
  },
  mutations: {
    updateResult(state, result) {
      state.result = {
        searchedText: null,
        means: []
      }

      if (result.length === 0) {
        state.result.searchedText = 'No results found for your searched text'
      } else {
        state.result.searchedText = result[0].text;
        for (let id in result[0].tr) {
          state.result.means.push({
            mean: result[0].tr[id].text,
            type: result[0].tr[id].pos
          });
        }
      }
    }
  },
  actions: {
    getLanguagesFromAPI({state}) {
      Vue.axios.get(`${process.env.VUE_APP_YANDEX_API_BASE_URL}getLangs?key=${process.env.VUE_APP_YANDEX_API_KEY}`)
        .then((response) => {
          state.languages = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    searchText({commit}, data) {
      Vue.axios.get(`${process.env.VUE_APP_YANDEX_API_BASE_URL}lookup?key=${process.env.VUE_APP_YANDEX_API_KEY}&lang=${data.lang.trim()}&text=${data.text.trim().split(" ")[0]}`)
        .then((response) => {
          commit("updateResult", response.data.def);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  modules: {}
});
