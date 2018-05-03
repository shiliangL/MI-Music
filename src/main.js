// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
import './styles/index.scss'

// 使用公共全局组件
import './components'
import './mock'

Vue.use(Vant)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
