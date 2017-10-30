<template>
  <div class="tagName" v-show="tags">
    <a :href="tagPageLink(tags)" target="_blank">
        {{ tags }}
    </a>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        tags: ''
      }
    }
  }
</script>
