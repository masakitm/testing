<template>
  <div class="container">
    <div class="block">
      <div class="inputs" :class="{close: inputClose}">
        <input placeholder="input item name" v-model="item.name"></input>
        <textarea
          type="textarea"
          :rows="2"
          placeholder="input item information"
          v-model="item.text">
        </textarea>
        <el-rate class="inputs_star" v-model="item.value" :colors="['#2F3D4D', '#64B486', '#4B7C6E']"></el-rate>

        <button class="button" type="button" name="button" @click="addItem(item)">add!</button>
      </div>
      <div class="toggle" @click="toggleInput()">
        ▼
      </div>

      <div class="itemList">
        <h1>REVIEWS</h1>

        <div class="itemList__single" v-for="review, index in $store.state.items">
          {{ review.name }}
          <el-rate v-model="review.point" :colors="['#2F3D4D', '#64B486', '#4B7C6E']" disabled></el-rate>
          <div class="">
            {{ review.text }}
          </div>
          <button type="button" name="button" @click="removeItem(index)" :remove="index">remove</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      inputClose: true,
      item: {
        name: '',
        value: 0,
        text: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'addItem',
      'removeItem'
    ]),
    toggleInput () {
      this.inputClose = !this.inputClose
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  text-align: center;
}

textarea, input{
  width: 100%;
  font-size: 15px;
  padding: 1rem;
  border: none;
  transition: 0.5s;
}

input + textarea,
textarea + textarea,
input + input,
textarea + input{
  margin: 5px 0 0 0;
}

h1{
  margin-bottom: 1rem;
}

.inputs{
  padding: 2rem 10vw;
  margin: 0 auto;
  background: #eee;
  transition: 0.5s;
}

.inputs.close{
  height: 6px;
  padding: 3px 10vw;
  overflow: hidden;
  font-size: 0;
}

.inputs.close input,
.inputs.close textarea{
  height: 0;
  padding: 0 1rem;
}

.inputs_star{
  display: inline-block;
  margin: 1rem 0 0 0;
}

.inputs_star .el-rate__icon{
  font-size: 1.8rem;
}

.itemList{
  padding: 2rem;
}

.itemList__single{
  text-align: left;
}

a, button{
  transition: 0.2s;
  cursor: pointer;
}

a:hover,
button:hover{
  opacity: 0.7;
}

.button{
  display: block;
  margin: 2rem auto 0;
  line-height: 1;
  padding: 1rem 3rem;
  font-size: 1.1rem;
  border: none;
  color: #fff;
  font-weight: bold;
  background: rgb(75, 124, 110);
}

.toggle{
  font-size: 1.8rem;
  color: #eee;
  line-height: 1;
}

</style>
