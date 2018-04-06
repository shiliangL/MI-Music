<template>
  <div class="Singer">
    <ViewScroll :data="pape.list">
      <ListView :data="pape.list"></ListView>
    </ViewScroll>
    <div class="letter-bar">
      <ul>
        <li v-for="(item, index) in letterTitle" :data-index="index" class="item" :key="index"
            :class="{'current':currentIndex===index}">{{item}}
        </li>
      </ul>
    </div>
    <div class="letter-fixed">
      <span>测试</span>
    </div>
  </div>
</template>

<script>
import { fetchSingerList } from '@/Api/jsonpApi.js'
import { ListView, ViewScroll } from '@/components/common.js'
export default {
  name: 'Singer',
  components: {
    ListView,
    ViewScroll
  },
  data () {
    return {
      pape: {
        list: []
      },
      currentIndex: null
    }
  },
  computed: {
    letterTitle () {
      return this.pape.list.map(item => {
        return item.title.substr(0, 1)
      })
    }
  },
  mounted () {
    this.fetchSongsList()
  },
  methods: {
    fetchSongsList () {
      fetchSingerList().then(data => {
        if (data.code === 0) {
          // 处理数据结构
          this.pape.list = this.handlerData(data.data.list)
        }
      })
    },
    handlerData (array) {
      let data = {
        topTen: {
          title: '前十',
          data: []
        }
      }
      array.forEach((item, index) => {
        if (index < 10) {
          data.topTen.data.push({
            id: item.Fsinger_id,
            name: item.Fsinger_name,
            avatar: `https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`
          })
        }
        // 分类
        let key = item.Findex
        if (!data[key]) {
          data[key] = {
            title: item.Findex,
            data: []
          }
        }
        data[key].data.push({
          id: item.Fsinger_id,
          name: item.Fsinger_name,
          avatar: `https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`
        })
      })
      let hot = []
      let ret = []
      for (let item in data) {
        if (item.match(/[a-zA-Z]/)) {
          ret.push(data[item])
        } else {
          hot.push(data[item])
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(ret)
    }
  }
}
</script>

<style scoped lang="stylus">
.Singer
  height: 100%;
  overflow hidden
  .letter-bar
    position: absolute
    z-index: 30
    right: 0
    top: 50%
    transform: translateY(-50%)
    width: 20px
    padding: 10px 0
    border-radius: 10px
    text-align: center
    background: #f1e1e173;
    font-family: Helvetica
    .item
      padding: 3px
      line-height: 1
      font-size: 13px
      &.current
        color: $color-theme
  .letter-fixed
    position: absolute
    top: 90px
    left: 0
    width: 100%
    span
      height: 30px
      padding-left: 20px
      font-size: $font-size-small
  .loading-container
    position: absolute
    width: 100%
    top: 50%
    transform: translateY(-50%)
</style>
