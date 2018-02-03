// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import 'lib-flexible'
import router from './router'
import App from './App'
import store from './store'
import {AlertPlugin} from 'vux'

FastClick.attach(document.body)

// let SHOPCODE
// let USERID
// let LEVEL
// let CATALOGUE
// SHOPCODE = location.href.split('?')[1].split('&')[0].split('=')[1]
// Vue.prototype.SHOPCODE = SHOPCODE
// console.error('------------' + SHOPCODE)
// localStorage.setItem('SHOPCODE', SHOPCODE)
// USERID = location.href.split('?')[1].split('&')[1].split('=')[1]
// localStorage.setItem('USERID', USERID)
// Vue.prototype.USERID = USERID
// LEVEL = location.href.split('?')[1].split('&')[2].split('=')[1]
// localStorage.setItem('LEVEL', LEVEL)
// Vue.prototype.LEVEL = LEVEL
// CATALOGUE = location.href.split('?')[1].split('&')[3].split('=')[1]
// localStorage.setItem('CATALOGUE', CATALOGUE)
// Vue.prototype.CATALOGUE = CATALOGUE

Vue.config.productionTip = false
Vue.use(AlertPlugin)

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
