import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import VueTouch from 'vue-touch'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import './styles/index.styl'
import './styles/fonts/iconfont.css'
import 'swiper/dist/css/swiper.css'
// 常用方法放到全局
import './public'
Vue.config.productionTip = false
/* eslint-disable no-new */

/* 处理移动端点击300毫秒延迟问题 */
fastclick.attach(document.body)
Vue.use(VueLazyload)
Vue.use(VueTouch)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
