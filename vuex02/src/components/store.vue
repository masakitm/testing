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
