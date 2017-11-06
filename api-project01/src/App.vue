<template>
  <div id="app">

    <Apps />
    <Footer />

  </div>
</template>

<script>
import Apps from './components/Apps'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Apps,
    Footer
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
