<template>
  <div class="AppSider" ref="slider">
      <div class="siderItem" ref="siderItem">
          <div v-for="(item,index) in siderList" :key="index">
             <img :src="item.picUrl" style="width: 375px;">
          </div>
      </div>
      <div class="index"></div>
  </div>
</template>

<script>
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
        // this.setSliderWidth()
        // this.initSider()
      }, 20)
    })
  },
  created () {
    console.log(this.siderList)
    console.log('创建')
  },
  beforeDestroy () {
    window.removeEventListener('resize', () => {
      this.setSliderWidth(true)
      this.initSider()
    })
  },
  methods: {
    initSider () {
      this.sider = new BScroll(this.$refs['siderItem'], {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: true,
        snapThreshold: 0.3,
        snapSpeed: 400
      })
    },
    setSliderWidth () {
      // 计算包裹的宽度
      let children = this.$refs['siderItem'].children
      let width = 0
      let sliderWidth = this.$refs['slider'].clientWidth
      for (const item of children) {
        item.style.width = sliderWidth + 'px'
        width += sliderWidth
      }
      this.$refs['siderItem'].style.width = width + 'px'
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
    overflow hidden
    .siderItem
      div
        width 100%
        height 230px
</style>
