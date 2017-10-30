<template>
  <header>
    <div class="titleWrap">
      <h1 class="titleWrap__single"><a href="">danbooruer</a></h1>
    </div>

    <div class="seacher">
      <input v-model="tags" @keyup.enter="tagsSearch(tags)" placeholder="ex:large_*">
    </div>
  </header>
</template>

<script>
  export default{
  }
</script>
