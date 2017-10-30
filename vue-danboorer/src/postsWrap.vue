<template>
  <div class="postsWrap">
    <div class="postsWrap__single" v-for="item in jsonData" v-show="jsonData.length">
      <div class="postImg">
        <div>
          <a :href="item.id" target="_blank">
            <img :src="item.preview_file_url">
          </a>
        </div>
      </div>

      <div class="postChainer">
        <div class="postChainer__single" v-show="item.tag_string_character" @click="tagsCheck(item.tag_string_character)">
          he / she!
        </div>
        <div class="postChainer__single" v-show="item.tag_string_artist" @click="tagsCheck(item.tag_string_artist)">
          this artist!
        </div>
        <div class="postChainer__single" v-show="item.tag_string_copyright" @click="tagsCheck(item.tag_string_copyright)">
          this copyright!
        </div>
      </div>
    </div>

    <div class="notFound" v-else-show="!firstView && !jsonData.length">
      <img src="for_study/img/notfound.jpg" alt="そんなもの ウチにはないよ…">
    </div>
  </div>
</template>

<script>
  export default{
    name: 'postsWrap'
  }
</script>
