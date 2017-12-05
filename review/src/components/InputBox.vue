<template>
  <div class="inputBox">
    <div>
      <input v-model="currentTitle" @input="" placeholder="タイトル">
    </div>
    <div>
      <input v-model="currentText" @input="" placeholder="メモを入力">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentTitle: '',
      currentText: '',
      memo: [
        {
          title: '',
          memo: ''
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="css">
</style>
