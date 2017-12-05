<template>
  <div id="app">
    <InputBox />
    <MainPart />
  </div>
</template>

<script>
import MainPart from './components/MainPart'
import InputBox from './components/InputBox'

export default {
  name: 'app',
  components: {
    MainPart,
    InputBox
  }
}
</script>

<style>
html,body{
  background-color: #e8e8e8;
}

*{
  background: #fff;
  margin: 0;
  padding: 0;
  list-style: none;
  border: none;
}

input{
  width: 100%;
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
