// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyAJ4mI-qC0bnaeESZaughHTutpCSj9Vb9M',
  authDomain: 'fir-first-app-c194e.firebaseapp.com',
  databaseURL: 'https://fir-first-app-c194e.firebaseio.com',
  projectId: 'fir-first-app-c194e',
  storageBucket: 'fir-first-app-c194e.appspot.com',
  messagingSenderId: '1441288466'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
