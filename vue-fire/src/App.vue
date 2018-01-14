<template>
  <div id="app">
    <button type="button" class="btn btn-default" @click="login">
      匿名ユーザーでログイン
    </button>

    <div class="">
      <label for="nameInput">名前</label>
      <input type="text" id="nameInput" v-model="name">
    </div>

    <div class="">
      <label for="messageInput">メッセージ</label>
      <input type="text" id="nameInput" v-model="message">
    </div>


    <button type="button" class="btn btn-default" @click="sendMessage">
      送信
    </button>

    <ul>
      <li v-for="item, index in list">
        {{ index }} - {{item.name}} - {{item.message}}
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'app',
  data () {
    return {
      list: [],
      name: '',
      message: ''
    }
  },
  created () {
    // 認証チェック
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('ログイン状態.')
        this.listen()
      } else {
        console.log('ログインしていない状態')
      }
    })
  },
  methods: {
    login () {
      firebase.auth().signInAnonymously().then(e => {
        console.log(e)
        this.listen()
      }).catch((error) => {
        // ログインのエラーメッセージ
        var errorCode = error.code
        var errorMessage = error.message
        console.log('ログインエラーメッセージ', errorCode, errorMessage)
      })
    },
    pushData () {
      firebase.database().ref('myBoard/').push({
        name: this.name,
        message: this.message
      })
    },
    listen () {
      firebase.database().ref('myBoard/').on('value', snapshot => {
        if (snapshot) {
          const rootList = snapshot.val()
          let list = []
          Object.keys(rootList).forEach((val, key) => {
            rootList[val].id = val
            list.push(rootList[val])
          })
          this.list = list
        }
      })
    },
    sendMessage () {
      if (!this.name || !this.message) return

      firebase.database().ref('myBoard/').push({
        name: this.name,
        message: this.message
      })

      this.name = ''
      this.message = ''
    }
  }
}
</script>

<style>
</style>
