import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  currentTitle: '',
  currentText: '',
  memo: [
    {
      title: '',
      memo: ''
    }
  ]
}

const mutations = {
  currentTitle (state) {

  }
}

export default new Vue.Store({
  state
})
