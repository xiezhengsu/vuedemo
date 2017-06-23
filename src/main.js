// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../static/css/animate.css'
import '../static/css/ysemm.css'
import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false
Vue.use(BaiduMap, {
  ak: 'mkttoDbHl6tvZVzaW2bxi5pMwqfyDSKc'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  $,
  template: '<App/>',
  components: { App }
})
