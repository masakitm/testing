<template>
  <div class="">
    <div class="">
      <img :src="largeImgSrc" alt="">
    </div>
    <div class="thumbs">
      <div class="thumbs__single" v-for="item in imgSrc">
        <img :src="item.src" alt="">
      </div>
    </div>
  </div>
</template>

<script>
var obj = require('./list.json')

export default {
  name: 'MainComponent',
  data () {
    return {
      largeImgSrc () { return this.imgSrc[0].src },
      imgSrc: obj.imgs
    }
  }
}
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}

html,body{
  font-size: 13px;
  text-align: center;
}

.thumbs{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &__single{
    width: 8vw;
    margin: 0 1px;
  }
}

img{
  max-width: 100%;
  height: auto;
}
</style>
