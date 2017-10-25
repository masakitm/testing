<template>
  <div id="app">
    <parent></parent>
  </div>
</template>

<script>
import Vue from 'vue'

Vue.component('parent', {
  props: ['model'],
  template: '<div> This is parent - <input v-model="text"><child :msg="text"></child></div>',
  data: function () {
    return {
      styles: { style: 'font-size:20px', class: 'this_is_parent' },
      text: ''
    }
  }
})

Vue.component('child', {
  props: ['msg'],
  template: '<div>This is child - {{ msg }}</div>'
})

Vue.component('child2', {
  props: ['size'],
  computed: {
    normalizedSize: function () {
      return this.size.trim().toLowerCase()
    }
  },
  template: '<div>This is child2 - {{ normalizedSize }}</div>'
})

export default {
  name: 'app',
  data: function () {
    return {
      text: ''
    }
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
