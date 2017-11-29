<template>
  <div id="app">
    <MainContents />
  </div>
</template>

<script>
import MainContents from './components/MainContents'

export default {
  name: 'app',
  components: {
    MainContents
  }
}
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css';
html,body{
  font-size: 15px;
  overflow: hidden;
}
*{
  font-size: inherit;
}
</style>
