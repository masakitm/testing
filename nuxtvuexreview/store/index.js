import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    addItem (state, item) {
      const itemObj = {
        name: item.name,
        point: item.value,
        text: item.text
      }
      this.state.items.push(itemObj)
    },
    removeItem (state, index) {
      this.state.items.splice(index, 1)
    }
  },
  actions: {
    addItem: ({ commit }, text, val) => commit('addItem', text, val),
    removeItem: ({ commit }, index) => commit('removeItem', index)
  }
})

export default store
