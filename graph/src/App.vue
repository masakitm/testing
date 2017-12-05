<template>
  <div id="app">
    <graph/>
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
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
