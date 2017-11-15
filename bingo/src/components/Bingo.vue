<template>
  <div>
    <div class="bingoWrap">
      <div class="bingoWrap__single" v-for="(item, index) in bingo" :class="{ active: item.isActive }">
        {{ item.number }}
      </div>
    </div>
    <div class="bingoNum">
      <div>
        {{ bingoNum }}
      </div>
      <button @click="getNum()">Get Number</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bingoNum: 0,
      bingo: [
        {
          number: 0,
          isActive: false
        },
        {
          number: 1,
          isActive: false
        },
        {
          number: 2,
          isActive: false
        },
        {
          number: 3,
          isActive: false
        },
        {
          number: 4,
          isActive: false
        },
        {
          number: 5,
          isActive: false
        },
        {
          number: 6,
          isActive: false
        },
        {
          number: 7,
          isActive: false
        },
        {
          number: 8,
          isActive: false
        },
        {
          number: 9,
          isActive: false
        },
        {
          number: 10,
          isActive: false
        },
        {
          number: 11,
          isActive: false
        },
        {
          number: 12,
          isActive: true
        },
        {
          number: 13,
          isActive: false
        },
        {
          number: 14,
          isActive: false
        },
        {
          number: 15,
          isActive: false
        },
        {
          number: 16,
          isActive: false
        },
        {
          number: 17,
          isActive: false
        },
        {
          number: 18,
          isActive: false
        },
        {
          number: 19,
          isActive: false
        },
        {
          number: 20,
          isActive: false
        },
        {
          number: 21,
          isActive: false
        },
        {
          number: 22,
          isActive: false
        },
        {
          number: 23,
          isActive: false
        },
        {
          number: 24,
          isActive: false
        }
      ]
    }
  },
  mounted () {
    this.bingoNumArray = this.bingo.map(function (obj) {
      let rObj = []
      rObj = obj.number
      return rObj
    })
  },
  methods: {
    getNum () {
      let array = this.bingoNumArray
      let num = array[ Math.floor(Math.random() * array.length) ]
      this.bingoNum = num
      this.bingo[num].isActive = true
    },
    checkBingo (num) {
      const bingo = this.bingo
      array00 = [0, 5, 10, 15, 20]

        bingo[i].isActive

    }
  }
}
</script>

<style lang="scss" scoped>
*{
  box-sizing: border-box;
}

.bingoWrap{
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  margin: 0 auto;

  &__single{
    width: 100px;
    height: 100px;
    line-height: 100px;
    background: #eee;
    border:1px solid #fff;
    font-size: 1.1rem;

    &.active{
      background: red;
      color: #fff;
      font-weight: bold;
    }
  }
}


</style>
