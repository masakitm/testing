<template>
  <div class="hello">
    <div class="">
      {{ doneTodoCount }}
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
import Vuex, { mapState } from 'vuex'
import Counter from './Counter.vue'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: 'todo01', done: true },
      { id: 2, text: 'todo02', done: false }
    ]
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
})

export default {
  name: 'vuex-study',
  computed: {
    doneTodoCount () {
      return store.getters.doneTodos.length
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
