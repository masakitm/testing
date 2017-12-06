<template>
  <div id="app">
    <graph />
  </div>
</template>

<script>
import graph from './components/graph'

export default {
  name: 'app',
  components: {
    graph
  }
}
</script>

<style>
html,body{
  overflow: hidden;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.slide-enter-active, .slide-leave-active {
  transition: opacity .2s
}
.slide-enter, .slide-leave-to {
  opacity: 0
}

.caption-enter-active,
.caption-leave-active{
  transition: opacity .5s;
}
.caption-enter, .caption-leave-to {
  opacity: 0
}

</style>
