import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
/** 路由赖加载配置 **/

// const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
// const BasicsPay = resolve => require(['pages/basics/Pay.vue'], resolve)
const Layout = (resolve) => {
  import('view/layout').then((module) => {
    resolve(module)
  })
}
const ProgressForm = (resolve) => {
  import('view/progressForm').then((module) => {
    resolve(module)
  })
}
const ClassifyForm = (resolve) => {
  import('view/classifyForm').then((module) => {
    resolve(module)
  })
}
const MonthlySales = (resolve) => {
  import('view/monthlySales').then((module) => {
    resolve(module)
  })
}
const DaySales = (resolve) => {
  import('view/daySales').then((module) => {
    resolve(module)
  })
}
const SalesBrands = (resolve) => {
  import('view/salesBrands').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      // redirect: '/',
      name: 'Layout',
      component: Layout,
      children: [
        { path: '/progressForm', component: ProgressForm, name: 'progressForm' },
        { path: '/classifyForm', component: ClassifyForm, name: 'classifyForm' },
        { path: '/monthlySales', component: MonthlySales, name: 'monthlySales' },
        { path: '/salesBrands', component: SalesBrands, name: 'salesBrands' },
        { path: '/daySales', component: DaySales, name: 'daySales' }
      ]
    }
  ]
})
