<template>
  <div>
    <div>
      <button v-for="item in buttons" @click="addFormula(item)">{{ item }}</button>
    </div>
    <div>
      <button @click="clearFormula">clear</button>
      <button @click="calcFormula">calculate</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: mapGetters([
    'buttons'
  ]),
  methods: {
    addFormula (val) {
      this.$store.commit('addFormula', val)
    },
    ...mapActions({
      clearFormula: 'clearFormula',
      calcFormula: 'calcFormula'
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
