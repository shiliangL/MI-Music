import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/view/Layout/index'
import Find from '@/view/Find/index'
import Rank from '@/view/Rank/index'
import Singer from '@/view/Singer/index'
import DetailsPage from '@/view/DetailsPage/index'
import Recommend from '@/view/Recommend/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      redirect: '/Find',
      component: Layout,
      children: [
        { path: '/Find',
          component: Find,
          name: 'Find',
          children: [
            { path: 'DetailsPage', component: DetailsPage, name: 'DetailsPage' }
          ]
        },
        { path: '/Rank', component: Rank, name: 'Rank' },
        { path: '/Singer',
          component: Singer,
          name: '/Singer',
          children: [
            // { path: ':id', component: DetailsPage, name: 'DetailsPage' }
          ]
        },
        { path: 'Recommend', component: Recommend, name: 'Recommend' }
      ]
    }
  ]
})
