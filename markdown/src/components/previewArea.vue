<template>
  <div class="editor__single">
    <div class="previewBox" v-html="$store.state.inputText | markedText"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Marked from 'marked'

export default {
  computed: {
    ...mapGetters([
      'parsedText'
    ])
  },
  filters: {
    markedText: Marked
  }
}
</script>

<style lang="scss">
.previewBox{
  width: 100%;
  height: 100%;
  background: #eee;
}
</style>
