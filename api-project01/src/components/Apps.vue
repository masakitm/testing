<template>
  <div>
    <Loading :loading="this.loading"></Loading>

    <h1>{{ msg }}</h1>
    <div class="">
      <p>
        <input type="text" @keymap.enter="getPosts(conpassApiUrl)" v-model="keyword">
      </p>
      <p>
        <button @click="getPosts(conpassApiUrl)">さがす</button>
      </p>
      <div class="resultsWrap">
        <div class="resultsWrap__single" v-for="(item, index) in jsonData">
          <div class="date">
            {{ item.started_at }}.
          </div>

          <div class="title">
            <a :href="item.event_url" target="_blank">
              {{ item.title }}
            </a>
          </div>

          <div class="address">
            {{ item.address }}
          </div>

          <div class="">
            <img class="mapImg" :src="item.gmapSrc" alt="">
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueJsonp from 'vue-jsonp'
import Loading from './Loading'
Vue.use(VueJsonp)

export default {
  name: 'Apps',
  data () {
    return {
      msg: 'Connpass API検索',
      conpassApiUrl: 'https://connpass.com/api/v1/event/',
      keyword: 'vue.js',
      googleApiUrl: 'https://maps.googleapis.com/maps/api/staticmap',
      googleApiKey: 'AIzaSyBvMTD_s_4107jBVh-ouuaTs0FE1IlDxVU',
      jsonData: '',
      loading: true
    }
  },
  mounted: function () {
    this.getPosts(this.conpassApiUrl)
  },
  methods: {
    getPosts (url) {
      const _this = this
      this.loading = true
      this.$jsonp(url, { keyword: this.keyword, count: 48 }).then(json => {
        // Success.
        this.loading = false
        this.jsonData = json.events
        this.jsonData.map(function (value) {
          value['started_at'] = value['started_at'].substring(0, value['started_at'].indexOf('T'))
          value['gmapSrc'] = _this.googleApiUrl + '?key=' + _this.googleApiKey + '&size=480x320&maptype=roadmap' + '&center=' + value['address'] + '&markers=color:red%7C' + value['lat'] + ',' + value['lon']
          return value
        })
      }).catch(err => {
        // Failed.
        console.log(err)
      })
    }
  },
  components: {
    Loading
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
html,body{
  font-size:12px;
}

*{
  box-sizing: border-box;
}

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

.resultsWrap{
  display:flex;
  flex-wrap:wrap;
  justify-content: space-around;

  &__single{
    position:relative;
    width:24%;
    padding:2rem 1.5rem;
    border:1px solid #ddd;
    margin:1rem auto;

    .mapImg{
      width: 100%;
      height: auto;
    }

    .title{
      margin-bottom: 1rem;
    }

    .date{
      margin-bottom:1rem;
    }

    .address{
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
  }
}
</style>
