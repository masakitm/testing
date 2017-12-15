<template>
  <div>
    <input v-model="userId">
    <button @click="link01"></button>
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      userId: '00'
    }
  }
}
</script>

<style lang="css">
</style>
