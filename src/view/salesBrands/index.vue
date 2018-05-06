<template>
 <transition name="slide">
    <div class="page">
        <AppHeader title="" backgroundTr> </AppHeader>
        <brandsList :data="data"></brandsList>
      <router-view/>
    </div>
 </transition>
</template>

<script>
import { fetchSalesBrands } from '@/api/salesBrands'
import brandsList from './brandsList'
import data from './data.js'

export default {
  name: 'salesBrands',
  components: {
    brandsList
  },
  data () {
    return {
      data: null
    }
  },
  mounted () {
    setTimeout(() => {
      this.data = this.handerData(data.list)
    }, 1000)
  },
  methods: {
    fetchData (params = {}) {
      params.page = 0
      params.size = 10
      fetchSalesBrands(params)
        .then(({ data }) => {
          console.log(data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    handerData (array) {
      // 数据分类 聚合
      const resule = {

      }
      array.forEach((data, index) => {
        // 判断对象中有没有 key 属性 分类挖坑
        let key = data.Findex
        if (!resule[key]) {
          resule[key] = {
            title: key,
            children: []
          }
        }
        // 一个萝卜一个坑
        resule[key].children.push({
          id: data.Fsinger_mid,
          name: data.Fsinger_name,
          img: `https://y.gtimg.cn/music/photo_new/T001R300x300M000${data.Fsinger_mid}.jpg?max_age=2592000`
        })
      })
      // 转化成数组排序
      const ret = []
      for (const key in resule) {
        if (resule.hasOwnProperty(key)) {
          if (key.match(/[a-zA-Z]/)) {
            ret.push(resule[key])
          }
        }
      }
      return ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
    }

  }
}
</script>

<style scoped>

</style>
