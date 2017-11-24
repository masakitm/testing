<template>
  <div id="app">
    <mainPart />
  </div>
</template>

<script>
import MainPart from './components/MainPart'

export default {
  name: 'app',
  components: {
    MainPart
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
