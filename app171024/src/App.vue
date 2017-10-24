<template>
  <div id="app">
		<textarea name="name" rows="8" cols="80" v-model="inputTxt"></textarea>
		<div class="texts">
			<div class="texts__single">
				{{ this.inputTxt }}
			</div>

			<div class="texts__single" v-if="this.inputTxt">
				{{ this.reverseStr() }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      inputTxt: ''
    }
  },
  methods: {
    reverseStr: function () {
      var str = this.inputTxt
      return str.split('').reverse().join('')
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
