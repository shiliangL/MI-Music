// 全局组件 服务 对象等
import Vue from 'vue'
import AppHeader from './AppHeader'
const components = [
  AppHeader
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
