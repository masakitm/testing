<template>
  <p>{{ string }}</p>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'form',
  computed: mapGetters('String', {
    'string': 'getString'
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
