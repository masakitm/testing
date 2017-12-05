<template>
  <div class="listWrap">
    <ul class="list">
      <li class="list__single" v-for="(item, index) in $store.state.appListData">
        <p>
          <a :href="item.url" target="_blank">
            <img :src="getThumbs(item.url)" alt="">
            {{ item.title }}
          </a>
        </p>
        <p>
          <a :href="item.src">src</a>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
var apiUrl = "https://s.wordpress.com/mshots/v1/"

export default {
  methods:{
    getThumbs:function(siteUrl){
      var thumbSrc = apiUrl + siteUrl +"?w=480.jpg"
      return thumbSrc
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
