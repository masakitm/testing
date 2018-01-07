<template>
  <div class="catNav">
    <div class="catNav__single" v-for="item in category">
      <router-link class="link" :to="item.to" :category="item.name">
        {{ item.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      category: [
        { name: '国内', to: '/category/国内' },
        { name: '国際', to: '/category/国際' },
        { name: 'ビジネス', to: '/category/ビジネス' },
        { name: '政治', to: '/category/政治' },
        { name: 'エンタメ', to: '/category/エンタメ' },
        { name: 'スポーツ', to: '/category/スポーツ' },
        { name: 'テクノロジー', to: '/category/テクノロジー' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
