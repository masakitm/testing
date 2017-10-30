<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="">
      <p>
        date：<input type="text" @keymap.enter="getPosts()" v-model="date">　
        keyword：<input type="text" @keymap.enter="getPosts()" v-model="keyword">
      </p>
      <p>
        <button @click="getPosts"></button>
      </p>
      <p>
        query ： {{ date }} {{ keyword }}
      </p>
      <div class="resultsWrap">

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const connpassApi = 'https://connpass.com/api/v1/event/'

export default {
  name: 'Apps',
  data () {
    return {
      msg: 'Connpass検索',
      keyword: 'vue.js',
      date: '',
      apiJson: []
    }
  },
  mounted: function () {
    this.getToday()
    this.getPosts()
  },
  methods: {
    getToday: function () {
      var today = new Date()
      var year = today.getFullYear()
      var month = today.getMonth() + 1
      var week = today.getDay()
      this.date = year + '' + month + '' + week
    },
    getPosts: function () {
      let queryDate = ''
      let queryKeyword = ''

      if (this.date) {
        queryDate = 'ymd=' + this.date
      }

      if (this.keyword) {
        queryKeyword = 'keyword=' + this.keyword

        if (this.date && this.keyword) {
          queryKeyword = '&' + 'keyword=' + this.keyword
        }
      }

      let reqUrl = connpassApi + '?' + queryDate + queryKeyword

      axios.get(reqUrl)
        .then(response => {
          this.apiJson = response.data
          console.log(this.apiJson)
        }).catch(error => { console.log(error) })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
