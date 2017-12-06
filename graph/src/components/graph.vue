<template>
  <div id="demo" v-cloak>
    <transition name="caption">
      <div class="caption" v-if="showCaption">
        Gradation Editor
      </div>
    </transition>

    <div id="svgColorBox" class="colorBox">
      <!-- base -->
      <svg class="colorBox__single colorBox__single--base" viewbox="0 0 100vw 100vh" width="100vw" height="100vh">
        <rect x="0" y="0" width="100vw" height="100vh" :fill="rgbaText(this.rgba.base)"></rect>
      </svg>
      <!-- /base -->

      <!-- layer01 -->
      <svg class="colorBox__single" viewbox="0 0 100vw 100vh" width="100vw" height="100vh">
        <defs>
           <linearGradient id="layer01" x1="0%" y1="0%" x2="50%" y2="50%">
             <stop offset="0%" :stop-color="rgbaText(this.rgba.layer01)" stop-opacity="1"/>
             <stop offset="100%" :stop-color="inheritColor(this.rgba.layer01)" stop-opacity="1"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="100vw" height="100vh" fill="url(#layer01)"></rect>
      </svg>
      <!-- /layer01 -->

      <!-- layer02 -->
      <svg class="colorBox__single" viewbox="0 0 100vw 100vh" width="100vw" height="100vh">
        <defs>
           <linearGradient id="layer02" x1="100%" y1="0%" x2="50%" y2="50%">
             <stop offset="0%" :stop-color="rgbaText(this.rgba.layer02)" stop-opacity="1"/>
             <stop offset="100%" :stop-color="inheritColor(this.rgba.layer02)" stop-opacity="1"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="100vw" height="100vh" fill="url(#layer02)"></rect>
      </svg>
      <!-- /layer02 -->

      <!-- layer02 -->
      <svg class="colorBox__single" viewbox="0 0 100vw 100vh" width="100vw" height="100vh">
        <defs>
           <linearGradient id="layer03" x1="0%" y1="100%" x2="50%" y2="50%">
             <stop offset="0%" :stop-color="rgbaText(this.rgba.layer03)" stop-opacity="1"/>
             <stop offset="100%" :stop-color="inheritColor(this.rgba.layer03)" stop-opacity="1"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="100vw" height="100vh" fill="url(#layer03)"></rect>
      </svg>
      <!-- /layer02 -->
    </div>

    <div class="meters" :class="{active : showMeters}">
      <div class="meters__toggle" @click="toggleMeters()">▶</div>

      <transition name="slide">
        <div class="metersInner" v-if="showMeters">
          <div class="metersInner__single">
            <p>base</p>
            R <input type="range" max="255" v-model="rgba.base.r"><br>
            G <input type="range" max="255" v-model="rgba.base.g"><br>
            B <input type="range" max="255" v-model="rgba.base.b"><br>
            A <input type="range" max="1" step="0.01" v-model="rgba.base.a"><br>
            {{ rgbaText(this.rgba.base) }}
          </div>

          <div class="metersInner__single">
            <p>layer01</p>
            R <input type="range" max="255" v-model="rgba.layer01.r"><br>
            G <input type="range" max="255" v-model="rgba.layer01.g"><br>
            B <input type="range" max="255" v-model="rgba.layer01.b"><br>
            A <input type="range" max="1" step="0.01" v-model="rgba.layer01.a"><br>
            {{ rgbaText(this.rgba.layer01) }}
          </div>

          <div class="metersInner__single">
            <p>layer02</p>
            R <input type="range" max="255" v-model="rgba.layer02.r"><br>
            G <input type="range" max="255" v-model="rgba.layer02.g"><br>
            B <input type="range" max="255" v-model="rgba.layer02.b"><br>
            A <input type="range" max="1" step="0.01" v-model="rgba.layer02.a"><br>
            {{ rgbaText(this.rgba.layer02) }}
          </div>

          <div class="metersInner__single">
            <p>layer03</p>
            R <input type="range" max="255" v-model="rgba.layer03.r"><br>
            G <input type="range" max="255" v-model="rgba.layer03.g"><br>
            B <input type="range" max="255" v-model="rgba.layer03.b"><br>
            A <input type="range" max="1" step="0.01" v-model="rgba.layer03.a"><br>
            {{ rgbaText(this.rgba.layer03) }}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'graph',
  data () {
    return {
      showCaption: true,
      showMeters: true,
      rgba: {
        base: {
          r: 231,
          g: 123,
          b: 200,
          a: 1
        },
        layer01: {
          r: 45,
          g: 128,
          b: 100,
          a: 0.75
        },
        layer02: {
          r: 255,
          g: 149,
          b: 208,
          a: 1
        },
        layer03: {
          r: 255,
          g: 169,
          b: 96,
          a: 1
        }
      }
    }
  },
  created () {
    let hideCaption = this.hideCaption
    setTimeout(hideCaption, 3000)
  },
  methods: {
    toggleMeters () {
      this.showMeters = !this.showMeters
    },
    rgbaText (rgbaName) {
      return 'rgba(' + rgbaName.r + ',' + rgbaName.g + ',' + rgbaName.b + ',' +
       rgbaName.a + ')'
    },
    inheritColor (rgbaName) {
      return 'rgba(' + rgbaName.r + ',' + rgbaName.g + ',' + rgbaName.b + ',' + '0' + ')'
    },
    hideCaption () {
      this.showCaption = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#demo{
  position: relative;
}

.caption{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  color: #fff;
  font-weight: bold;
  font-size: 3rem;
  text-shadow: 0 1px 1px rgba(0,0,0,0.5)
}

.colorBox{
  position: relative;
  width: 100vw;
  height: 100vh;
  cursor: pointer;

  &__single{
    position: absolute;
    top: 0;
    left: 0;
  }
}

.meters{
  position: fixed;
  bottom: 0;
  right: 0;
  color: #fff;
  padding: 1.5rem 1rem;
  background: rgba(0,0,0,0.25);

  & > *{
    vertical-align: middle;
  }

  &Inner{
    overflow: hidden;
    display: inline-block;

    &__single{
      min-width: 13vw;
      display: inline-block;
      margin: 0 0.5rem;
    }
  }

  &__toggle{
    display: inline-block;
    cursor: pointer;
    top: 0;
    height: 100%;
    line-height: 150px;
    vertical-align: middle;
  }
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
