import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import './styles/index.styl'
Vue.config.productionTip = false
/* eslint-disable no-new */

/* 处理移动端点击300毫秒延迟问题 */
fastclick.attach(document.body)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
