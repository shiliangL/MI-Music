<template>
  <div class="AppSider" ref="AppSider">
    <div class="container" ref="container">
        <div v-for="(item,index) in siderList" :key="index">
            <img :src="item.pic" @load="loadImage">
        </div>
    </div>
    <div class="index"></div>
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
      default: 4000
    }
  },
  mounted () {
    this.$nextTick().then(() => {
      setTimeout(() => {
        this.setSliderWidth()
        this.initSider()
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
  beforeDestroy () {
    window.removeEventListener('resize', () => {
      this.setSliderWidth(true)
    })
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
    },
    setSliderWidth () {
      // 计算包裹的宽度
      let children = this.$refs['container'].children
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
</style>
