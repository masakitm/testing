// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

const Foo = { template: '<div>Foo</div>' }
const Bar = { template: '<div>Bar</div>' }
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}
const User01 = {
  template: '<div>User {{ $route.params.username }} {{ $route.params.post_id }}</div>'
}
const User02 = {
  template: '<div class="user"><router-link to="/nest/id123">個別ページ</router-link> <router-link to="/nest/id123/profile">プロフィール</router-link><router-link to="/nest/id123/posts">投稿一覧</router-link><router-view /></div>'
}
const UserProfile = {
  template: '<div><h2>ユーザープロファイルです</h2></div>'
}
const UserPosts = {
  template: '<div><h2>このユーザーの投稿です</h2></div>'
}

const routes = [
  {
    path: '/foo',
    component: Foo
  },
  {
    path: '/bar',
    component: Bar
  },
  {
    path: '/user/:id',
    component: User
  },
  {
    path: '/user/:username/post/:post_id',
    component: User01
  },
  {
    path: '/nest/:id',
    component: User02,
    children: [
      {
        path: 'profile',
        component: UserProfile
      },
      {
        path: 'posts',
        component: UserPosts
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
