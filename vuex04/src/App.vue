<template>
  <div id="app">
    <VuexApp />
  </div>
</template>

<script>
import VuexApp from './components/VuexApp'

export default {
  name: 'app',
  components: {
    VuexApp
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
