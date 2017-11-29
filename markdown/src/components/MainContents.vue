<template>
  <div class="editor">
    <editArea />
    <previewArea />
  </div>
</template>

<script>
import editArea from './editArea'
import previewArea from './previewArea'

export default {
  components: {
    editArea,
    previewArea
  }
}
</script>

<style lang="scss">
.editor{
  display: flex;
  width: 100vw;
  height: 100vh;

  &__single{
    flex: 1;
  }
}
</style>
