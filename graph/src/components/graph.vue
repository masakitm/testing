<template>
  <div id="demo">
    <svg class="colorBox" viewbox="0 0 100vw 100vh" width="100vw" height="100vh">
      <rect class="colorBox__inner" x="0" y="0" width="100vw" height="100vh" :fill="rgbaText"></rect>
    </svg>

    <div class="meters" :style="textColor">
      R <input type="range" max="255" v-model="rgba.r"><br>
      G <input type="range" max="255" v-model="rgba.g"><br>
      B <input type="range" max="255" v-model="rgba.b"><br>
      A <input type="range" max="1" step="0.01" v-model="rgba.a"><br>
      {{ rgbaText }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'graph',
  data () {
    return {
      x1: 100,
      rgba: {
        r: 0,
        g: 0,
        b: 0,
        a: 1
      }
    }
  },
  computed: {
    rgbaText: function () {
      return 'rgba(' + this.rgba.r + ',' + this.rgba.g + ',' + this.rgba.b + ',' +
       this.rgba.a + ')'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.meters{
  position: fixed;
  bottom: 0;
  right: 0;
  color: #fff;
  width: 13vw;
  padding: 1rem;
  background: rgba(0,0,0,0.25);
}

input{
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 2px;
  vertical-align: 5px;
  outline: none;
}
</style>
