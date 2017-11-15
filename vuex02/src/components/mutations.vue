<script>
import mapMutations from 'Vuex'

export default {
  name: 'mutations',
  methods: {
    ...mapMutations([
      'increment',
      'incrementBy'
    ])
  },
  ...mapMutations({
    add: 'increment'
  })
}
</script>
