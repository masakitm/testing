<template>
  <div class="hello">
    <div class="">
      {{ asdf }}
    </div>
    <div class="">
      Store
      {{ count }}
      <button type="button" name="button" @click="increment()">+</button>
      <button type="button" name="button" @click="decrement()">-</button>
    </div>
    <Counter />
  </div>
</template>

<script>
import Vue from 'vue'
// import from 'vuex'
import Vuex, { mapState } from 'vuex'
import Counter from './Counter.vue'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
})

export default {
  name: 'vuex-study',
  computed: {
    asdf () {
      return 'asdf'
    },
    ...mapState([
      'count'
    ])
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  },
  store,
  components: {
    Counter
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
