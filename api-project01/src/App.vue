<template>
  <div id="app">
    <Apps/>
  </div>
</template>

<script>
import Apps from './components/Apps'

export default {
  name: 'app',
  components: {
    Apps
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
