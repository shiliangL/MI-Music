<template>
  <div class="AppSider" ref="AppSider">
    <div class="container" ref="container">
        <div v-for="(item,index) in siderList" :key="index" @click="clickRow(item)">
            <img :src="item.pic" @load="loadImage">
        </div>
    </div>
    <div class="index">
      <span class="item"
        :class="{active: currentPageIndex === index }"
        v-for="(item, index) in dotsArray" :key="index"
        @click="clickIndex(index)"
        >
      </span>
    </div>
  </div>
</template>

<script>

import { addClass } from '@/util/dom.js'
import BScroll from 'better-scroll'
export default {
  name: 'AppSider',
  props: {
    siderList: {
      type: Array
    },
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 2000
    }
  },
  mounted () {
    this.$nextTick().then(() => {
      setTimeout(() => {
        this.setSliderWidth()
        this.initSider()
        this.initDotsArray()
        if (this.autoPlay) {
          this.autoPlaHander()
        }
      }, 20)
    })
    window.addEventListener('resize', () => {
      this.setSliderWidth(true)
      if (this.sider) this.sider.refresh()
    })
  },
  created () {
    this.checkloaded = false
  },
  deactivated () {
    clearTimeout(this.playTimer)
  },
  beforeDestroy () {
    window.removeEventListener('resize', () => {
      this.setSliderWidth(true)
    })
    clearTimeout(this.playTimer)
  },
  data () {
    return {
      currentPageIndex: 0,
      dotsArray: []
    }
  },
  methods: {
    initSider () {
      this.sider = new BScroll(this.$refs['AppSider'], {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: {
          loop: this.loop,
          threshold: 0.3,
          speed: 400
        }
      })

      // 滚动时候 控制 页签
      this.sider.on('scrollEnd', () => {
        let pageIndex = this.sider.getCurrentPage().pageX
        // 更新的better-scroll api 中已经处理了无缝索引的问题
        // if (this.loop) pageIndex -= 1
        console.log(pageIndex)
        this.currentPageIndex = pageIndex
        if (this.autoPlay) this.autoPlaHander()
      })
      this.sider.on('beforeScrollStart', () => {
        if (this.autoPlay) clearTimeout(this.playTimer)
      })
    },
    setSliderWidth () {
      // 计算包裹的宽度
      let children = this.$refs['container'].children
      // 索引长度
      if (children) this.dotsArrayLength = children.length
      let width = 0
      let sliderWidth = this.$refs['AppSider'].clientWidth
      for (const item of children) {
        addClass(item, 'item')
        item.style.width = sliderWidth + 'px'
        width += sliderWidth
      }
      if (this.loop) width += 2 * sliderWidth
      this.$refs['container'].style.width = width + 'px'
    },
    initDotsArray () {
      this.dotsArray = new Array(this.dotsArrayLength)
    },
    autoPlaHander () {
      this.playTimer = setTimeout(() => {
        if (this.sider) this.sider.next()
      }, this.interval)
    },
    clickIndex (index) {
      this.currentPageIndex = index
      if (this.sider) this.sider.goToPage(index, 0, 300)
    },
    clickRow (item) {

    },
    loadImage () {
      if (this.sider && !this.checkloaded) {
        this.checkloaded = true
        this.sider.refresh()
      }
    }
  },
  watch: {
    siderList: {
      handler (val) {
        console.log(val, 'xx')
      }
    }

  }
}
</script>

<style scoped lang="stylus">
  .AppSider
    min-height: 1px
    height 100%
    position: relative
    overflow hidden
    .container
      height 100%
      position: relative
      div
      .item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
    .index
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      height 10px
      text-align: center
      font-size: 0
      z-index 30
      .item
        display: inline-block
        margin: 0 6px
        width: 10px
        height: 10px
        border-radius: 50%
        background: #ccc
        &.active
          width: 20px
          border-radius: 5px
          background: #ffffff
</style>
