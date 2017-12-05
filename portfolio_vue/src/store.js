import Vue from 'vue'
import Vuex from 'vuex'
let json = require('./appListData.json')

Vue.use(Vuex)

const state = {
  appListData: json.appListData
}

export default new Vuex.Store({
  state
})
