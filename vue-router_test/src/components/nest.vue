<template>
  <div>
    <h1>Page {{ $route.params.id }}</h1>
    <router-link to="/nest/id123/">id123</router-link>

    <router-view />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
