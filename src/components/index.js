// 全局组件 服务 对象等
import Vue from 'vue'
import AppHeader from './AppHeader'
import ScrollView from './ScrollView'
const components = [
  AppHeader,
  ScrollView
]
const install = (Vue, opts) => {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

Vue.use(install)
