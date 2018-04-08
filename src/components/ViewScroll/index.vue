
<template>
  <div ref="ViewScroll" class="ViewScroll">
    <div class="conten">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'ViewScroll',
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: null
    },
    pullup: {
      type: Boolean,
      default: false
    },
    beforeScroll: {
      type: Boolean,
      default: false
    },
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  mounted () {
    setTimeout(() => {
      this.initViewScroll()
    }, 20)
  },
  methods: {
    initViewScroll () {
      if (!this.$refs.ViewScroll) {
        return
      }
      this.scroll = new BScroll(this.$refs.ViewScroll, {
        probeType: this.probeType,
        click: this.click
      })
    },
    disable () {
      this.scroll && this.scroll.disable()
    },
    enable () {
      this.scroll && this.scroll.enable()
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    },
    scrollTo () {
      // apply 让 this 指向better-scroll 实例 方便参数传递
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement () {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }
  },
  watch: {
    data () {
      setTimeout(() => {
        this.refresh()
      }, this.refreshDelay)
    }
  }
}
</script>

<style scoped lang="stylus">
.ViewScroll
  height: 100%
  overflow: hidden
  position relative
  .conten
    position relative
</style>
