<template>
  <div id="app2">
    {{ this.appData.message }}
    asdfasd
  </div>
</template>

<script>
import data from './data.json'

export default {
  name: 'app2',
  data: function () {
    return {
      appData: data
    }
  }
}
</script>

<style>
#app2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
