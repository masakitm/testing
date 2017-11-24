<template>
  <div class="" @click="getData(apiUrl)">
    asdf
  </div>
</template>

<script>
import Vue from 'vue'
import VueJsonp from 'vue-jsonp'
// import Axios from 'axios'

// Vue.use(Axios)
Vue.use(VueJsonp)

export default {
  data () {
    return {
      apiUrl: 'https://map.yahooapis.jp/weather/V1/place?coordinates=139.732293,35.663613&appid=dj00aiZpPUNUYjYyNFdVdXJEeCZzPWNvbnN1bWVyc2VjcmV0Jng9YTc-&output=json',
      appId: 'dj00aiZpPUNUYjYyNFdVdXJEeCZzPWNvbnN1bWVyc2VjcmV0Jng9YTc-'
    }
  },
  methods: {
    getData (url) {
      this.$jsonp(url).then(json => {
        // Success.
        this.jsonData = json
      }).catch(error => {
        // Failed.
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
