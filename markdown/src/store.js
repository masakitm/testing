import Vue from 'vue'
import Vuex from 'vuex'
import Marked from 'marked'

Vue.use(Vuex)

const state = {
  inputText: ''
}

const mutations = {
  inputingText (state, payload) {
    state.inputText = payload
  }
}

const getters = {
  parsedText: state => {
    return Marked(state.inputText)
  }
}

const actions = {
  inputtingText: ({ commit }, string) => commit('inputingText', string)
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
