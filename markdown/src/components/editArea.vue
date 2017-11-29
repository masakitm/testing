<template>
  <div class="editor__single">
    <textarea v-model="text" @keyup="inputtingText(text)" class="textEditBox" name="name"></textarea>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {text: ''}
  },
  methods: {
    ...mapActions([
      'inputtingText'
    ])
  }
}
</script>

<style lang="scss">
  .textEditBox{
    width: 100%;
    height: 100%;
    border: none;
    border-right: 2px solid #ccc;
  }
</style>
