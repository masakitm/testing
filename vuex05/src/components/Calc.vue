<template>
  <div>
    <div>
      {{ formula }}
    </div>
    <Buttons />
  </div>
</template>

<script>
import Buttons from './Buttons'
import { mapGetters } from 'vuex'

export default {
  name: 'Calc',
  computed: mapGetters([
    'formula'
  ]),
  components: {
    Buttons
  }
}
</script>

<style lang="scss">

</style>
