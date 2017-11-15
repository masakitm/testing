import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  formula: '',
  buttons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/'],
  addedValType: ''
}

const mutations = {
  addFormula (state, val) {
    state.formula += val
  },
  clearFormula (state) {
    state.formula = ''
  },
  calcFormula (state) {
    state.formula = eval(state.formula)
  }
}

const actions = {
  pushFormula: ({ commit, val }) => commit('addFormula', val),
  clearFormula: ({ commit }) => commit('clearFormula'),
  calcFormula: ({ commit }) => commit('calcFormula')
}

const getters = {
  formula: state => state.formula,
  buttons: state => state.buttons
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
