<template>
  <div class="container">
    <h1>
      Google News
      <span
        class="categoryName"
        :category="$route.params.name"
      >
        {{ $route.params.name }}
      </span>
    </h1>
    <theCategoryNav />
    <div class="rssFeed">
      <div class="rssFeed__single" v-for="item in newsData">
        <a class="rssLink" :href="item.link[0]" target="_blank" :category-single="$route.params.name">
          <div class="rssCategory rssCategory--headline" :category="$route.params.name">
            {{ $route.params.name }}
          </div>
          {{ item.title[0] }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import theCategoryNav from '../../components/TheCategoryNav'

// const rssUrl = 'https://news.google.com/news/rss/headlines/section/topic/NATION.ja_jp/%E5%9B%BD%E5%86%85?ned=jp&hl=ja&gl=JP'
const rssUri = 'https://news.google.com/news/rss/headlines/section/topic/NATION.ja_jp/'
const rssUriTail = '?ned=jp&hl=ja&gl=JP'

export default {
  asyncData ({params}, callback) {
    // {params}.params.name は現在のカテゴリー名
    let url = rssUri + {params}.params.name + rssUriTail

    axios.get(url)
      .then((res) => {
        let parseString = require('xml2js').parseString
        let xml = res.data
        parseString(xml, (message, xmlres) => {
          callback(null, { newsData: xmlres.rss.channel[0].item })
        })
      })
      .catch((e) => {
        console.log('error')
      })
  },
  components: {
    theCategoryNav
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  text-align: center;
}
</style>
