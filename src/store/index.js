import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuCollapse: false,
  },
  mutations: {
    CHANGE_COLLAPSE_STATUS(state) {
      state.menuCollapse = !state.menuCollapse
    }
  },
  actions: {
    toggleCollapse({commit}) {
      commit('CHANGE_COLLAPSE_STATUS')
    }
  },
  modules: {

  }
})
