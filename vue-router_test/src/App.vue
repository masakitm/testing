<template>
  <div id="app">
    <!--
    <component01 />
    <component02 />
    <component03 />
    <component04 />
    -->
    <component03 />
  </div>
</template>

<script>
import component01 from './components/start'
import component02 from './components/reactive'
import component03 from './components/nest'
import component04 from './components/ProgramNav'

export default {
  name: 'app',
  components: {
    component01,
    component02,
    component03,
    component04
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
