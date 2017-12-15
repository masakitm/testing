<template>
  <div class="">
    <div class="inputs" :class="{ active: isActive }">
      <div class="">
        <input v-model="tempTitle" @click="toggleActive()">
      </div>
      <div v-if="isActive">
        <textarea rows="8" cols="80" v-model="tempText"></textarea><br>
        <button type="button" @click="pushArticle(), toggleActive()">完了</button>
      </div>
    </div>

    <div class="cards">
      <article v-for="(item, index) in article">
        <div class="article">
          <button class="article__close">☓</button>
          <div v-if="item.title" class="article__tit">{{ item.title }}</div>
          <div v-if="item.text" class="article__text">{{ item.text }}</div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainComponent',
  data () {
    return {
      isActive: false,
      tempTitle: '',
      tempText: '',
      article: []
    }
  },
  methods: {
    toggleActive () {
      this.isActive = !this.isActive
    },
    pushArticle () {
      if (this.tempTitle || this.tempText) {
        this.article.push({
          'title': this.tempTitle,
          'text': this.tempText
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
html,body{
  font-size: 13px;
}

.cards{
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  margin: 0 auto;

  & > *{
    width: 25vw;
    margin: 0 1rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25)
  }
}

.article{
  position: relative;
  text-align: left;
  padding: 1rem 1.5rem 2rem;

  &__tit{
    font-weight: bold;
    font-size: 1.1rem;
    border-bottom: 1px solid;
    line-height: 1;
    padding: 10px 0;
    margin-bottom: 1rem;
  }

  &__close{
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
