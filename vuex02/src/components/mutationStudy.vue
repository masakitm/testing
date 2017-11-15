<template>
  <div class="hello">
    <input type="text" name="" value="" v-model="num">
    <Counter />
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import Counter from './Counter.vue'
import mutations from './mutations.vue'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state, payload) {
      state.count += payload.amount
    }
  }
})

export default {
  name: 'HelloWorld',
  data: function () {
    return {
      num: 0
    }
  },
  store,
  components: {
    Counter,
    mutations
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
