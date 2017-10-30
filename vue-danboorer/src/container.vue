<template>
  <div id="wrapper">
    <loading></loading>
    <upperParts></upperParts>
    <tagName></tagName>
    <postsWrap></postsWrap>
  </div>
</template>

<script>
import loading from './loading.vue'
import upperParts from './upperParts.vue'
import tagName from './tagName.vue'
import postsWrap from './postsWrap.vue'

export default {
  components: {
    loading,
    upperParts,
    tagName,
    postsWrap
  }
}
</script>
