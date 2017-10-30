<template>
  <div class="postsWrap">
    <div class="postsWrap__single" v-for="item in items" v-show="items.length">
      <div class="postImg">
        <div>
          <a :href="item.id" target="_blank">
            <img :src="item.preview_file_url">
          </a>
        </div>
      </div>

      <div class="postChainer">
        <div class="postChainer__single" v-show="item.tag_string_character" @click="emitTag(item.tag_string_character)">
          he / she!
        </div>
        <div class="postChainer__single" v-show="item.tag_string_artist" @click="emitTag(item.tag_string_artist)">
          this artist!
        </div>
        <div class="postChainer__single" v-show="item.tag_string_copyright" @click="emitTag(item.tag_string_copyright)">
          this copyright!
        </div>
      </div>
    </div>

    <div class="notFound" v-show="!isFirstView && !items.length">
      そんなもの ウチにはないよ…
    </div>
  </div>
</template>

<script>
  export default {
    name: 'postContainer',
    props: {
      items: [Array, String],
      firstView: Boolean,
      danbooru: String
    },
    data: function () {
      return {
        isFirstView: this.firstView
      }
    },
    methods: {
      emitTag: function (str) {
        this.$emit('tag-from-child', str)
      }
    }
  }
</script>
