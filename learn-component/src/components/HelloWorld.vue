<template>
  <div>
    <header class="header">
      <h1>{{ msg }}</h1>
      <form>
        <div class="btns">
          <button @click="addTodo()">ADD TASK</button>
          <button @click="removeTodo()">DELETE FINISHED TASKS</button>
        </div>

        <div class="inputs">
          <p>input: <input type="text" v-model="newTodo" placeholder="enter todos"></p>
        </div>
      </form>
    </header>

    <div class="task-list">
      <label class="task-list__item" v-for="todo in todos" :class="{ 'task-list__item--checked': todo.done }">
        <input type="checkbox" v-model="todo.editing">
        <input type="checkbox" v-model="todo.done">
        <input v-if="todo.editing" v-model="todo.text" @keyup.enter="todo.editing = !todo.editing">
        <span v-else>{{ todo.text }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Todo Management',
      todos: [
        {
          text: 'todos in here',
          done: false
        }
      ],
      newTodo: ''
    }
  },
  methods: {
    addTodo: function (event) {
      let text = this.newTodo && this.newTodo.trim()

      if (!text) {
        return
      }
      this.todos.push({
        text: text,
        done: false,
        editing: false
      })
      this.newTodo = ''
    },
    removeTodo: function (event) {
      for (let i = this.todos.length - 1; i >= 0; i--) {
        if (this.todos[i].done) this.todos.splice(i, 1)
      }
    }
  }
}
</script>


<style>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css');
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@mixin flex-vender() {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
}

.header{
  background: #eee;
  padding:60px 0 20px;
  margin-bottom: 30px;
}

h1{
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

*{
  transition: 0.1s;
}

.btns, .inputs{
  margin-bottom: 1rem;
}


.task-list {
  @include flex-vender;
  flex-direction: column;
  align-items: center;

  &__item{
    width: 50vw;
    text-align: left;
    line-height: 1.8;
    $element: #{&};

    &--checked{
      @extend #{$element};
      color: #87a6c6;
    }
  }
}
</style>
